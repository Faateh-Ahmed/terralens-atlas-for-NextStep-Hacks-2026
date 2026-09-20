import { queryOptions, useQuery, type QueryClient } from "@tanstack/react-query";
import type { Atlas } from "@/types/atlas";
import { getBundledAtlas, mergeAtlas } from "./build-atlas";
import { fetchSupabaseAtlas } from "./supabase-repository";

const REMOTE_TIMEOUT_MS = 8000;

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error("Supabase request timed out")), ms);
    promise.then(
      (v) => {
        clearTimeout(timer);
        resolve(v);
      },
      (e) => {
        clearTimeout(timer);
        reject(e);
      },
    );
  });
}

async function loadAtlas(): Promise<Atlas> {
  const remote = await withTimeout(fetchSupabaseAtlas(), REMOTE_TIMEOUT_MS);
  return mergeAtlas(getBundledAtlas(), remote);
}

/**
 * The atlas renders immediately from the bundled dataset (so SSR and first
 * paint never block), then refreshes from Supabase in the browser. If the
 * request fails the bundled data stays in place and `isError` is exposed.
 */
export const atlasQueryOptions = queryOptions({
  queryKey: ["atlas"],
  queryFn: loadAtlas,
  initialData: getBundledAtlas,
  initialDataUpdatedAt: 0,
  staleTime: 10 * 60 * 1000,
  retry: 1,
  structuralSharing: false,
  refetchOnWindowFocus: false,
});

/**
 * Route-loader existence check, so unknown ids can return a real 404. Bundled
 * data answers immediately; only unknown ids consult the live dataset, so
 * records that exist only in the database still resolve.
 */
export async function existsInAtlas(
  queryClient: QueryClient,
  has: (atlas: Atlas) => boolean,
): Promise<boolean> {
  if (has(getBundledAtlas())) return true;
  try {
    return has(await queryClient.fetchQuery(atlasQueryOptions));
  } catch {
    return false;
  }
}

export function useAtlas() {
  const query = useQuery(atlasQueryOptions);
  return {
    atlas: query.data,
    /** True while the remote dataset has not yet settled. */
    isSyncing: query.data.origin === "bundled" && query.isFetching,
    remoteError: query.isError ? query.error : null,
    retry: query.refetch,
  };
}
