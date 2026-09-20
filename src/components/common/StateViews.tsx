import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { buttonClass } from "@/lib/button-class";
import { cn } from "@/lib/utils";

export function Spinner({ className }: { className?: string | undefined }) {
  return (
    <span
      aria-hidden
      className={cn(
        "inline-block h-4 w-4 animate-spin rounded-full border-2 border-border-strong border-t-leaf",
        className,
      )}
    />
  );
}

export function LoadingState({
  label = "Loading",
  className,
}: {
  label?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn("flex min-h-[40vh] items-center justify-center gap-3", className)}
    >
      <Spinner />
      <span className="eyebrow">{label}…</span>
    </div>
  );
}

export function EmptyState({
  title,
  children,
  action,
  className,
}: {
  title: string;
  children?: ReactNode;
  action?: ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-dashed border-border-strong px-6 py-10 text-center",
        className,
      )}
    >
      <p className="text-base font-medium">{title}</p>
      {children && (
        <div className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">{children}</div>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function NotFoundState({ kind, id }: { kind: "location" | "issue" | "page"; id?: string }) {
  const noun = kind === "page" ? "page" : kind;
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">Not in the atlas</p>
      <h1 className="display mt-4 text-4xl sm:text-5xl">This {noun} could not be found.</h1>
      <p className="mt-4 text-muted-foreground">
        {id ? (
          <>
            We have no {noun} called <span className="font-mono text-foreground">“{id}”</span>.{" "}
          </>
        ) : null}
        It may have been renamed, or the link may be incorrect.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/explore" className={buttonClass("primary")}>
          Explore Earth
        </Link>
        <Link to="/" className={buttonClass("ghost")}>
          Home
        </Link>
      </div>
    </main>
  );
}
