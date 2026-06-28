"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { siteConfig } from "@/lib/config";
import { getPortfolioStats } from "@/lib/data/projects";

const floatingSnippets = [
  { code: "const growth = build();", top: "18%", left: "8%", delay: 0 },
  { code: "<Website performant />", top: "30%", right: "6%", delay: 0.6 },
  { code: "deploy('production')", bottom: "22%", left: "10%", delay: 1.2 },
  { code: "lighthouse: 100", bottom: "30%", right: "9%", delay: 1.8 },
];

export function Hero() {
  const stats = getPortfolioStats();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-28"
    >
      <AuroraBackground />

      {/* Floating code snippets */}
      {floatingSnippets.map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + s.delay * 0.2, duration: 0.8 }}
          className="absolute hidden xl:block"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom }}
        >
          <div className="glass rounded-xl px-4 py-2 font-mono text-xs text-text-secondary animate-float">
            <span className="text-primary">{"// "}</span>
            {s.code}
          </div>
        </motion.div>
      ))}

      <div className="container-max relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-text-secondary"
        >
          <Sparkles size={14} className="text-primary" />
          Premium Web Development Agency
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl font-heading text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl text-balance"
        >
          We Build Websites That{" "}
          <span className="aurora-text">Grow Businesses.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mt-6 max-w-2xl text-base text-text-secondary sm:text-lg text-balance"
        >
          {siteConfig.name} crafts blazing-fast, conversion-focused websites and
          web apps with design that belongs alongside the best on the internet.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="#contact" variant="primary" className="px-8 py-4 text-base">
            Start Your Project <ArrowRight size={18} />
          </Button>
          <Button href="#portfolio" variant="secondary" className="px-8 py-4 text-base">
            <Code2 size={18} /> View Our Work
          </Button>
        </motion.div>

        {/* Quick stats glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-3xl glass sm:grid-cols-4"
        >
          {[
            { label: "Projects", value: `${stats.totalProjects}+` },
            { label: "Industries", value: `${stats.industriesServed}` },
            { label: "Technologies", value: `${stats.technologiesUsed}+` },
            { label: "Satisfaction", value: `${stats.clientSatisfaction}%` },
          ].map((s) => (
            <div key={s.label} className="bg-surface/40 px-6 py-6">
              <div className="font-heading text-2xl font-bold sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-widest text-text-secondary">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
