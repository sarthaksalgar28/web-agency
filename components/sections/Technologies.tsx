"use client";

import { motion } from "framer-motion";
import { technologies } from "@/lib/data/content";
import { SectionHeading } from "@/components/ui/Reveal";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Technologies() {
  const { c } = useLanguage();

  return (
    <section id="technologies" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow={c.technologies.eyebrow}
          title={c.technologies.title}
          subtitle={c.technologies.subtitle}
        />

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="group flex items-center gap-2 rounded-2xl glass px-5 py-3 transition-colors hover:border-primary/40"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-aurora-gradient transition-transform group-hover:scale-125" />
              <span className="font-heading text-sm font-medium">{tech.name}</span>
              <span className="text-xs text-text-secondary">
                · {c.technologies.categories[tech.category] ?? tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
