"use client";

import { motion } from "framer-motion";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { Gauge, ShieldCheck, Zap, Heart, Sparkles, LineChart } from "lucide-react";
import { useLanguage } from "@/components/providers/LanguageProvider";

const icons = [Gauge, Sparkles, Zap, ShieldCheck, LineChart, Heart];

export function WhyChooseUs() {
  const { c } = useLanguage();
  const reasons = c.whyChooseUs.items.map((r, i) => ({ icon: icons[i], ...r }));

  return (
    <section id="why-us" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow={c.whyChooseUs.eyebrow}
          title={c.whyChooseUs.title}
          subtitle={c.whyChooseUs.subtitle}
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
