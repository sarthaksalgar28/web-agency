"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { CONTENT } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/LanguageProvider";

/**
 * First-visit language gate. Blocks the site until the visitor picks a
 * language. Shows bilingual copy so either visitor understands it.
 */
export function LanguageGate() {
  const { setLang } = useLanguage();
  const en = CONTENT.en.gate;
  const mr = CONTENT.mr.gate;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-bg px-6 py-12">
      {/* Aurora glow backdrop */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-aurora-gradient blur-[120px] opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-lg rounded-3xl glass-strong p-8 text-center shadow-soft sm:p-10"
      >
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-aurora-gradient text-xl font-bold text-white">
          {siteConfig.shortName.charAt(0)}
        </span>

        <p className="mt-6 text-sm uppercase tracking-widest text-text-secondary">
          {en.welcome}
        </p>
        <h1 className="mt-1 font-heading text-3xl font-bold tracking-tight">
          {siteConfig.name}
        </h1>

        <p className="mt-4 text-sm text-text-secondary">{en.subtitle}</p>
        <p className="text-sm text-text-secondary">{mr.subtitle}</p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <button
            onClick={() => setLang("en")}
            className="group flex items-center justify-between gap-3 rounded-2xl glass border-hairline/10 px-5 py-4 text-left transition-all hover:border-primary/50 hover:shadow-glow"
          >
            <span>
              <span className="block font-heading text-lg font-semibold">
                {en.englishLabel}
              </span>
              <span className="block text-xs text-text-secondary">
                {en.englishSub}
              </span>
            </span>
            <ArrowRight
              size={18}
              className="text-primary transition-transform group-hover:translate-x-1"
            />
          </button>

          <button
            onClick={() => setLang("mr")}
            className="group flex items-center justify-between gap-3 rounded-2xl glass border-hairline/10 px-5 py-4 text-left transition-all hover:border-primary/50 hover:shadow-glow"
          >
            <span>
              <span className="block font-heading text-lg font-semibold">
                {mr.marathiLabel}
              </span>
              <span className="block text-xs text-text-secondary">
                {mr.marathiSub}
              </span>
            </span>
            <ArrowRight
              size={18}
              className="text-primary transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

        <p className="mt-8 text-xs text-text-secondary">{en.hint}</p>
        <p className="text-xs text-text-secondary">{mr.hint}</p>
      </motion.div>
    </div>
  );
}

/**
 * Wraps the homepage. Shows the gate on first visit, otherwise the site.
 */
export function LanguageGateWrapper({ children }: { children: React.ReactNode }) {
  const { hasChosen } = useLanguage();
  if (!hasChosen) return <LanguageGate />;
  return <>{children}</>;
}
