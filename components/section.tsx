import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("mx-auto mb-12 max-w-3xl", align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {text ? <p className="mt-4 text-base leading-8 text-white/65 sm:text-lg">{text}</p> : null}
    </div>
  );
}
