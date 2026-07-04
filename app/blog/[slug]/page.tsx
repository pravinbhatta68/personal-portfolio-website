import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Section } from "@/components/section";
import { GlassCard } from "@/components/ui/card";
import { LinkButton } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <Section className="pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent">{post.category}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">{post.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">{post.excerpt}</p>
        </div>
      </Section>
      <Section className="pt-0">
        <GlassCard className="mx-auto max-w-4xl overflow-hidden">
          <Image src={post.image} alt="" width={1100} height={620} priority className="h-80 w-full object-cover" />
          <article className="prose prose-invert max-w-none p-7 prose-p:text-white/65 prose-li:text-white/65 prose-headings:text-white">
            <p>
              This placeholder article is structured for production publishing. Replace it with a full editorial piece covering strategy, practical examples, tools, metrics, and implementation guidance for businesses adopting AI marketing.
            </p>
            <h2>Key ideas</h2>
            <ul>
              <li>Start with the business goal before choosing AI tools.</li>
              <li>Create repeatable workflows for research, content, follow-up, and reporting.</li>
              <li>Measure performance with clear KPIs and improve the system over time.</li>
            </ul>
            <p>
              Asthetic Pravin focuses on turning AI into useful marketing infrastructure: faster planning, smarter content, cleaner automation, and better decisions.
            </p>
          </article>
        </GlassCard>
      </Section>
      <Section className="pb-28 text-center">
        <h2 className="text-3xl font-semibold text-white">Want this kind of system in your business?</h2>
        <LinkButton href="/contact" size="lg" className="mt-6">Book a Consultation</LinkButton>
      </Section>
    </>
  );
}
