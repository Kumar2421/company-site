import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const novaButtonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-pill font-medium whitespace-nowrap transition-colors duration-150 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-brand text-white hover:bg-brand-hover",
        outline:
          "border border-brand text-brand hover:bg-brand hover:text-white",
        light: "bg-white text-ink hover:bg-white/85",
        soft: "bg-ink-08 text-ink hover:bg-ink/15",
      },
      size: {
        lg: "h-14 px-8 text-lead",
        md: "h-11 px-6 text-body",
        sm: "h-9 px-4 text-small",
      },
    },
    defaultVariants: { variant: "solid", size: "lg" },
  },
);

type Variants = VariantProps<typeof novaButtonVariants>;

export function NovaButton({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"button"> & Variants) {
  return (
    <button
      className={cn(novaButtonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function NovaButtonLink({
  className,
  variant,
  size,
  ...props
}: ComponentProps<"a"> & Variants) {
  return (
    <a className={cn(novaButtonVariants({ variant, size }), className)} {...props} />
  );
}

/** Trailing arrow that nudges on hover of the parent button. */
export function ButtonArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      className={cn(
        "size-[1.1em] shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0",
        className,
      )}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h12M11 5l5 5-5 5" />
    </svg>
  );
}
