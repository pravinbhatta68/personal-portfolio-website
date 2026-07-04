import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Section, SectionHeading } from "@/components/section";
import { GlassCard } from "@/components/ui/card";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Pravin Bhatta for AI marketing consulting, automation, SEO strategy, and business AI integration.",
};

const contactItems = [
  { icon: Mail, label: "Email", value: brand.email, href: `mailto:${brand.email}` },
  { icon: Phone, label: "Phone", value: brand.phone, href: `tel:${brand.phone.replaceAll(" ", "")}` },
  { icon: MapPin, label: "Location", value: brand.location },
  { icon: Clock, label: "Business Hours", value: "Monday - Friday, 9:00 AM - 6:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <Section className="pt-24">
        <SectionHeading
          eyebrow="Contact"
          title="Book a premium AI marketing consultation"
          text="Tell me about your business goals, current marketing systems, and where you want AI to create momentum."
        />
      </Section>
      <Section className="grid gap-6 pt-0 lg:grid-cols-[1fr_0.72fr]">
        <GlassCard className="p-6 sm:p-8">
          <ContactForm />
        </GlassCard>
        <div className="grid gap-5">
          {contactItems.map((item) => (
            <GlassCard key={item.label} className="flex gap-4 p-5">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                <item.icon size={21} />
              </div>
              <div>
                <p className="text-sm text-white/45">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="font-medium text-white hover:text-accent">{item.value}</a>
                ) : (
                  <p className="font-medium text-white">{item.value}</p>
                )}
              </div>
            </GlassCard>
          ))}
          <GlassCard className="min-h-64 overflow-hidden p-5">
            <div className="grid h-56 place-items-center rounded-2xl border border-white/10 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]">
              <div className="text-center">
                <MapPin className="mx-auto mb-3 text-accent" />
                <p className="font-semibold text-white">Google Maps Placeholder</p>
                <p className="mt-1 text-sm text-white/55">{brand.location}</p>
              </div>
            </div>
          </GlassCard>
        </div>
      </Section>
      <Section className="pb-28 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl">Let’s build a smarter growth system.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">Your next campaign, automation, or AI roadmap can start with one focused conversation.</p>
      </Section>
    </>
  );
}
