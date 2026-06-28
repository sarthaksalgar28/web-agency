# Aurora Labs — Premium Web Development Agency Website

A production-ready, data-driven agency website built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lenis**, themed with the **"Midnight Aurora"** design system.

## ✨ Features

- **15 sections**: Hero, Trusted By, Services, Industries, Why Choose Us, Portfolio, Stats, Technologies, Process, Pricing, Testimonials, FAQ, Blog Preview, Contact, Footer
- **Data-driven portfolio** — all projects live in [`lib/data/projects.ts`](lib/data/projects.ts). Add one object → new portfolio card + auto-generated case study page at `/work/[slug]`.
- **Interactive industry filtering** — hover an industry badge to filter the portfolio live.
- **Search + multi-filter** portfolio (industry, technology, featured).
- **Auto-calculated statistics** with animated counters.
- **Premium UX**: smooth scrolling (Lenis), cursor glow, magnetic buttons, scroll-reveal, aurora gradients, glassmorphism, sticky nav + sticky WhatsApp CTA, infinite logo marquee.
- **SEO**: dynamic metadata, Schema.org JSON-LD, `sitemap.ts`, `robots.ts`, Open Graph, canonical URLs.
- **Contact form** via EmailJS (works in demo mode with placeholder env values).

## 🚀 Getting started

```powershell
npm install
npm run dev
```

Open http://localhost:3000

## ⚙️ Configure (change these later)

- **Brand, contact, social links** → [`lib/config.ts`](lib/config.ts)
- **EmailJS + site URL** → `.env.local`
- **Projects / case studies** → [`lib/data/projects.ts`](lib/data/projects.ts)
- **Services, pricing, FAQ, industries, blog** → [`lib/data/content.ts`](lib/data/content.ts)
- **Theme colors / fonts** → [`tailwind.config.ts`](tailwind.config.ts)

## 🖼️ Images

Drop real screenshots/mockups into `public/portfolio/<slug>/` (hero.jpg, laptop.png, mobile.png, 1.jpg, 2.jpg). The UI uses styled placeholders until you add them, so the build never breaks.

Add an `public/og-image.png` (1200×630) for social sharing.

## 🎨 Midnight Aurora palette

| Token | Value |
|-------|-------|
| Background | `#0B1220` |
| Surface | `#101826` |
| Primary | `#3B82F6` |
| Secondary | `#7C3AED` |
| Success | `#22C55E` |
| Text Primary | `#FFFFFF` |
| Text Secondary | `#A8B3CF` |

Headings: **Space Grotesk** · Body: **Inter**

## ➕ Adding a new project

Append one object to the `projects` array in [`lib/data/projects.ts`](lib/data/projects.ts). The portfolio grid, filters, stats, sitemap, and `/work/[slug]` case study page update automatically — no UI changes needed. Scales to 100+ projects.
