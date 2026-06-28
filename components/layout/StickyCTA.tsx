"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function StickyCTA() {
  const [show, setShow] = useState(false);
  const { c } = useLanguage();

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href={`https://wa.me/${siteConfig.contact.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={c.stickyCTA.chatWhatsApp}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-success text-white shadow-glow transition-transform hover:scale-110"
        >
          <MessageCircle size={24} />
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success/40" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
