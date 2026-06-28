"use client";

import { motion } from "framer-motion";
import { industries } from "@/lib/data/content";
import { SectionHeading, Reveal } from "@/components/ui/Reveal";
import { usePortfolioFilter } from "@/components/providers/PortfolioFilterContext";
import { cn } from "@/lib/utils";

export function Industries() {
  const { industry, setIndustry } = usePortfolioFilter();

  return (
    <section id="industries" className="section-padding relative">
      <div className="container-max">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We've Worked With"
          subtitle="Hover an industry to instantly filter our portfolio below. We adapt our craft to every domain."
        />

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          {industries.map((ind, i) => {
            const active = industry === ind.id;
            return (
              <Reveal key={ind.id} delay={i * 0.05}>
                <motion.button
                  onMouseEnter={() => setIndustry(ind.id)}
                  onMouseLeave={() => setIndustry(null)}
                  onClick={() =>
                    setIndustry(active ? null : ind.id)
                  }
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "group flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-300",
                    active
                      ? "border-primary/60 bg-primary/10 shadow-glow"
                      : "glass border-hairline/10 hover:border-primary/40"
                  )}
                >
                  <span className="text-2xl">{ind.emoji}</span>
                  <span>
                    <span className="block font-heading text-sm font-semibold">
                      {ind.name}
                    </span>
                    <span className="block text-xs text-text-secondary">
                      {ind.description}
                    </span>
                  </span>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
