"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricingPlans } from "@/lib/data/content";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple, transparent pricing"
          subtitle="Pick a starting point — every project is tailored to your goals. No hidden fees, ever."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan, i) => (
            <Reveal key={plan.id} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-8",
                  plan.highlighted
                    ? "glass-strong border-primary/50 shadow-glow"
                    : "glass"
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-aurora-gradient px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="font-heading text-xl font-semibold">{plan.name}</h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {plan.description}
                </p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-text-secondary">
                    / {plan.period}
                  </span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-success/15 text-success">
                        <Check size={12} />
                      </span>
                      <span className="text-text-secondary">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.highlighted ? "primary" : "outline"}
                  className="mt-8 w-full"
                  magnetic={false}
                >
                  {plan.cta}
                </Button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
