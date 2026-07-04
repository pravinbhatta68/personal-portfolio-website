import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
};

const styles = {
  primary:
    "border-transparent bg-gradient-to-r from-accent via-accent-2 to-emerald-300 text-black shadow-glow hover:brightness-110",
  secondary:
    "border-white/14 bg-white/[0.06] text-white hover:border-accent/70 hover:bg-white/[0.1]",
  ghost: "border-transparent text-white/75 hover:bg-white/[0.06] hover:text-white",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & CommonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-60",
        styles[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> &
  CommonProps & {
    href: string;
  }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full border font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
        styles[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
