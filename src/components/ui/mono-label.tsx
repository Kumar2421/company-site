import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** DM Mono uppercase eyebrow / meta label. */
export function MonoLabel({
  className,
  ...props
}: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "font-mono text-label tracking-[0.06em] uppercase text-ink-56",
        className,
      )}
      {...props}
    />
  );
}
