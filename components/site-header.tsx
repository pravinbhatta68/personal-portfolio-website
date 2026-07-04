"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand, navItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/72 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link href="/" className="group flex items-center" aria-label={`${brand.name} home`}>
          <Image
            src="/My logo.png"
            alt={`${brand.name} logo`}
            width={172}
            height={56}
            priority
            className="h-12 w-auto object-contain sm:h-14"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-white/68 transition hover:bg-white/[0.06] hover:text-white",
                pathname === item.href && "bg-white/[0.08] text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <LinkButton href="/contact" size="sm">Book a Consultation</LinkButton>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-background/96 px-4 py-5 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/78 hover:bg-white/[0.06] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <LinkButton href="/contact" className="mt-2" onClick={() => setOpen(false)}>Book a Consultation</LinkButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
