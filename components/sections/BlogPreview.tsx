"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data/content";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function BlogPreview() {
  const { c } = useLanguage();
  const posts = blogPosts.map((p, i) => ({ slug: p.slug, ...c.blog.posts[i] }));

  return (
    <section id="blog" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow={c.blog.eyebrow}
          title={c.blog.title}
          subtitle={c.blog.subtitle}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group flex h-full flex-col overflow-hidden rounded-3xl glass"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-aurora-gradient/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
                  <span className="absolute left-4 top-4 rounded-full glass-strong px-3 py-1 text-xs font-medium">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-text-secondary">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-xs text-text-secondary">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} /> {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary transition-transform group-hover:translate-x-1">
                      {c.blog.read} <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
