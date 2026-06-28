import type { Project } from "@/lib/types";

/**
 * DATA-DRIVEN PORTFOLIO
 * -------------------------------------------------------------
 * To add a new project, append ONE object to this array.
 * The portfolio grid, filters, statistics, and dynamic case
 * study pages (/work/[slug]) are all generated automatically.
 *
 * Image paths point to /public/portfolio/<slug>/... — drop in
 * real screenshots/mockups later. Placeholders are referenced
 * so the build never breaks if an image is missing.
 */
export const projects: Project[] = [
  {
    id: "p1",
    slug: "shubhshri-electrical-contractors",
    title: "Shubhshri Electrical Contractors",
    client: "Shubhshri Electrical Contractors",
    industry: "Electrical",
    category: "Business Website",
    description:
      "A trust-building business website for an electrical contracting firm, designed to showcase services, certifications, and completed projects while driving qualified inquiries.",
    businessChallenge:
      "The contractor relied entirely on word-of-mouth and had no online presence. Prospective commercial and residential clients had no way to verify credentials, browse past work, or request quotes — losing leads to competitors with a digital footprint.",
    solution:
      "We designed a clean, credibility-first website highlighting service categories, safety certifications, and a project portfolio. A prominent quote-request flow and click-to-call CTAs convert visitors into leads, while a fast, mobile-first build ensures on-site managers can find information instantly.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    servicesProvided: ["Business Website", "UI/UX Design", "SEO", "Hosting & Deployment"],
    features: [
      "Service catalogue with detailed capability pages",
      "Quote-request form with email notifications",
      "Click-to-call and WhatsApp CTAs",
      "Certifications & safety compliance showcase",
      "Mobile-first responsive layout",
      "Local SEO optimization",
    ],
    results: [
      "Established a professional digital presence",
      "Increased qualified inbound inquiries",
      "Improved local search visibility",
    ],
    completionDate: "2024",
    projectDuration: "3 weeks",
    heroImage: "/portfolio/shubhshri-electrical-contractors/hero.jpg",
    galleryImages: [
      "/portfolio/shubhshri-electrical-contractors/1.jpg",
      "/portfolio/shubhshri-electrical-contractors/2.jpg",
    ],
    laptopMockup: "/portfolio/shubhshri-electrical-contractors/laptop.png",
    mobileMockup: "/portfolio/shubhshri-electrical-contractors/mobile.png",
    liveUrl: "https://shubhshrielectricalcontractors.in",
    testimonial: {
      quote:
        "Our new website gives clients confidence before they even call. The team delivered exactly what we needed.",
      author: "Shubhshri Electrical Contractors",
      role: "Owner",
    },
    featured: true,
    themeColor: "#F59E0B",
  },
  {
    id: "p2",
    slug: "renukai-consultants",
    title: "Renukai Consultants",
    client: "Renukai Consultants & Constructions",
    industry: "Corporate",
    category: "Corporate Website",
    description:
      "A corporate website for a structural engineering and construction consultancy, presenting their expertise, projects, and team with a polished, authoritative brand presence.",
    businessChallenge:
      "An established consultancy needed a corporate identity online that matched the scale of their structural projects. They wanted to attract larger clients, showcase a complex project portfolio, and communicate technical credibility clearly.",
    solution:
      "We built a refined corporate site with a strong hero narrative, an organized service architecture, a filterable project gallery, and a trusted-clients section. Theming and smooth interactions reinforce a premium, engineering-grade brand.",
    technologies: ["React", "Vite", "TypeScript", "Tailwind CSS", "EmailJS", "Netlify"],
    servicesProvided: ["Corporate Website", "UI/UX Design", "SEO", "Hosting & Deployment"],
    features: [
      "Project gallery with rich case detail",
      "Trusted-clients logo showcase",
      "Multi-theme design system",
      "Contact form with EmailJS integration",
      "Structured data & full SEO setup",
      "Smooth scroll-reveal animations",
    ],
    results: [
      "Elevated brand perception for enterprise clients",
      "Comprehensive, indexable project showcase",
      "Strong local + branded search presence",
    ],
    completionDate: "2024",
    projectDuration: "5 weeks",
    heroImage: "/portfolio/renukai-consultants/hero.jpg",
    galleryImages: [
      "/portfolio/renukai-consultants/1.jpg",
      "/portfolio/renukai-consultants/2.jpg",
    ],
    laptopMockup: "/portfolio/renukai-consultants/laptop.png",
    mobileMockup: "/portfolio/renukai-consultants/mobile.png",
    liveUrl: "https://renukaiconsultants.in",
    testimonial: {
      quote:
        "The website reflects the quality of our engineering work. It's become a key part of how we win new projects.",
      author: "Renukai Consultants",
      role: "Director",
    },
    featured: true,
    themeColor: "#3B82F6",
  },
  {
    id: "p3",
    slug: "swadesh-agro",
    title: "Swadesh Agro",
    client: "Swadesh Agro",
    industry: "Agriculture",
    category: "Agricultural Business Website",
    description:
      "An agricultural business website showcasing products, supply capabilities, and brand story for a modern agro enterprise serving farmers and distributors.",
    businessChallenge:
      "Swadesh Agro needed to digitize their brand and reach distributors beyond their immediate region. They had no central place to present their product range, quality standards, or contact channels.",
    solution:
      "We delivered a warm, earthy yet modern website that communicates trust and product quality. Clear product sections, an about-the-farm narrative, and easy enquiry paths help convert distributors and partners.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    servicesProvided: ["Business Website", "UI/UX Design", "SEO", "Hosting & Deployment"],
    features: [
      "Product range showcase",
      "Brand story & quality standards section",
      "Distributor enquiry form",
      "WhatsApp quick-contact",
      "Responsive, image-rich layout",
      "SEO for agricultural keywords",
    ],
    results: [
      "Expanded reach to new distributors",
      "Professional brand presentation",
      "Streamlined partner inquiries",
    ],
    completionDate: "2024",
    projectDuration: "3 weeks",
    heroImage: "/portfolio/swadesh-agro/hero.jpg",
    galleryImages: [
      "/portfolio/swadesh-agro/1.jpg",
      "/portfolio/swadesh-agro/2.jpg",
    ],
    laptopMockup: "/portfolio/swadesh-agro/laptop.png",
    mobileMockup: "/portfolio/swadesh-agro/mobile.png",
    liveUrl: "https://swadeshagro.in",
    testimonial: {
      quote:
        "Our products finally have a home online that does them justice. Partners take us more seriously now.",
      author: "Swadesh Agro",
      role: "Founder",
    },
    featured: false,
    themeColor: "#22C55E",
  },
  {
    id: "p4",
    slug: "shree-ganesh-education",
    title: "Shree Ganesh Education",
    client: "Shree Ganesh Education",
    industry: "Education",
    category: "Educational Institution Website",
    description:
      "An educational institution website built to inform students and parents, present programs and faculty, and streamline admissions enquiries.",
    businessChallenge:
      "The institution needed a credible, easy-to-navigate website to support admissions season, communicate course offerings, and answer common parent questions without constant phone calls.",
    solution:
      "We created an approachable, information-first website with clear program listings, faculty highlights, an admissions enquiry flow, and an FAQ. The design balances warmth with academic professionalism.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Vercel"],
    servicesProvided: ["Business Website", "UI/UX Design", "SEO", "Maintenance"],
    features: [
      "Program & course listings",
      "Faculty and facilities showcase",
      "Admissions enquiry form",
      "FAQ for parents & students",
      "Announcements / notices section",
      "Mobile-first responsive design",
    ],
    results: [
      "Reduced repetitive admissions calls",
      "Clear, accessible program information",
      "Stronger institutional credibility online",
    ],
    completionDate: "2024",
    projectDuration: "4 weeks",
    heroImage: "/portfolio/shree-ganesh-education/hero.jpg",
    galleryImages: [
      "/portfolio/shree-ganesh-education/1.jpg",
      "/portfolio/shree-ganesh-education/2.jpg",
    ],
    laptopMockup: "/portfolio/shree-ganesh-education/laptop.png",
    mobileMockup: "/portfolio/shree-ganesh-education/mobile.png",
    liveUrl: "https://shreeganesheducation.in",
    testimonial: {
      quote:
        "Parents now find everything they need on the website. It has made our admissions process far smoother.",
      author: "Shree Ganesh Education",
      role: "Administrator",
    },
    featured: false,
    themeColor: "#7C3AED",
  },
  {
    id: "p5",
    slug: "kishor-salgar",
    title: "Kishor Salgar",
    client: "Kishor Salgar",
    industry: "Personal Branding",
    category: "Portfolio Website",
    description:
      "A personal portfolio website crafted to present an individual's professional profile, achievements, and contact details with a clean, memorable identity.",
    businessChallenge:
      "A strong personal brand needed a single, polished destination — a place to consolidate professional identity, share accomplishments, and make a confident first impression with contacts and opportunities.",
    solution:
      "We designed a sleek personal portfolio with a striking hero, an about narrative, highlights of work and achievements, and frictionless contact options. The minimal aesthetic keeps focus on the person and their story.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    servicesProvided: ["Portfolio Website", "UI/UX Design", "SEO", "Hosting & Deployment"],
    features: [
      "Striking personal hero section",
      "About & professional highlights",
      "Achievements / experience timeline",
      "Direct contact & social links",
      "Smooth animations and transitions",
      "Fully responsive design",
    ],
    results: [
      "Cohesive personal brand online",
      "Easy to share professional identity",
      "Memorable first impression",
    ],
    completionDate: "2024",
    projectDuration: "2 weeks",
    heroImage: "/portfolio/kishor-salgar/hero.jpg",
    galleryImages: [
      "/portfolio/kishor-salgar/1.jpg",
      "/portfolio/kishor-salgar/2.jpg",
    ],
    laptopMockup: "/portfolio/kishor-salgar/laptop.png",
    mobileMockup: "/portfolio/kishor-salgar/mobile.png",
    liveUrl: "https://kishorsalgar.in",
    testimonial: {
      quote:
        "My portfolio looks exactly how I wanted — clean, modern, and professional. It represents me perfectly.",
      author: "Kishor Salgar",
      role: "Professional",
    },
    featured: false,
    themeColor: "#06B6D4",
  },
  {
    id: "p6",
    slug: "green-peak-farms",
    title: "Green Peak Farms",
    client: "Green Peak Farms",
    industry: "Farming",
    category: "Farm Business Website",
    description:
      "A farm business website presenting produce, farming practices, and ordering/enquiry options for a sustainability-focused agricultural brand.",
    businessChallenge:
      "Green Peak Farms wanted to communicate their commitment to quality and sustainable farming, and give customers and buyers an easy way to learn about and request their produce.",
    solution:
      "We built a fresh, nature-inspired website that tells the farm's story, showcases produce, and highlights sustainable practices. Simple enquiry and contact flows make it easy for buyers to get in touch.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel"],
    servicesProvided: ["Business Website", "UI/UX Design", "SEO", "Hosting & Deployment"],
    features: [
      "Produce showcase with rich imagery",
      "Sustainable farming story section",
      "Buyer / customer enquiry form",
      "WhatsApp quick-contact",
      "Nature-inspired responsive design",
      "SEO for farm & produce keywords",
    ],
    results: [
      "Compelling brand story online",
      "Easier buyer enquiries",
      "Highlighted sustainability commitment",
    ],
    completionDate: "2024",
    projectDuration: "3 weeks",
    heroImage: "/portfolio/green-peak-farms/hero.jpg",
    galleryImages: [
      "/portfolio/green-peak-farms/1.jpg",
      "/portfolio/green-peak-farms/2.jpg",
    ],
    laptopMockup: "/portfolio/green-peak-farms/laptop.png",
    mobileMockup: "/portfolio/green-peak-farms/mobile.png",
    liveUrl: "https://greenpeakfarms.in",
    testimonial: {
      quote:
        "The website captures the spirit of our farm beautifully. Customers love how easy it is to reach us.",
      author: "Green Peak Farms",
      role: "Owner",
    },
    featured: true,
    themeColor: "#16A34A",
  },
];

/* ----------------------- Derived helpers ----------------------- */

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getFeaturedProjects = (): Project[] =>
  projects.filter((p) => p.featured);

export const getAllIndustries = (): string[] =>
  Array.from(new Set(projects.map((p) => p.industry))).sort();

export const getAllTechnologies = (): string[] =>
  Array.from(new Set(projects.flatMap((p) => p.technologies))).sort();

export const getAllServicesProvided = (): string[] =>
  Array.from(new Set(projects.flatMap((p) => p.servicesProvided))).sort();

export const getAllYears = (): string[] =>
  Array.from(new Set(projects.map((p) => p.completionDate))).sort().reverse();

export interface PortfolioStats {
  totalProjects: number;
  industriesServed: number;
  technologiesUsed: number;
  yearsExperience: number;
  clientSatisfaction: number;
  responsiveWebsites: number;
}

export const getPortfolioStats = (): PortfolioStats => {
  const currentYear = new Date().getFullYear();
  return {
    totalProjects: projects.length,
    industriesServed: getAllIndustries().length,
    technologiesUsed: getAllTechnologies().length,
    yearsExperience: Math.max(1, currentYear - 2021),
    clientSatisfaction: 100,
    responsiveWebsites: projects.length,
  };
};
