export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  description: string;
  businessChallenge: string;
  solution: string;
  technologies: string[];
  servicesProvided: string[];
  features: string[];
  results: string[];
  completionDate: string;
  projectDuration: string;
  heroImage: string;
  galleryImages: string[];
  laptopMockup: string;
  mobileMockup: string;
  liveUrl: string;
  githubUrl?: string;
  testimonial?: Testimonial;
  featured: boolean;
  themeColor: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // lucide icon name
  features: string[];
}

export interface Industry {
  id: string;
  name: string;
  emoji: string;
  description: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}
