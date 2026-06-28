"use client";

import { useLanguage } from "@/components/providers/LanguageProvider";
import type { Language } from "@/lib/i18n/content";
import { cn } from "@/lib/utils";

const options: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "mr", label: "मराठी" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn(
        "flex items-center gap-0.5 rounded-xl glass p-0.5",
        className
      )}
    >
      {options.map((opt) => {
        const active = lang === opt.code;
        return (
          <button
            key={opt.code}
            onClick={() => setLang(opt.code)}
            aria-pressed={active}
            className={cn(
              "rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors",
              active
                ? "bg-aurora-gradient text-white shadow-glow"
                : "text-text-secondary hover:text-text-primary"
            )}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
