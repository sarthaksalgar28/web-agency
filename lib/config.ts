export const siteConfig = {
  // Brand identity
  name: "Jeevan Adhaar Solutions",
  shortName: "Jeevan Adhaar",
  tagline: "We Build Websites That Grow Businesses.",
  description:
    "Jeevan Adhaar Solutions is a premium web development agency crafting high-performance, conversion-focused websites and web apps for modern businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-agency-domain.com",
  ogImage: "/og-image.png",

  contact: {
    email: "hello@your-agency-domain.com",
    phone: "+91 81800 49551",
    whatsapp: "918180049551", // digits only, country code first
    calendly: "https://calendly.com/your-handle/intro-call",
    mapsEmbed:
      "https://www.google.com/maps?q=Mumbai,India&output=embed",
    address: "Remote-first · India",
  },

  social: {
    twitter: "https://twitter.com/your-handle",
    linkedin: "https://linkedin.com/company/your-handle",
    github: "https://github.com/your-handle",
    instagram: "https://instagram.com/your-handle",
    dribbble: "https://dribbble.com/your-handle",
  },

  founded: 2021,
};

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
