import type { PortfolioProfile } from "../types/portfolio.types"

export const portfolioContent: PortfolioProfile = {
  id: null,
  hero: {
    eyebrow: "PORTFOLIO / 2026",
    name: "Delcio Agostinho",
    title: "Software Engineer & Computer Science Student",
    summary:
      "Final-year Computer Science student at the University of Liverpool focused on backend engineering, scalable systems, cloud infrastructure, and AI-powered products. I build fullstack applications, automation systems, developer tools, and SaaS products with a strong focus on real-world usability, architecture, and performance.",
    availability: {
      status: "Open to graduate software engineering opportunities, freelance projects, and collaborations",
      location: "Liverpool, United Kingdom",
    },
  },
  currentRole: {
    year: "2023 - Present",
    role: "BSc Computer Science Student",
    company: "University of Liverpool",
    description:
      "Final-year Computer Science student specialising in backend systems, scalable architectures, AI-powered applications, and cloud technologies. Building production-oriented software projects while exploring areas such as distributed systems, authentication/security, automation, and developer tooling.",
    tech: [
      "Python",
      "FastAPI",
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "MongoDB",
      "Docker",
      "GitHub Actions",
      "GCP",
      "Linux",
      "Firebase Auth",
      "WebSockets",
    ],
  },
  focus: [
    "Backend Engineering",
    "FastAPI",
    "Java/Spring Boot",
    "Cloud & Infrastructure",
    "Docker",
    "GCP",
    "AI & Automation",
    "LLM Workflows",
    "AI Agents",
  ],
  work: [
    {
      year: "2025 - Present",
      role: "Founder & Software Engineer",
      company: "Neemble Eat",
      description:
        "Building a multi-restaurant ordering and operations platform that allows customers to scan QR codes, place orders, and monitor order status in real time. Developed a complete admin dashboard for restaurant management, analytics, menu management, and operational reporting. Focused heavily on scalable backend architecture, authentication, and real-time systems.",
      tech: ["FastAPI", "React", "TypeScript", "MongoDB", "Docker", "WebSockets", "GCP", "Firebase Auth", "Tailwind CSS"],
    },
    {
      year: "2024 - Present",
      role: "Independent Software Developer",
      company: "Freelance / Personal Projects",
      description:
        "Designed and developed multiple software systems including AI-powered assistants, workflow automation platforms, authentication/security libraries, search engine prototypes, and SaaS concepts. Focused on backend engineering, API design, cloud deployment, and scalable architectures.",
      tech: [
        "Python",
        "Java",
        "FastAPI",
        "Spring Boot",
        "React",
        "PostgreSQL",
        "MongoDB",
        "LangChain",
        "Docker",
        "GitHub Actions",
        "Linux",
      ],
    },
  ],
  thoughts: [
    {
      title: "Building Software That Solves Real Operational Problems",
      excerpt:
        "Why I prefer building systems that automate workflows, improve operations, and solve measurable business problems instead of purely theoretical projects.",
      date: "May 2026",
      readTime: "6 min",
    },
    {
      title: "Why Backend Engineering Is Still Underrated",
      excerpt:
        "Modern products rely on scalable backend systems, infrastructure, authentication, and integrations far more than most people realise.",
      date: "May 2026",
      readTime: "5 min",
    },
    {
      title: "From AI Hype to Practical Automation",
      excerpt:
        "Most businesses do not need AI magic. They need reliable systems that automate repetitive work and integrate into existing operations.",
      date: "April 2026",
      readTime: "7 min",
    },
  ],
  contactEmail: "delciogiovani@outlook.com",
  socials: [
    { name: "GitHub", handle: "@dELCIoGio", url: "https://github.com/dElCIoGio" },
    { name: "LinkedIn", handle: "Delcio Agostinho", url: "https://www.linkedin.com/in/delcio-agostinho-200797181/" },
    { name: "Email", handle: "delciogiovani@outlook.com", url: "mailto:delciogiovani@outlook.com" },
  ],
  createdAt: null,
  updatedAt: null,
}
