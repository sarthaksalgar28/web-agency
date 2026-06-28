import type {
  Service,
  Industry,
  PricingPlan,
  ProcessStep,
  Faq,
  BlogPost,
} from "@/lib/types";

export const services: Service[] = [
  {
    id: "business-websites",
    title: "Business Websites",
    description:
      "Conversion-focused marketing sites that build trust and turn visitors into customers.",
    icon: "Globe",
    features: ["Custom design", "Lead capture", "CMS-ready", "Local SEO"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Fast, secure online stores with seamless checkout and inventory management.",
    icon: "ShoppingCart",
    features: ["Payment gateways", "Cart & checkout", "Product catalog", "Analytics"],
  },
  {
    id: "custom-web-apps",
    title: "Custom Web Apps",
    description:
      "Scalable, full-stack applications tailored to your unique business logic.",
    icon: "Code2",
    features: ["Dashboards", "APIs & integrations", "Auth & roles", "Real-time data"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed around your users and your goals.",
    icon: "Palette",
    features: ["Wireframes", "Design systems", "Prototyping", "Accessibility"],
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description:
      "Modernize outdated sites with refreshed design, speed, and conversions.",
    icon: "Sparkles",
    features: ["UX audit", "Rebrand", "Performance boost", "Migration"],
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Ongoing updates, monitoring, and support to keep your site fast and secure.",
    icon: "Wrench",
    features: ["Updates", "Backups", "Security", "Uptime monitoring"],
  },
  {
    id: "seo",
    title: "SEO",
    description:
      "Technical and on-page optimization to rank higher and grow organic traffic.",
    icon: "Search",
    features: ["Technical SEO", "Keyword strategy", "Schema markup", "Core Web Vitals"],
  },
  {
    id: "hosting-deployment",
    title: "Hosting & Deployment",
    description:
      "Reliable global hosting, CI/CD pipelines, and zero-downtime deployments.",
    icon: "Rocket",
    features: ["Global CDN", "CI/CD", "SSL & domains", "Scalable infra"],
  },
];

export const industries: Industry[] = [
  { id: "Electrical", name: "Electrical", emoji: "⚡", description: "Contractors & service providers" },
  { id: "Corporate", name: "Corporate", emoji: "🏢", description: "Consultancies & enterprises" },
  { id: "Agriculture", name: "Agriculture", emoji: "🌾", description: "Agro businesses & suppliers" },
  { id: "Education", name: "Education", emoji: "🎓", description: "Institutions & academies" },
  { id: "Personal Branding", name: "Personal Branding", emoji: "👤", description: "Portfolios & creators" },
  { id: "Farming", name: "Farming", emoji: "🚜", description: "Farms & produce brands" },
];

export const technologies = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Library" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "GSAP", category: "Animation" },
  { name: "Node.js", category: "Runtime" },
  { name: "Vercel", category: "Hosting" },
  { name: "Netlify", category: "Hosting" },
  { name: "Figma", category: "Design" },
  { name: "PostgreSQL", category: "Database" },
  { name: "Prisma", category: "ORM" },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn your business, goals, audience, and competitors to define a clear strategy.",
    icon: "Compass",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We craft wireframes and high-fidelity designs aligned with your brand and users.",
    icon: "PenTool",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build fast, accessible, scalable code with modern frameworks and best practices.",
    icon: "Code2",
  },
  {
    step: "04",
    title: "Launch & Grow",
    description:
      "We deploy, optimize for performance and SEO, then support and iterate over time.",
    icon: "Rocket",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter",
    price: "₹19,999",
    period: "one-time",
    description: "Perfect for small businesses and personal brands getting online.",
    features: [
      "Up to 5 pages",
      "Custom responsive design",
      "Contact form + WhatsApp",
      "Basic SEO setup",
      "Free domain + hosting setup",
      "1 month support",
    ],
    highlighted: false,
    cta: "Start Your Project",
  },
  {
    id: "business",
    name: "Business",
    price: "₹39,999",
    period: "one-time",
    description: "For growing businesses that need more power, content, and polish.",
    features: [
      "Up to 12 pages",
      "Premium animations & interactions",
      "CMS / blog integration",
      "Advanced SEO + schema",
      "Analytics & tracking",
      "Performance optimization",
      "3 months support",
    ],
    highlighted: true,
    cta: "Start Your Project",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    period: "tailored",
    description: "E-commerce, custom web apps, and large-scale platforms.",
    features: [
      "Unlimited pages / app scope",
      "Custom web application",
      "E-commerce & payment integrations",
      "Dedicated project manager",
      "Priority support & SLA",
      "Ongoing maintenance plan",
    ],
    highlighted: false,
    cta: "Book a Call",
  },
];

export const faqs: Faq[] = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most business websites take 2–5 weeks depending on scope. Custom web apps and e-commerce stores take longer. We share a clear timeline after the discovery call.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our packages start at ₹24,999 for a Starter site. Pricing depends on pages, features, and complexity. Check our pricing section or book a call for a custom quote.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "Yes. We offer maintenance plans covering updates, backups, security, and monitoring so your site stays fast and secure after launch.",
  },
  {
    question: "Will my website be mobile-friendly and fast?",
    answer:
      "Absolutely. Every site we build is fully responsive, optimized for Core Web Vitals, and aims for 95+ Lighthouse scores across performance, SEO, and accessibility.",
  },
  {
    question: "Do you handle SEO?",
    answer:
      "Yes. We include technical SEO, on-page optimization, schema markup, sitemaps, and Open Graph setup so you're ready to rank and share from day one.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Definitely. We audit your current site, modernize the design and performance, and migrate your content with minimal disruption.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-speed-matters",
    title: "Why Website Speed Directly Impacts Your Revenue",
    excerpt:
      "A one-second delay can cut conversions significantly. Here's how we build sites that load instantly.",
    category: "Performance",
    date: "2024-09-01",
    readTime: "5 min read",
  },
  {
    slug: "design-systems-that-scale",
    title: "Design Systems That Scale With Your Brand",
    excerpt:
      "How a thoughtful design system keeps your product consistent as you grow.",
    category: "Design",
    date: "2024-08-12",
    readTime: "6 min read",
  },
  {
    slug: "seo-fundamentals-2024",
    title: "SEO Fundamentals Every Business Site Needs",
    excerpt:
      "The technical and on-page essentials that help your website get found.",
    category: "SEO",
    date: "2024-07-20",
    readTime: "7 min read",
  },
];

export const trustedByLogos = [
  "Shubhshri Electrical",
  "Renukai Consultants",
  "Swadesh Agro",
  "Shree Ganesh Education",
  "Kishor Salgar",
  "Green Peak Farms",
];
