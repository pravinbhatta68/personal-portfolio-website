import type { Metadata } from "next";
import Image from "next/image";
import { Award, BriefcaseBusiness, CircleHelp, Medal, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/motion";
import { Section, SectionHeading } from "@/components/section";
import { GlassCard } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { brand, faqs, skills } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Pravin Bhatta",
  description: "Learn about Pravin Bhatta, the AI Marketing Expert and Consultant behind Asthetic Pravin.",
};

const timeline = [
  ["2022", "Built foundations in digital marketing, content strategy, and SEO."],
  ["2023", "Started integrating AI tools into marketing workflows and creative systems."],
  ["2024", "Expanded into automation, prompt systems, analytics, and lead generation consulting."],
  ["2026", "Positioning Asthetic Pravin as a premium AI marketing consultancy for ambitious businesses."],
];

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            align="left"
            eyebrow="About"
            title="Marketing strategy meets intelligent AI execution"
            text={`${brand.owner} helps businesses adopt AI in ways that improve content, campaigns, operations, and growth without losing the human strategy that makes brands memorable.`}
          />
          <GlassCard className="colorful-panel overflow-hidden p-4">
            <Image
              src="/Marketing strategy meets intelligent AI execution.webp"
              alt="Digital transformation marketing strategy dashboard"
              width={900}
              height={520}
              className="aspect-[16/10] w-full rounded-2xl object-cover"
              priority
            />
          </GlassCard>
        </div>
      </Section>

      <Section className="grid gap-6 pt-0 lg:grid-cols-3">
        {[
          ["Mission", "To help businesses use AI as a practical growth advantage through strategy, automation, and better decision-making."],
          ["Vision", "A future where every ambitious business can operate with the speed and intelligence of a high-performing marketing team."],
          ["My Story", "From Mahendranagar, Kanchanpur, Nepal, I built Asthetic Pravin to make advanced AI marketing approachable, premium, and measurable."],
        ].map(([title, text]) => (
          <GlassCard key={title} className="p-6">
            <Sparkles className="mb-5 text-accent" size={26} />
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/62">{text}</p>
          </GlassCard>
        ))}
      </Section>

      <Section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <FadeIn>
          <SectionHeading align="left" eyebrow="Career Timeline" title="A focused path into AI-powered growth" />
          <div className="space-y-4">
            {timeline.map(([year, text]) => (
              <GlassCard key={year} className="flex gap-4 p-5">
                <span className="text-lg font-semibold text-accent">{year}</span>
                <p className="text-sm leading-7 text-white/64">{text}</p>
              </GlassCard>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeading align="left" eyebrow="Skills" title="Capabilities that support modern marketing" />
          <div className="grid gap-5">
            {skills.map(([label, value]) => (
              <div key={label}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="font-medium text-white">{label}</span>
                  <span className="text-white/48">{value}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/[0.07]">
                  <div className="h-full rounded-full bg-gradient-to-r from-accent via-accent-2 to-emerald-300" style={{ width: `${value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </Section>

      <Section className="grid gap-5 lg:grid-cols-3">
        <GlassCard className="p-6">
          <BriefcaseBusiness className="mb-5 text-accent" />
          <h2 className="text-2xl font-semibold text-white">Experience</h2>
          <p className="mt-4 text-sm leading-7 text-white/62">AI marketing strategy, automation planning, SEO systems, content operations, and growth consulting for modern businesses.</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Medal className="mb-5 text-accent" />
          <h2 className="text-2xl font-semibold text-white">Certifications</h2>
          <p className="mt-4 text-sm leading-7 text-white/62">Placeholder certifications for AI marketing, analytics, automation, search, and digital transformation.</p>
        </GlassCard>
        <GlassCard className="p-6">
          <Award className="mb-5 text-accent" />
          <h2 className="text-2xl font-semibold text-white">Awards</h2>
          <p className="mt-4 text-sm leading-7 text-white/62">Placeholder awards recognizing innovation, campaign performance, and client growth outcomes.</p>
        </GlassCard>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <GlassCard key={faq.question} className="p-6">
              <h3 className="flex items-center gap-3 text-lg font-semibold text-white"><CircleHelp className="text-accent" size={20} /> {faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/62">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="pb-28 text-center">
        <h2 className="text-3xl font-semibold text-white sm:text-5xl">Let’s build your AI marketing advantage.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">Book a consultation and get a practical path for growth, automation, and smarter marketing.</p>
        <LinkButton href="/contact" size="lg" className="mt-8">Book a Consultation</LinkButton>
      </Section>
    </>
  );
}
