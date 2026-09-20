import { cn } from "@/lib/utils";

/** Shared pill-button styling for links and buttons. */
export function buttonClass(
  variant: "primary" | "ghost" | "outline" = "primary",
  size: "md" | "lg" = "md",
) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-colors disabled:pointer-events-none disabled:opacity-50",
    size === "lg" ? "h-12 px-7 text-sm" : "h-10 px-5 text-[0.8125rem]",
    variant === "primary" && "bg-foreground text-background hover:bg-leaf",
    variant === "outline" &&
      "border border-border-strong text-foreground hover:border-leaf hover:text-leaf",
    variant === "ghost" && "text-muted-foreground hover:bg-accent hover:text-foreground",
  );
}
