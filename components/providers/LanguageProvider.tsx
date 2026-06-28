"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { CONTENT, type Language, type SiteContent } from "@/lib/i18n/content";

const STORAGE_KEY = "aurora-lang";

interface LanguageState {
  lang: Language;
  c: SiteContent;
  setLang: (l: Language) => void;
  hasChosen: boolean;
}

const LanguageContext = createContext<LanguageState | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  const [hasChosen, setHasChosen] = useState(false);

  // Read the language the no-flash inline script already applied.
  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored === "en" || stored === "mr") {
      setLangState(stored);
      setHasChosen(true);
    }
  }, []);

  // Keep <html lang> in sync so the Devanagari font and a11y work.
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    setHasChosen(true);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, c: CONTENT[lang], setLang, hasChosen }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

/**
 * Inline script injected before paint to set <html lang> from storage,
 * so the correct (Devanagari) font is applied without a flash. Defaults to en.
 */
export const langNoFlashScript = `(function(){try{var l=localStorage.getItem('${STORAGE_KEY}');if(l!=='mr'){l='en';}document.documentElement.lang=l;}catch(e){document.documentElement.lang='en';}})();`;
