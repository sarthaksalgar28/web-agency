"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data/content";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Check } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to win online"
          subtitle="From a first business website to complex web applications — we cover the full journey, end to end."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-3xl glass p-6 transition-colors hover:border-primary/40"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/20 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-aurora-gradient text-white shadow-glow">
                    <Icon name={service.icon} size={22} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-xs text-text-secondary"
                      >
                        <Check size={14} className="text-success" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
