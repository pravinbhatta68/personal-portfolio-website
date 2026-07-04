import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { FadeIn } from "@/components/motion";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Marketing Services",
  description: "Explore AI marketing strategy, consulting, automation, SEO, lead generation, content marketing, and business AI integration services.",
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-24">
        <SectionHeading
          eyebrow="Services"
          title="AI marketing systems for businesses that want intelligent growth"
          text="Choose focused consulting, strategy, automation, content, SEO, and integration services built around measurable outcomes."
        />
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
