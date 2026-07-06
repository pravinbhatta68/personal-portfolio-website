import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { GlassCard } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { services, processSteps, faqs } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Section className="pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
          <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-accent/25 bg-accent/10 text-accent">
            <service.icon size={30} />
          </div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-accent">Service</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">{service.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">{service.description}</p>
          <LinkButton href="/contact" size="lg" className="mt-8">Book Consultation</LinkButton>
          </div>
          <GlassCard className="colorful-panel overflow-hidden p-4">
            <Image
              src="/images/ai-dashboard.png"
              alt={`${service.title} digital marketing dashboard`}
              width={900}
              height={620}
              className="aspect-[16/10] w-full rounded-2xl object-cover"
              priority
            />
          </GlassCard>
        </div>
      </Section>

      <Section className="grid gap-5 pt-0 lg:grid-cols-3">
        <GlassCard className="p-6 lg:col-span-2">
          <h2 className="text-2xl font-semibold text-white">Service Overview</h2>
          <p className="mt-4 text-base leading-8 text-white/64">
            This service turns strategy into a practical operating system: clear goals, AI-supported workflows, strong content and campaign execution, and measurement that shows what is moving the business forward.
          </p>
        </GlassCard>
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold text-white">Benefits</h2>
          <div className="mt-5 grid gap-3">
            {service.benefits.map((benefit) => (
              <p key={benefit} className="flex items-center gap-3 text-sm text-white/68"><CheckCircle2 className="text-emerald-300" size={18} /> {benefit}</p>
            ))}
          </div>
        </GlassCard>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold text-white">Features</h2>
          <div className="mt-5 grid gap-3">
            {service.features.map((feature) => (
              <p key={feature} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/68">{feature}</p>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <h2 className="text-2xl font-semibold text-white">Technologies & AI Tools Used</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {service.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm text-accent">{tool}</span>
            ))}
          </div>
        </GlassCard>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="How this engagement works" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <GlassCard key={step.step} className="p-6">
              <p className="text-sm font-semibold text-accent">{step.step}</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{step.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="grid gap-6 lg:grid-cols-2">
        <div>
          <SectionHeading align="left" eyebrow="FAQ" title="Questions about this service" />
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <GlassCard key={faq.question} className="p-5">
                <h3 className="font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-7 text-white/62">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
        <div>
          <SectionHeading align="left" eyebrow="Related" title="Related services" />
          <div className="grid gap-4">
            {related.map((item) => (
              <GlassCard key={item.slug} className="p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/60">{item.description}</p>
                <LinkButton href={`/services/${item.slug}`} variant="ghost" size="sm" className="mt-3 px-0">Learn More <ArrowRight size={16} /></LinkButton>
              </GlassCard>
            ))}
          </div>
        </div>
      </Section>

      <Section className="pb-28 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl">Ready to use {service.title} for growth?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">Book a consultation and get a practical next step for your business.</p>
        <LinkButton href="/contact" size="lg" className="mt-8">Book Consultation</LinkButton>
      </Section>
    </>
  );
}
