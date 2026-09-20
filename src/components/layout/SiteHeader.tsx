import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/explore", label: "Explore" },
  { to: "/pulse", label: "Pulse" },
  { to: "/compare", label: "Compare" },
  { to: "/what-if", label: "What-If" },
] as const;

export function Wordmark({ className }: { className?: string | undefined }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-leaf"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
      >
        <circle cx="12" cy="12" r="9.5" />
        <ellipse cx="12" cy="12" rx="4.2" ry="9.5" />
        <path d="M2.5 12h19" />
      </svg>
      <span className="text-[0.8125rem] font-semibold tracking-[0.32em]">TERRALENS</span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="pointer-events-auto sr-only rounded-md bg-foreground px-3 py-2 text-background focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <div className="pointer-events-auto border-b border-border bg-background/70 backdrop-blur-xl">
        <nav
          aria-label="Main"
          className="mx-auto flex h-14 max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-10"
        >
          <Link to="/" className="rounded-md py-1 text-foreground" aria-label="TerraLens home">
            <Wordmark />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="rounded-full px-4 py-2 text-[0.6875rem] font-medium uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "!text-foreground bg-accent", "aria-current": "page" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <ul id="mobile-nav" className="border-t border-border px-4 pb-4 pt-2 md:hidden">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="block rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
                  activeProps={{ className: "!text-foreground bg-accent", "aria-current": "page" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
