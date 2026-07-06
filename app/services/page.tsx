import type { Metadata } from "next";
import Image from "next/image";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { FadeIn } from "@/components/motion";
import { GlassCard } from "@/components/ui/card";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Marketing Services",
  description: "Explore AI marketing strategy, consulting, automation, SEO, lead generation, content marketing, and business AI integration services.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="AI marketing systems for businesses that want intelligent growth"
            text="Choose focused consulting, strategy, automation, content, SEO, and integration services built around measurable outcomes."
          />
          <GlassCard className="colorful-panel overflow-hidden p-4">
            <Image
              src="/AI marketing systems for businesses that want intelligent growth.png"
              alt="Marketing automation workflow dashboard"
              width={900}
              height={520}
              className="aspect-[16/10] w-full rounded-2xl object-cover"
              priority
            />
          </GlassCard>
        </div>
      </Section>
      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <FadeIn key={service.slug} delay={(index % 3) * 0.05}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
