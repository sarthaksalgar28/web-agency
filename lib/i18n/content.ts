export type Language = "en" | "mr";

export interface SiteContent {
  nav: string[];
  common: { startProject: string; viewWork: string };
  hero: {
    badge: string;
    headingPre: string;
    headingAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { projects: string; industries: string; technologies: string; satisfaction: string };
  };
  trustedBy: { label: string };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string; features: string[] }[];
  };
  industries: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { label: string; description: string }[];
  };
  whyChooseUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    searchAria: string;
    clearSearch: string;
    all: string;
    featured: string;
    empty: string;
    clearFilters: string;
  };
  stats: { items: string[] };
  technologies: {
    eyebrow: string;
    title: string;
    subtitle: string;
    categories: Record<string, string>;
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    mostPopular: string;
    items: { name: string; description: string; period: string; features: string[]; cta: string }[];
  };
  testimonials: { eyebrow: string; title: string; subtitle: string };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  blog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    read: string;
    posts: { title: string; excerpt: string; category: string; readTime: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    name: string;
    namePlaceholder: string;
    nameRequired: string;
    email: string;
    emailPlaceholder: string;
    emailRequired: string;
    emailInvalid: string;
    budget: string;
    budgetOptions: string[];
    projectDetails: string;
    projectPlaceholder: string;
    projectRequired: string;
    sending: string;
    sent: string;
    send: string;
    error: string;
    cards: {
      whatsappLabel: string;
      whatsappValue: string;
      emailLabel: string;
      bookCallLabel: string;
      bookCallValue: string;
    };
    mapTitle: string;
  };
  footer: {
    navigation: string;
    services: string;
    getInTouch: string;
    whatsappUs: string;
    rights: string;
    tagline: string;
  };
  stickyCTA: { chatWhatsApp: string };
  navbar: { toggleMenu: string };
  projectCard: { featured: string; caseStudy: string; liveSite: string };
  industryLabels: Record<string, string>;
  projects: Record<
    string,
    { description: string; testimonialQuote: string; testimonialRole: string }
  >;
  gate: {
    welcome: string;
    subtitle: string;
    englishLabel: string;
    englishSub: string;
    marathiLabel: string;
    marathiSub: string;
    hint: string;
  };
}

const en: SiteContent = {
  nav: ["Services", "Work", "Process", "Pricing", "FAQ", "Contact"],
  common: { startProject: "Start Your Project", viewWork: "View Our Work" },
  hero: {
    badge: "Premium Web Development Agency",
    headingPre: "We Build Websites That ",
    headingAccent: "Grow Businesses.",
    subtitle:
      "Jeevan Adhaar Solutions crafts blazing-fast, conversion-focused websites and web apps with design that belongs alongside the best on the internet.",
    ctaPrimary: "Start Your Project",
    ctaSecondary: "View Our Work",
    stats: {
      projects: "Projects",
      industries: "Industries",
      technologies: "Technologies",
      satisfaction: "Satisfaction",
    },
  },
  trustedBy: { label: "Trusted by businesses across industries" },
  services: {
    eyebrow: "Services",
    title: "Everything you need to win online",
    subtitle:
      "From a first business website to complex web applications — we cover the full journey, end to end.",
    items: [
      {
        title: "Business Websites",
        description:
          "Conversion-focused marketing sites that build trust and turn visitors into customers.",
        features: ["Custom design", "Lead capture", "CMS-ready", "Local SEO"],
      },
      {
        title: "E-commerce",
        description:
          "Fast, secure online stores with seamless checkout and inventory management.",
        features: ["Payment gateways", "Cart & checkout", "Product catalog", "Analytics"],
      },
      {
        title: "Custom Web Apps",
        description:
          "Scalable, full-stack applications tailored to your unique business logic.",
        features: ["Dashboards", "APIs & integrations", "Auth & roles", "Real-time data"],
      },
      {
        title: "UI/UX Design",
        description:
          "Beautiful, intuitive interfaces designed around your users and your goals.",
        features: ["Wireframes", "Design systems", "Prototyping", "Accessibility"],
      },
      {
        title: "Website Redesign",
        description:
          "Modernize outdated sites with refreshed design, speed, and conversions.",
        features: ["UX audit", "Rebrand", "Performance boost", "Migration"],
      },
      {
        title: "Maintenance",
        description:
          "Ongoing updates, monitoring, and support to keep your site fast and secure.",
        features: ["Updates", "Backups", "Security", "Uptime monitoring"],
      },
      {
        title: "SEO",
        description:
          "Technical and on-page optimization to rank higher and grow organic traffic.",
        features: ["Technical SEO", "Keyword strategy", "Schema markup", "Core Web Vitals"],
      },
      {
        title: "Hosting & Deployment",
        description:
          "Reliable global hosting, CI/CD pipelines, and zero-downtime deployments.",
        features: ["Global CDN", "CI/CD", "SSL & domains", "Scalable infra"],
      },
    ],
  },
  industries: {
    eyebrow: "Industries",
    title: "Industries We've Worked With",
    subtitle:
      "Hover an industry to instantly filter our portfolio below. We adapt our craft to every domain.",
    items: [
      { label: "Electrical", description: "Contractors & service providers" },
      { label: "Corporate", description: "Consultancies & enterprises" },
      { label: "Agriculture", description: "Agro businesses & suppliers" },
      { label: "Education", description: "Institutions & academies" },
      { label: "Personal Branding", description: "Portfolios & creators" },
      { label: "Farming", description: "Farms & produce brands" },
    ],
  },
  whyChooseUs: {
    eyebrow: "Why Choose Us",
    title: "Premium results, without the agency overhead",
    subtitle:
      "We combine design taste, engineering rigor, and a growth mindset to deliver websites that actually move the needle.",
    items: [
      {
        title: "Blazing Performance",
        desc: "We target 95+ Lighthouse scores and sub-second loads on every build.",
      },
      {
        title: "World-Class Design",
        desc: "Interfaces that look like they belong alongside Vercel, Stripe, and Linear.",
      },
      {
        title: "Modern Tech Stack",
        desc: "Next.js, React, and TypeScript — scalable, type-safe, future-proof code.",
      },
      {
        title: "Built to Convert",
        desc: "Every section is engineered to turn visitors into customers.",
      },
      {
        title: "SEO from Day One",
        desc: "Technical SEO, schema, sitemaps, and Open Graph baked in.",
      },
      {
        title: "Long-Term Partner",
        desc: "Ongoing support and iteration — we grow with your business.",
      },
    ],
  },
  portfolio: {
    eyebrow: "Portfolio",
    title: "Selected Work & Case Studies",
    subtitle:
      "Real projects, real results. Filter by industry or technology, or search to find exactly what you need.",
    searchPlaceholder: "Search projects, clients, technologies…",
    searchAria: "Search portfolio",
    clearSearch: "Clear search",
    all: "All",
    featured: "★ Featured",
    empty: "No projects match your filters.",
    clearFilters: "Clear all filters",
  },
  stats: {
    items: [
      "Total Projects",
      "Industries Served",
      "Technologies Used",
      "Years Experience",
      "Client Satisfaction",
      "Responsive Sites",
    ],
  },
  technologies: {
    eyebrow: "Technologies",
    title: "The modern stack we build on",
    subtitle:
      "Battle-tested tools chosen for speed, scalability, and developer excellence.",
    categories: {
      Framework: "Framework",
      Library: "Library",
      Language: "Language",
      Styling: "Styling",
      Animation: "Animation",
      Runtime: "Runtime",
      Hosting: "Hosting",
      Design: "Design",
      Database: "Database",
      ORM: "ORM",
    },
  },
  process: {
    eyebrow: "Our Process",
    title: "A clear path from idea to launch",
    subtitle:
      "No mystery, no chaos — a proven, transparent process that keeps you in the loop at every step.",
    items: [
      {
        title: "Discovery",
        description:
          "We learn your business, goals, audience, and competitors to define a clear strategy.",
      },
      {
        title: "Design",
        description:
          "We craft wireframes and high-fidelity designs aligned with your brand and users.",
      },
      {
        title: "Development",
        description:
          "We build fast, accessible, scalable code with modern frameworks and best practices.",
      },
      {
        title: "Launch & Grow",
        description:
          "We deploy, optimize for performance and SEO, then support and iterate over time.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Simple, transparent pricing",
    subtitle:
      "Pick a starting point — every project is tailored to your goals. No hidden fees, ever.",
    mostPopular: "Most Popular",
    items: [
      {
        name: "Starter",
        description: "Perfect for small businesses and personal brands getting online.",
        period: "one-time",
        features: [
          "Up to 5 pages",
          "Custom responsive design",
          "Contact form + WhatsApp",
          "Basic SEO setup",
          "Free domain + hosting setup",
          "1 month support",
        ],
        cta: "Start Your Project",
      },
      {
        name: "Business",
        description: "For growing businesses that need more power, content, and polish.",
        period: "one-time",
        features: [
          "Up to 12 pages",
          "Premium animations & interactions",
          "CMS / blog integration",
          "Advanced SEO + schema",
          "Analytics & tracking",
          "Performance optimization",
          "3 months support",
        ],
        cta: "Start Your Project",
      },
      {
        name: "Enterprise",
        description: "E-commerce, custom web apps, and large-scale platforms.",
        period: "tailored",
        features: [
          "Unlimited pages / app scope",
          "Custom web application",
          "E-commerce & payment integrations",
          "Dedicated project manager",
          "Priority support & SLA",
          "Ongoing maintenance plan",
        ],
        cta: "Book a Call",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our clients say",
    subtitle: "We measure success by the businesses we help grow.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    subtitle: "Everything you need to know before we start working together.",
    items: [
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
    ],
  },
  blog: {
    eyebrow: "Insights",
    title: "From our blog",
    subtitle: "Practical thoughts on web performance, design, and growth.",
    read: "Read",
    posts: [
      {
        title: "Why Website Speed Directly Impacts Your Revenue",
        excerpt:
          "A one-second delay can cut conversions significantly. Here's how we build sites that load instantly.",
        category: "Performance",
        readTime: "5 min read",
      },
      {
        title: "Design Systems That Scale With Your Brand",
        excerpt:
          "How a thoughtful design system keeps your product consistent as you grow.",
        category: "Design",
        readTime: "6 min read",
      },
      {
        title: "SEO Fundamentals Every Business Site Needs",
        excerpt:
          "The technical and on-page essentials that help your website get found.",
        category: "SEO",
        readTime: "7 min read",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build something great",
    subtitle:
      "Tell us about your project and we'll get back within one business day.",
    name: "Name",
    namePlaceholder: "Your name",
    nameRequired: "Name is required",
    email: "Email",
    emailPlaceholder: "you@company.com",
    emailRequired: "Email is required",
    emailInvalid: "Enter a valid email",
    budget: "Budget",
    budgetOptions: ["Under ₹15,000", "₹15,000 – ₹45,000", "₹45,000 – ₹1,50,000", "₹1,50,000+"],
    projectDetails: "Project details",
    projectPlaceholder: "What are you looking to build?",
    projectRequired: "Please tell us about your project",
    sending: "Sending…",
    sent: "Message sent!",
    send: "Send Message",
    error: "Something went wrong. Please try WhatsApp or email instead.",
    cards: {
      whatsappLabel: "WhatsApp",
      whatsappValue: "Chat with us instantly",
      emailLabel: "Email",
      bookCallLabel: "Book a Call",
      bookCallValue: "Schedule a free intro call",
    },
    mapTitle: "Location map",
  },
  footer: {
    navigation: "Navigation",
    services: "Services",
    getInTouch: "Get in touch",
    whatsappUs: "WhatsApp us",
    rights: "All rights reserved.",
    tagline: "Crafted with precision · Built for performance",
  },
  stickyCTA: { chatWhatsApp: "Chat on WhatsApp" },
  navbar: { toggleMenu: "Toggle menu" },
  projectCard: { featured: "Featured", caseStudy: "Case Study", liveSite: "Live Site" },
  industryLabels: {
    Electrical: "Electrical",
    Corporate: "Corporate",
    Agriculture: "Agriculture",
    Education: "Education",
    "Personal Branding": "Personal Branding",
    Farming: "Farming",
  },
  projects: {
    "shubhshri-electrical-contractors": {
      description:
        "A trust-building business website for an electrical contracting firm, designed to showcase services, certifications, and completed projects while driving qualified inquiries.",
      testimonialQuote:
        "Our new website gives clients confidence before they even call. The team delivered exactly what we needed.",
      testimonialRole: "Owner",
    },
    "renukai-consultants": {
      description:
        "A corporate website for a structural engineering and construction consultancy, presenting their expertise, projects, and team with a polished, authoritative brand presence.",
      testimonialQuote:
        "The website reflects the quality of our engineering work. It's become a key part of how we win new projects.",
      testimonialRole: "Director",
    },
    "swadesh-agro": {
      description:
        "An agricultural business website showcasing products, supply capabilities, and brand story for a modern agro enterprise serving farmers and distributors.",
      testimonialQuote:
        "Our products finally have a home online that does them justice. Partners take us more seriously now.",
      testimonialRole: "Founder",
    },
    "shree-ganesh-education": {
      description:
        "An educational institution website built to inform students and parents, present programs and faculty, and streamline admissions enquiries.",
      testimonialQuote:
        "Parents now find everything they need on the website. It has made our admissions process far smoother.",
      testimonialRole: "Administrator",
    },
    "kishor-salgar": {
      description:
        "A personal portfolio website crafted to present an individual's professional profile, achievements, and contact details with a clean, memorable identity.",
      testimonialQuote:
        "My portfolio looks exactly how I wanted — clean, modern, and professional. It represents me perfectly.",
      testimonialRole: "Professional",
    },
    "green-peak-farms": {
      description:
        "A farm business website presenting produce, farming practices, and ordering/enquiry options for a sustainability-focused agricultural brand.",
      testimonialQuote:
        "The website captures the spirit of our farm beautifully. Customers love how easy it is to reach us.",
      testimonialRole: "Owner",
    },
  },
  gate: {
    welcome: "Welcome to",
    subtitle: "Please choose your preferred language to continue.",
    englishLabel: "English",
    englishSub: "Continue in English",
    marathiLabel: "मराठी",
    marathiSub: "मराठीत पुढे जा",
    hint: "You can change the language anytime from the menu bar.",
  },
};

const mr: SiteContent = {
  nav: ["सेवा", "कामे", "प्रक्रिया", "किंमत", "प्रश्न", "संपर्क"],
  common: { startProject: "तुमचा प्रकल्प सुरू करा", viewWork: "आमचे काम पाहा" },
  hero: {
    badge: "प्रीमियम वेब डेव्हलपमेंट एजन्सी",
    headingPre: "आम्ही अशा वेबसाइट्स तयार करतो ज्या ",
    headingAccent: "व्यवसाय वाढवतात.",
    subtitle:
      "Jeevan Adhaar Solutions अत्यंत वेगवान आणि रूपांतरण-केंद्रित वेबसाइट्स व वेब अॅप्स तयार करते — इंटरनेटवरील सर्वोत्तम डिझाइनच्या तोडीस तोड डिझाइनसह.",
    ctaPrimary: "तुमचा प्रकल्प सुरू करा",
    ctaSecondary: "आमचे काम पाहा",
    stats: {
      projects: "प्रकल्प",
      industries: "उद्योग",
      technologies: "तंत्रज्ञान",
      satisfaction: "समाधान",
    },
  },
  trustedBy: { label: "विविध उद्योगांतील व्यवसायांचा विश्वास" },
  services: {
    eyebrow: "सेवा",
    title: "ऑनलाइन यश मिळवण्यासाठी आवश्यक सर्वकाही",
    subtitle:
      "पहिल्या व्यवसाय वेबसाइटपासून ते जटिल वेब अॅप्लिकेशन्सपर्यंत — आम्ही संपूर्ण प्रवास सांभाळतो.",
    items: [
      {
        title: "व्यवसाय वेबसाइट्स",
        description:
          "विश्वास निर्माण करणाऱ्या आणि अभ्यागतांना ग्राहकांमध्ये रूपांतरित करणाऱ्या रूपांतरण-केंद्रित मार्केटिंग साइट्स.",
        features: ["सानुकूल डिझाइन", "लीड कॅप्चर", "CMS-सज्ज", "स्थानिक SEO"],
      },
      {
        title: "ई-कॉमर्स",
        description:
          "सुरळीत चेकआउट आणि इन्व्हेंटरी व्यवस्थापनासह वेगवान, सुरक्षित ऑनलाइन स्टोअर्स.",
        features: ["पेमेंट गेटवे", "कार्ट व चेकआउट", "उत्पादन सूची", "अॅनालिटिक्स"],
      },
      {
        title: "सानुकूल वेब अॅप्स",
        description:
          "तुमच्या विशिष्ट व्यवसाय तर्कानुसार बनवलेली स्केलेबल, फुल-स्टॅक अॅप्लिकेशन्स.",
        features: ["डॅशबोर्ड", "API व इंटिग्रेशन्स", "ऑथ व भूमिका", "रिअल-टाइम डेटा"],
      },
      {
        title: "UI/UX डिझाइन",
        description:
          "तुमच्या वापरकर्त्यांभोवती आणि उद्दिष्टांभोवती तयार केलेले सुंदर, सहज इंटरफेस.",
        features: ["वायरफ्रेम्स", "डिझाइन सिस्टीम्स", "प्रोटोटाइपिंग", "सुलभता"],
      },
      {
        title: "वेबसाइट पुनर्रचना",
        description: "जुन्या साइट्स ताज्या डिझाइन, वेग आणि रूपांतरणांसह आधुनिक करा.",
        features: ["UX ऑडिट", "पुनर्ब्रँडिंग", "कार्यक्षमता वाढ", "स्थलांतर"],
      },
      {
        title: "देखभाल",
        description:
          "तुमची साइट वेगवान व सुरक्षित ठेवण्यासाठी सतत अपडेट्स, निरीक्षण आणि सहाय्य.",
        features: ["अपडेट्स", "बॅकअप", "सुरक्षा", "अपटाइम निरीक्षण"],
      },
      {
        title: "SEO",
        description:
          "उच्च रँक मिळवण्यासाठी आणि ऑरगॅनिक ट्रॅफिक वाढवण्यासाठी तांत्रिक व ऑन-पेज ऑप्टिमायझेशन.",
        features: ["तांत्रिक SEO", "कीवर्ड धोरण", "स्कीमा मार्कअप", "कोअर वेब व्हायटल्स"],
      },
      {
        title: "होस्टिंग व डिप्लॉयमेंट",
        description:
          "विश्वासार्ह जागतिक होस्टिंग, CI/CD पाइपलाइन्स आणि शून्य-डाउनटाइम डिप्लॉयमेंट्स.",
        features: ["जागतिक CDN", "CI/CD", "SSL व डोमेन्स", "स्केलेबल इन्फ्रा"],
      },
    ],
  },
  industries: {
    eyebrow: "उद्योग",
    title: "आम्ही ज्या उद्योगांसोबत काम केले",
    subtitle:
      "खालील आमचा पोर्टफोलिओ त्वरित फिल्टर करण्यासाठी उद्योगावर माउस फिरवा. आम्ही प्रत्येक क्षेत्रासाठी आमचे कौशल्य जुळवतो.",
    items: [
      { label: "विद्युत", description: "कंत्राटदार व सेवा पुरवठादार" },
      { label: "कॉर्पोरेट", description: "सल्लागार व उद्योग" },
      { label: "कृषी", description: "कृषी व्यवसाय व पुरवठादार" },
      { label: "शिक्षण", description: "संस्था व अकादमी" },
      { label: "वैयक्तिक ब्रँडिंग", description: "पोर्टफोलिओ व क्रिएटर्स" },
      { label: "शेती", description: "शेती व उत्पादन ब्रँड्स" },
    ],
  },
  whyChooseUs: {
    eyebrow: "आम्हालाच का निवडा",
    title: "एजन्सीच्या अतिरिक्त खर्चाशिवाय प्रीमियम परिणाम",
    subtitle:
      "खऱ्या अर्थाने परिणाम देणाऱ्या वेबसाइट्ससाठी आम्ही डिझाइनची जाण, अभियांत्रिकी काटेकोरपणा आणि वाढीची दृष्टी एकत्र आणतो.",
    items: [
      {
        title: "विजेसारखी कार्यक्षमता",
        desc: "प्रत्येक बिल्डवर आम्ही 95+ लाइटहाउस स्कोअर आणि सेकंदाहून कमी लोड वेळ साधतो.",
      },
      {
        title: "जागतिक दर्जाचे डिझाइन",
        desc: "Vercel, Stripe आणि Linear यांच्या तोडीचे वाटणारे इंटरफेस.",
      },
      {
        title: "आधुनिक तंत्रज्ञान",
        desc: "Next.js, React आणि TypeScript — स्केलेबल, टाइप-सेफ, भविष्यासाठी सज्ज कोड.",
      },
      {
        title: "रूपांतरणासाठी सज्ज",
        desc: "प्रत्येक विभाग अभ्यागतांना ग्राहकांमध्ये रूपांतरित करण्यासाठी तयार केलेला आहे.",
      },
      {
        title: "पहिल्या दिवसापासून SEO",
        desc: "तांत्रिक SEO, स्कीमा, साइटमॅप्स आणि Open Graph अंतर्भूत.",
      },
      {
        title: "दीर्घकालीन भागीदार",
        desc: "सतत सहाय्य व सुधारणा — आम्ही तुमच्या व्यवसायासोबत वाढतो.",
      },
    ],
  },
  portfolio: {
    eyebrow: "पोर्टफोलिओ",
    title: "निवडक कामे व केस स्टडीज",
    subtitle:
      "खरे प्रकल्प, खरे परिणाम. उद्योग किंवा तंत्रज्ञानानुसार फिल्टर करा, किंवा हवे ते शोधा.",
    searchPlaceholder: "प्रकल्प, ग्राहक, तंत्रज्ञान शोधा…",
    searchAria: "पोर्टफोलिओ शोधा",
    clearSearch: "शोध साफ करा",
    all: "सर्व",
    featured: "★ निवडक",
    empty: "तुमच्या फिल्टरशी जुळणारे कोणतेही प्रकल्प नाहीत.",
    clearFilters: "सर्व फिल्टर साफ करा",
  },
  stats: {
    items: [
      "एकूण प्रकल्प",
      "सेवा दिलेले उद्योग",
      "वापरलेली तंत्रज्ञाने",
      "वर्षांचा अनुभव",
      "ग्राहक समाधान",
      "रिस्पॉन्सिव्ह साइट्स",
    ],
  },
  technologies: {
    eyebrow: "तंत्रज्ञान",
    title: "आम्ही वापरतो ते आधुनिक तंत्रज्ञान",
    subtitle: "वेग, स्केलेबिलिटी आणि विकसक उत्कृष्टतेसाठी निवडलेली सिद्ध साधने.",
    categories: {
      Framework: "फ्रेमवर्क",
      Library: "लायब्ररी",
      Language: "भाषा",
      Styling: "स्टायलिंग",
      Animation: "अॅनिमेशन",
      Runtime: "रनटाइम",
      Hosting: "होस्टिंग",
      Design: "डिझाइन",
      Database: "डेटाबेस",
      ORM: "ORM",
    },
  },
  process: {
    eyebrow: "आमची प्रक्रिया",
    title: "कल्पनेपासून लाँचपर्यंतचा स्पष्ट मार्ग",
    subtitle:
      "कोणतेही रहस्य नाही, गोंधळ नाही — प्रत्येक टप्प्यावर तुम्हाला माहिती देणारी सिद्ध, पारदर्शक प्रक्रिया.",
    items: [
      {
        title: "शोध",
        description:
          "स्पष्ट धोरण ठरवण्यासाठी आम्ही तुमचा व्यवसाय, उद्दिष्टे, प्रेक्षक व स्पर्धक समजून घेतो.",
      },
      {
        title: "डिझाइन",
        description:
          "तुमच्या ब्रँड व वापरकर्त्यांशी जुळणारे वायरफ्रेम्स व उच्च-दर्जाचे डिझाइन आम्ही तयार करतो.",
      },
      {
        title: "विकास",
        description:
          "आधुनिक फ्रेमवर्क व सर्वोत्तम पद्धतींसह आम्ही वेगवान, सुलभ, स्केलेबल कोड तयार करतो.",
      },
      {
        title: "लाँच व वाढ",
        description:
          "आम्ही डिप्लॉय करतो, कार्यक्षमता व SEO साठी ऑप्टिमाइझ करतो, नंतर सतत सहाय्य व सुधारणा करतो.",
      },
    ],
  },
  pricing: {
    eyebrow: "किंमत",
    title: "सोपी, पारदर्शक किंमत",
    subtitle:
      "एक सुरुवात निवडा — प्रत्येक प्रकल्प तुमच्या उद्दिष्टांनुसार बनवला जातो. कोणतेही छुपे शुल्क नाही.",
    mostPopular: "सर्वाधिक लोकप्रिय",
    items: [
      {
        name: "स्टार्टर",
        description: "ऑनलाइन येणाऱ्या लहान व्यवसाय व वैयक्तिक ब्रँडसाठी योग्य.",
        period: "एकवेळ",
        features: [
          "5 पृष्ठांपर्यंत",
          "सानुकूल रिस्पॉन्सिव्ह डिझाइन",
          "संपर्क फॉर्म + WhatsApp",
          "मूलभूत SEO सेटअप",
          "मोफत डोमेन + होस्टिंग सेटअप",
          "1 महिना सहाय्य",
        ],
        cta: "तुमचा प्रकल्प सुरू करा",
      },
      {
        name: "बिझनेस",
        description: "अधिक क्षमता, मजकूर व परिष्करण हवे असलेल्या वाढत्या व्यवसायांसाठी.",
        period: "एकवेळ",
        features: [
          "12 पृष्ठांपर्यंत",
          "प्रीमियम अॅनिमेशन्स व संवाद",
          "CMS / ब्लॉग इंटिग्रेशन",
          "प्रगत SEO + स्कीमा",
          "अॅनालिटिक्स व ट्रॅकिंग",
          "कार्यक्षमता ऑप्टिमायझेशन",
          "3 महिने सहाय्य",
        ],
        cta: "तुमचा प्रकल्प सुरू करा",
      },
      {
        name: "एंटरप्राइझ",
        description: "ई-कॉमर्स, सानुकूल वेब अॅप्स आणि मोठ्या प्रमाणावरील प्लॅटफॉर्म्स.",
        period: "सानुकूल",
        features: [
          "अमर्यादित पृष्ठे / अॅप व्याप्ती",
          "सानुकूल वेब अॅप्लिकेशन",
          "ई-कॉमर्स व पेमेंट इंटिग्रेशन्स",
          "समर्पित प्रकल्प व्यवस्थापक",
          "प्राधान्य सहाय्य व SLA",
          "सतत देखभाल योजना",
        ],
        cta: "कॉल बुक करा",
      },
    ],
  },
  testimonials: {
    eyebrow: "प्रशंसापत्रे",
    title: "आमचे ग्राहक काय म्हणतात",
    subtitle: "आम्ही वाढवायला मदत केलेल्या व्यवसायांवरून आम्ही यश मोजतो.",
  },
  faq: {
    eyebrow: "प्रश्न",
    title: "वारंवार विचारले जाणारे प्रश्न",
    subtitle: "एकत्र काम सुरू करण्यापूर्वी तुम्हाला माहित असावे असे सर्वकाही.",
    items: [
      {
        question: "वेबसाइट तयार करायला किती वेळ लागतो?",
        answer:
          "बहुतांश व्यवसाय वेबसाइट्स व्याप्तीनुसार 2–5 आठवडे घेतात. सानुकूल वेब अॅप्स व ई-कॉमर्स स्टोअर्सना अधिक वेळ लागतो. शोध कॉलनंतर आम्ही स्पष्ट कालमर्यादा देतो.",
      },
      {
        question: "वेबसाइटची किंमत किती असते?",
        answer:
          "आमची पॅकेजेस स्टार्टर साइटसाठी ₹24,999 पासून सुरू होतात. किंमत पृष्ठे, वैशिष्ट्ये व जटिलतेवर अवलंबून असते. सानुकूल कोटसाठी आमचा किंमत विभाग पाहा किंवा कॉल बुक करा.",
      },
      {
        question: "तुम्ही सतत देखभाल पुरवता का?",
        answer:
          "होय. लाँचनंतर तुमची साइट वेगवान व सुरक्षित राहावी यासाठी अपडेट्स, बॅकअप, सुरक्षा व निरीक्षण समाविष्ट असलेल्या देखभाल योजना आम्ही देतो.",
      },
      {
        question: "माझी वेबसाइट मोबाइल-फ्रेंडली व वेगवान असेल का?",
        answer:
          "नक्कीच. आम्ही तयार करत असलेली प्रत्येक साइट पूर्णपणे रिस्पॉन्सिव्ह, कोअर वेब व्हायटल्ससाठी ऑप्टिमाइझ केलेली असते आणि कार्यक्षमता, SEO व सुलभतेसाठी 95+ लाइटहाउस स्कोअरचे लक्ष्य ठेवते.",
      },
      {
        question: "तुम्ही SEO सांभाळता का?",
        answer:
          "होय. पहिल्या दिवसापासून रँक व शेअर करण्यास सज्ज होण्यासाठी आम्ही तांत्रिक SEO, ऑन-पेज ऑप्टिमायझेशन, स्कीमा मार्कअप, साइटमॅप्स व Open Graph सेटअप समाविष्ट करतो.",
      },
      {
        question: "तुम्ही माझी सध्याची वेबसाइट पुनर्रचना करू शकता का?",
        answer:
          "नक्कीच. आम्ही तुमची सध्याची साइट तपासतो, डिझाइन व कार्यक्षमता आधुनिक करतो आणि कमीत कमी व्यत्ययासह तुमचा मजकूर स्थलांतरित करतो.",
      },
    ],
  },
  blog: {
    eyebrow: "अंतर्दृष्टी",
    title: "आमच्या ब्लॉगवरून",
    subtitle: "वेब कार्यक्षमता, डिझाइन व वाढ यावरील व्यावहारिक विचार.",
    read: "वाचा",
    posts: [
      {
        title: "वेबसाइटचा वेग तुमच्या महसुलावर थेट परिणाम का करतो",
        excerpt:
          "एका सेकंदाचा विलंबही रूपांतरण लक्षणीयरीत्या घटवू शकतो. त्वरित लोड होणाऱ्या साइट्स आम्ही कशा तयार करतो ते पाहा.",
        category: "कार्यक्षमता",
        readTime: "5 मिनिटे वाचन",
      },
      {
        title: "तुमच्या ब्रँडसोबत वाढणाऱ्या डिझाइन सिस्टीम्स",
        excerpt:
          "विचारपूर्वक तयार केलेली डिझाइन सिस्टीम तुमची वाढ होताना उत्पादन सुसंगत कशी ठेवते.",
        category: "डिझाइन",
        readTime: "6 मिनिटे वाचन",
      },
      {
        title: "प्रत्येक व्यवसाय साइटला आवश्यक SEO मूलतत्त्वे",
        excerpt: "तुमची वेबसाइट सापडण्यास मदत करणाऱ्या तांत्रिक व ऑन-पेज आवश्यक बाबी.",
        category: "SEO",
        readTime: "7 मिनिटे वाचन",
      },
    ],
  },
  contact: {
    eyebrow: "संपर्क",
    title: "चला काहीतरी उत्तम घडवूया",
    subtitle: "तुमच्या प्रकल्पाबद्दल सांगा, आम्ही एका कामकाजाच्या दिवसात उत्तर देऊ.",
    name: "नाव",
    namePlaceholder: "तुमचे नाव",
    nameRequired: "नाव आवश्यक आहे",
    email: "ईमेल",
    emailPlaceholder: "you@company.com",
    emailRequired: "ईमेल आवश्यक आहे",
    emailInvalid: "वैध ईमेल प्रविष्ट करा",
    budget: "बजेट",
    budgetOptions: ["₹15,000 पेक्षा कमी", "₹15,000 – ₹45,000", "₹45,000 – ₹1,50,000", "₹1,50,000+"],
    projectDetails: "प्रकल्प तपशील",
    projectPlaceholder: "तुम्हाला काय तयार करायचे आहे?",
    projectRequired: "कृपया तुमच्या प्रकल्पाबद्दल सांगा",
    sending: "पाठवत आहे…",
    sent: "संदेश पाठवला!",
    send: "संदेश पाठवा",
    error: "काहीतरी चूक झाली. कृपया त्याऐवजी WhatsApp किंवा ईमेल वापरा.",
    cards: {
      whatsappLabel: "WhatsApp",
      whatsappValue: "आमच्याशी त्वरित गप्पा मारा",
      emailLabel: "ईमेल",
      bookCallLabel: "कॉल बुक करा",
      bookCallValue: "मोफत प्रास्ताविक कॉल ठरवा",
    },
    mapTitle: "स्थान नकाशा",
  },
  footer: {
    navigation: "नेव्हिगेशन",
    services: "सेवा",
    getInTouch: "संपर्कात रहा",
    whatsappUs: "आम्हाला WhatsApp करा",
    rights: "सर्व हक्क राखीव.",
    tagline: "अचूकतेने घडवलेले · कार्यक्षमतेसाठी तयार",
  },
  stickyCTA: { chatWhatsApp: "WhatsApp वर गप्पा मारा" },
  navbar: { toggleMenu: "मेनू टॉगल करा" },
  projectCard: { featured: "निवडक", caseStudy: "केस स्टडी", liveSite: "लाइव्ह साइट" },
  industryLabels: {
    Electrical: "विद्युत",
    Corporate: "कॉर्पोरेट",
    Agriculture: "कृषी",
    Education: "शिक्षण",
    "Personal Branding": "वैयक्तिक ब्रँडिंग",
    Farming: "शेती",
  },
  projects: {
    "shubhshri-electrical-contractors": {
      description:
        "विद्युत कंत्राट कंपनीसाठी विश्वास निर्माण करणारी व्यवसाय वेबसाइट — सेवा, प्रमाणपत्रे व पूर्ण झालेले प्रकल्प दाखवून दर्जेदार चौकशी मिळवण्यासाठी तयार केलेली.",
      testimonialQuote:
        "आमची नवीन वेबसाइट ग्राहकांना कॉल करण्यापूर्वीच विश्वास देते. टीमने आम्हाला हवे तेच दिले.",
      testimonialRole: "मालक",
    },
    "renukai-consultants": {
      description:
        "स्ट्रक्चरल इंजिनिअरिंग व बांधकाम सल्लागार कंपनीसाठी कॉर्पोरेट वेबसाइट — त्यांचे कौशल्य, प्रकल्प व टीम परिष्कृत, अधिकृत ब्रँड उपस्थितीसह सादर करणारी.",
      testimonialQuote:
        "वेबसाइट आमच्या अभियांत्रिकी कामाची गुणवत्ता दर्शवते. नवीन प्रकल्प मिळवण्याचा तो एक महत्त्वाचा भाग बनला आहे.",
      testimonialRole: "संचालक",
    },
    "swadesh-agro": {
      description:
        "शेतकरी व वितरकांना सेवा देणाऱ्या आधुनिक कृषी उद्योगासाठी उत्पादने, पुरवठा क्षमता व ब्रँड कथा दाखवणारी कृषी व्यवसाय वेबसाइट.",
      testimonialQuote:
        "आमच्या उत्पादनांना अखेर ऑनलाइन योग्य ओळख मिळाली. भागीदार आता आम्हाला अधिक गांभीर्याने घेतात.",
      testimonialRole: "संस्थापक",
    },
    "shree-ganesh-education": {
      description:
        "विद्यार्थी व पालकांना माहिती देण्यासाठी, अभ्यासक्रम व शिक्षक सादर करण्यासाठी आणि प्रवेश चौकशी सुलभ करण्यासाठी तयार केलेली शैक्षणिक संस्था वेबसाइट.",
      testimonialQuote:
        "पालकांना आता वेबसाइटवर हवे ते सर्व मिळते. यामुळे आमची प्रवेश प्रक्रिया खूप सुलभ झाली आहे.",
      testimonialRole: "प्रशासक",
    },
    "kishor-salgar": {
      description:
        "व्यक्तीचे व्यावसायिक प्रोफाइल, यश व संपर्क तपशील स्वच्छ, संस्मरणीय ओळखीसह सादर करणारी वैयक्तिक पोर्टफोलिओ वेबसाइट.",
      testimonialQuote:
        "माझा पोर्टफोलिओ मला हवा तसाच दिसतो — स्वच्छ, आधुनिक व व्यावसायिक. तो माझे अचूक प्रतिनिधित्व करतो.",
      testimonialRole: "व्यावसायिक",
    },
    "green-peak-farms": {
      description:
        "टिकाऊपणावर केंद्रित कृषी ब्रँडसाठी उत्पादन, शेती पद्धती व ऑर्डर/चौकशी पर्याय सादर करणारी शेती व्यवसाय वेबसाइट.",
      testimonialQuote:
        "वेबसाइट आमच्या शेताचा आत्मा सुंदररीत्या टिपते. ग्राहकांना आमच्यापर्यंत पोहोचणे किती सोपे आहे हे आवडते.",
      testimonialRole: "मालक",
    },
  },
  gate: {
    welcome: "स्वागत आहे",
    subtitle: "पुढे जाण्यासाठी कृपया आपली पसंतीची भाषा निवडा.",
    englishLabel: "English",
    englishSub: "Continue in English",
    marathiLabel: "मराठी",
    marathiSub: "मराठीत पुढे जा",
    hint: "आपण मेनू बारमधून कधीही भाषा बदलू शकता.",
  },
};

export const CONTENT: Record<Language, SiteContent> = { en, mr };
