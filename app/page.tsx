import Image from "next/image";
import { ArrowRight, CalendarCheck, Lightbulb, Quote } from "lucide-react";
import { AnimatedCounter } from "@/components/animated-counter";
import { FadeIn, MotionDiv } from "@/components/motion";
import { HeroVisual } from "@/components/hero-visual";
import { Section, SectionHeading } from "@/components/section";
import { ServiceCard } from "@/components/service-card";
import { GlassCard } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { blogPosts, brand, features, processSteps, services, testimonials } from "@/lib/data";

const stats = [
  ["Projects", 100, "+"],
  ["AI Solutions", 40, "+"],
  ["Marketing Campaigns", 80, "+"],
  ["Business Growth", 3, "x"],
  ["Happy Clients", 50, "+"],
];

export default function HomePage() {
  return (
    <>
      <Section className="grid min-h-[calc(100vh-5rem)] items-center gap-12 pb-16 pt-16 lg:grid-cols-[1.02fr_0.98fr]">
        <FadeIn>
          <p className="mb-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-accent">
            {brand.role} based in Nepal
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Transform Your Business with <span className="gradient-text">AI-Powered Marketing</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Helping businesses grow through AI automation, marketing strategy, intelligent content creation, and digital transformation.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/contact" size="lg"><CalendarCheck size={19} /> Book a Consultation</LinkButton>
            <LinkButton href="/services" variant="secondary" size="lg">Explore Services <ArrowRight size={19} /></LinkButton>
          </div>
        </FadeIn>
        <FadeIn delay={0.12}>
          <HeroVisual />
        </FadeIn>
      </Section>

      <Section className="py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map(([label, value, suffix]) => (
            <GlassCard key={label} className="p-6 text-center">
              <div className="text-4xl font-semibold text-white"><AnimatedCounter value={Number(value)} suffix={String(suffix)} /></div>
              <p className="mt-2 text-sm text-white/55">{label}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section id="about" className="grid gap-10 lg:grid-cols-[0.82fr_1fr]">
        <FadeIn>
          <Image src="/images/pravin-profile.png" alt="Professional portrait placeholder for Pravin Bhatta" width={720} height={760} className="rounded-[2rem] border border-white/10 object-cover shadow-premium" />
        </FadeIn>
        <FadeIn delay={0.1} className="self-center">
          <SectionHeading align="left" eyebrow="About" title="Strategic AI marketing for businesses ready to move faster." />
          <p className="text-lg leading-8 text-white/66">
            I’m {brand.owner}, an AI Marketing Expert and Consultant helping teams turn modern AI tools into practical growth systems. My work blends marketing strategy, automation, content operations, SEO, and analytics so every campaign becomes smarter over time.
          </p>
          <LinkButton href="/about" className="mt-8" variant="secondary">Read More <ArrowRight size={18} /></LinkButton>
        </FadeIn>
      </Section>

      <Section id="services">
        <SectionHeading eyebrow="Services" title="Premium AI marketing services" text="Strategy, automation, creative systems, and growth execution for modern businesses." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.04}>
              <ServiceCard service={service} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Why Work With Me" title="Built for clarity, momentum, and measurable growth" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <GlassCard key={feature.title} className="p-6">
              <feature.icon className="mb-5 text-accent" size={26} />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{feature.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Process" title="A focused path from idea to scalable system" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <GlassCard key={item.step} className="p-6">
              <span className="text-sm font-semibold text-accent">{item.step}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/60">{item.text}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Testimonials" title="Trusted by ambitious teams" />
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item) => (
            <GlassCard key={item.name} className="p-6">
              <Quote className="text-accent" size={26} />
              <p className="mt-5 text-base leading-8 text-white/70">“{item.quote}”</p>
              <p className="mt-6 font-semibold text-white">{item.name}</p>
              <p className="text-sm text-white/45">{item.role}</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Blog" title="Latest AI marketing insights" />
        <div className="grid gap-5 lg:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <GlassCard key={post.slug} className="overflow-hidden">
              <Image src={post.image} alt="" width={720} height={420} className="h-52 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{post.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/60">{post.excerpt}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      <Section className="pb-28">
        <MotionDiv whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 180, damping: 18 }}>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] px-6 py-16 text-center shadow-premium">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(91,219,255,0.18),transparent_36%)]" />
            <div className="relative mx-auto max-w-3xl">
              <Lightbulb className="mx-auto mb-5 text-accent" size={34} />
              <h2 className="text-3xl font-semibold text-white sm:text-5xl">Ready to Scale Your Business with AI?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/65">
                Let’s design the strategy, automation, and content systems that help your business grow with confidence.
              </p>
              <LinkButton href="/contact" size="lg" className="mt-8">Book a Consultation</LinkButton>
            </div>
          </div>
        </MotionDiv>
      </Section>
    </>
  );
}
