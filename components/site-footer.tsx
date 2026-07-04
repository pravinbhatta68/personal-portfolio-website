import Link from "next/link";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { brand, blogPosts, navItems, services } from "@/lib/data";

const socials = [
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/" },
  { label: "GitHub", icon: Github, href: "https://github.com/" },
  { label: "Facebook", icon: Facebook, href: "https://www.facebook.com/" },
  { label: "Instagram", icon: Instagram, href: "https://www.instagram.com/" },
  { label: "X", icon: Twitter, href: "https://x.com/" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/25">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="mb-4 flex items-center gap-3 font-semibold text-white">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-accent/30 bg-accent/10 text-accent">AP</span>
            {brand.name}
          </Link>
          <p className="max-w-md text-sm leading-7 text-white/60">
            Premium AI marketing consulting for businesses that want smarter systems, faster execution, and measurable growth.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/70 transition hover:border-accent/60 hover:text-accent"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links" links={navItems} />
        <FooterColumn title="Services" links={services.slice(0, 5).map((service) => ({ label: service.title, href: `/services/${service.slug}` }))} />
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">Contact</h3>
          <div className="space-y-3 text-sm text-white/62">
            <p><a href={`mailto:${brand.email}`} className="hover:text-accent">{brand.email}</a></p>
            <p><a href={`tel:${brand.phone.replaceAll(" ", "")}`} className="hover:text-accent">{brand.phone}</a></p>
            <p>{brand.location}</p>
            <p><Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-accent">Latest insight</Link></p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/45">
        © 2026 Asthetic Pravin. All Rights Reserved.
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/45">{title}</h3>
      <div className="grid gap-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-white/62 transition hover:text-accent">
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
