"use client";

import { motion } from "framer-motion";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { Gauge, ShieldCheck, Zap, Heart, Sparkles, LineChart } from "lucide-react";

const reasons = [
  {
    icon: Gauge,
    title: "Blazing Performance",
    desc: "We target 95+ Lighthouse scores and sub-second loads on every build.",
  },
  {
    icon: Sparkles,
    title: "World-Class Design",
    desc: "Interfaces that look like they belong alongside Vercel, Stripe, and Linear.",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    desc: "Next.js, React, and TypeScript — scalable, type-safe, future-proof code.",
  },
  {
    icon: ShieldCheck,
    title: "Built to Convert",
    desc: "Every section is engineered to turn visitors into customers.",
  },
  {
    icon: LineChart,
    title: "SEO from Day One",
    desc: "Technical SEO, schema, sitemaps, and Open Graph baked in.",
  },
  {
    icon: Heart,
    title: "Long-Term Partner",
    desc: "Ongoing support and iteration — we grow with your business.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Premium results, without the agency overhead"
          subtitle="We combine design taste, engineering rigor, and a growth mindset to deliver websites that actually move the needle."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="group relative h-full overflow-hidden rounded-3xl glass p-7"
              >
                <div className="absolute inset-0 bg-aurora-gradient opacity-0 transition-opacity duration-500 group-hover:opacity-[0.06]" />
                <r.icon size={26} className="mb-4 text-primary" />
                <h3 className="font-heading text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{r.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
