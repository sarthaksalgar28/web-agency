"use client";

import { Github, Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/config";
import { services } from "@/lib/data/content";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const year = new Date().getFullYear();
  const { c } = useLanguage();

  const socials = [
    { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
    { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { icon: Github, href: siteConfig.social.github, label: "GitHub" },
    { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
    { icon: Dribbble, href: siteConfig.social.dribbble, label: "Dribbble" },
  ];

  return (
    <footer className="relative border-t border-hairline/10 pt-20">
      <div className="container-max px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 font-heading text-lg font-bold">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-aurora-gradient text-white">
                {siteConfig.shortName.charAt(0)}
              </span>
              {siteConfig.name}
            </a>
            <p className="mt-4 max-w-xs text-sm text-text-secondary">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl glass transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">{c.footer.navigation}</h4>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l, i) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {c.nav[i] ?? l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">{c.footer.services}</h4>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s, i) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {c.services.items[i]?.title ?? s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold">{c.footer.getInTouch}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-text-secondary">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-text-primary"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                  className="transition-colors hover:text-text-primary"
                >
                  {c.footer.whatsappUs}
                </a>
              </li>
              <li>{siteConfig.contact.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-hairline/10 py-8 sm:flex-row">
          <p className="text-xs text-text-secondary">
            © {year} {siteConfig.name}. {c.footer.rights}
          </p>
          <p className="text-xs text-text-secondary">
            {c.footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
