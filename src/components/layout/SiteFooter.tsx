import { Link } from "@tanstack/react-router";
import { useAtlas } from "@/lib/data/atlas-query";
import { Wordmark } from "./SiteHeader";

export function DataStatus() {
  const { atlas, isSyncing, remoteError, retry } = useAtlas();
  const label = isSyncing
    ? "Syncing with database…"
    : atlas.origin === "supabase"
      ? "Live data · Supabase"
      : remoteError
        ? "Offline copy · database unreachable"
        : "Bundled dataset";
  return (
    <span className="inline-flex items-center gap-2 text-xs text-subtle" role="status">
      <span
        aria-hidden
        className="h-1.5 w-1.5 rounded-full"
        style={{
          background: atlas.origin === "supabase" ? "#83b98d" : remoteError ? "#dc8d55" : "#9aa39f",
        }}
      />
      {label}
      {remoteError && (
        <button
          type="button"
          onClick={() => retry()}
          className="underline underline-offset-2 hover:text-foreground"
        >
          Retry
        </button>
      )}
    </span>
  );
}

export function SiteFooter() {
  const { atlas } = useAtlas();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            An interactive atlas of environmental change, causes, impacts, and solutions.
          </p>
          <div className="mt-6">
            <DataStatus />
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="eyebrow">Atlas</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/explore" className="hover:text-foreground">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/pulse" className="hover:text-foreground">
                Pulse
              </Link>
            </li>
            <li>
              <Link to="/compare" className="hover:text-foreground">
                Compare
              </Link>
            </li>
            <li>
              <Link to="/what-if" className="hover:text-foreground">
                What-If
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="eyebrow">About the data</p>
          <p className="mt-4 text-sm text-muted-foreground">
            {atlas.locations.length} places and {atlas.issues.length} documented issues.
            Quantitative indicators appear only where a reliable figure exists; every issue links to
            its sources. Severity is descriptive, never a score. What-If scenarios are illustrative,
            not predictions.
          </p>
        </div>
      </div>
    </footer>
  );
}
