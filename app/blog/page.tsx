import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { GlassCard } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LinkButton } from "@/components/ui/button";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "AI Marketing Blog",
  description: "Insights on AI marketing, ChatGPT, automation, SEO, AI tools, prompt engineering, and digital transformation.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const popular = blogPosts.filter((post) => post.popular);

  return (
    <>
      <Section className="pt-24">
        <SectionHeading
          eyebrow="Blog"
          title="AI marketing ideas for sharper growth"
          text="Practical thinking on AI tools, marketing automation, prompt engineering, SEO, and digital transformation."
        />
      </Section>

      <Section className="grid gap-6 pt-0 lg:grid-cols-[1fr_0.36fr]">
        <GlassCard className="overflow-hidden">
          <Image src={featured.image} alt="" width={1100} height={620} priority className="h-72 w-full object-cover" />
          <div className="p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured Article</p>
            <h2 className="mt-3 text-3xl font-semibold text-white">{featured.title}</h2>
            <p className="mt-4 text-base leading-8 text-white/64">{featured.excerpt}</p>
            <LinkButton href={`/blog/${featured.slug}`} className="mt-6" variant="secondary">Read Article</LinkButton>
          </div>
        </GlassCard>
        <aside className="grid gap-5">
          <GlassCard className="p-5">
            <label className="mb-3 block text-sm font-medium text-white/75">Search</label>
            <div className="relative">
              <Search className="absolute left-3 top-3.5 text-white/35" size={18} />
              <Input placeholder="Search articles" className="pl-10" aria-label="Search blog posts" />
            </div>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-semibold text-white">Categories</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/62">{category}</span>
              ))}
            </div>
          </GlassCard>
        </aside>
      </Section>

      <Section className="grid gap-6 pt-0 lg:grid-cols-[1fr_0.36fr]">
        <div>
          <SectionHeading align="left" eyebrow="Latest" title="Latest articles" />
          <div className="grid gap-5 md:grid-cols-2">
            {blogPosts.map((post) => (
              <GlassCard key={post.slug} className="overflow-hidden">
                <Image src={post.image} alt="" width={720} height={420} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{post.category}</p>
                  <h3 className="mt-3 text-xl font-semibold text-white">
                    <Link href={`/blog/${post.slug}`} className="hover:text-accent">{post.title}</Link>
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{post.excerpt}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.tags.map((tag) => <span key={tag} className="text-xs text-white/40">#{tag}</span>)}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2" aria-label="Pagination">
            {[1, 2, 3].map((page) => (
              <button key={page} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-sm text-white/70 hover:border-accent/50">
                {page}
              </button>
            ))}
          </div>
        </div>
        <aside className="grid content-start gap-5">
          <GlassCard className="p-5">
            <h3 className="font-semibold text-white">Popular posts</h3>
            <div className="mt-4 grid gap-4">
              {popular.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="text-sm leading-6 text-white/64 hover:text-accent">{post.title}</Link>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="p-5">
            <h3 className="font-semibold text-white">Newsletter</h3>
            <p className="mt-2 text-sm leading-7 text-white/58">Get practical AI marketing notes and workflow ideas.</p>
            <Input className="mt-4" type="email" placeholder="Email address" aria-label="Newsletter email" />
            <LinkButton href="/contact" className="mt-4 w-full">Subscribe</LinkButton>
          </GlassCard>
        </aside>
      </Section>
    </>
  );
}
