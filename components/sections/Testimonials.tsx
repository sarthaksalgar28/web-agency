"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  const testimonials = projects
    .filter((p) => p.testimonial)
    .map((p) => ({ ...p.testimonial!, themeColor: p.themeColor }));

  return (
    <section id="testimonials" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our clients say"
          subtitle="We measure success by the businesses we help grow."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <motion.figure
                whileHover={{ y: -6 }}
                className="flex h-full flex-col rounded-3xl glass p-7"
              >
                <Quote
                  size={28}
                  style={{ color: t.themeColor }}
                  className="mb-4 opacity-80"
                />
                <blockquote className="flex-1 text-sm text-text-secondary">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-full font-heading text-sm font-bold text-white"
                    style={{ backgroundColor: t.themeColor }}
                  >
                    {t.author.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.author}</span>
                    <span className="block text-xs text-text-secondary">
                      {t.role}
                    </span>
                  </span>
                </figcaption>
              </motion.figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
