"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/data/content";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Process() {
  return (
    <section id="process" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Our Process"
          title="A clear path from idea to launch"
          subtitle="No mystery, no chaos — a proven, transparent process that keeps you in the loop at every step."
        />

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/40 via-secondary/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative h-full rounded-3xl glass p-7 text-center"
                >
                  <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-aurora-gradient text-white shadow-glow">
                    <Icon name={step.icon} size={24} />
                  </div>
                  <span className="font-heading text-sm font-bold text-primary">
                    {step.step}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {step.description}
                  </p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
