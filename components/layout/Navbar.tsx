"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { c } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <nav
        className={cn(
          "container-max mx-4 sm:mx-auto flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300",
          scrolled ? "glass-strong shadow-soft" : "bg-transparent"
        )}
      >
        <a href="#home" className="flex items-center gap-2 font-heading text-lg font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-aurora-gradient text-white">
            {siteConfig.shortName.charAt(0)}
          </span>
          <span>{siteConfig.name}</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {c.nav[i] ?? link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button href="#contact" variant="primary">
            {c.common.startProject}
          </Button>
        </div>

        <button
          className="lg:hidden grid h-10 w-10 place-items-center rounded-xl glass"
          onClick={() => setOpen((v) => !v)}
          aria-label={c.navbar.toggleMenu}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl glass-strong p-4"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-text-secondary hover:bg-hairline/5 hover:text-text-primary"
                >
                  {c.nav[i] ?? link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <LanguageSwitcher />
                <ThemeToggle />
                <Button href="#contact" className="flex-1" magnetic={false}>
                  {c.common.startProject}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
