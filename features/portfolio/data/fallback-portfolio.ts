import type { PortfolioProfile } from "../types/portfolio.types"

export const fallbackPortfolio: PortfolioProfile = {
  id: null,
  hero: {
    eyebrow: "PORTFOLIO / 2026",
    name: "Felix Macaspac",
    title: "Frontend Developer",
    summary:
      "Frontend Developer crafting digital experiences at the intersection of design, technology, and user experience.",
    availability: {
      status: "Available for work",
      location: "Philippines",
    },
  },
  currentRole: {
    year: "2021 - Present",
    role: "Frontend Developer",
    company: "Hububble",
    description: "Building frontend experiences for modern web products.",
    tech: ["HubL", "React", "TypeScript", "HubSpot CMS", "Node.js"],
  },
  focus: ["HubL", "React", "TypeScript", "HubSpot CMS", "Node.js"],
  work: [
    {
      year: "2023",
      role: "Senior Frontend Engineer",
      company: "Vercel",
      description: "Leading frontend architecture for developer tools and AI-powered features.",
      tech: ["React", "TypeScript", "Next.js"],
    },
    {
      year: "2022",
      role: "Frontend Engineer",
      company: "Linear",
      description: "Built performant interfaces for project management and team collaboration.",
      tech: ["React", "GraphQL", "Framer Motion"],
    },
    {
      year: "2021",
      role: "Full Stack Developer",
      company: "Stripe",
      description: "Developed payment infrastructure and merchant-facing dashboard features.",
      tech: ["Ruby", "React", "PostgreSQL"],
    },
    {
      year: "2019",
      role: "Software Engineer",
      company: "Airbnb",
      description: "Created booking flow optimizations and host management tools.",
      tech: ["React", "Node.js", "MySQL"],
    },
  ],
  thoughts: [
    {
      title: "The Future of Web Development",
      excerpt: "Exploring how AI and automation are reshaping the way we build for the web.",
      date: "Dec 2024",
      readTime: "5 min",
    },
    {
      title: "Design Systems at Scale",
      excerpt: "Lessons learned from building and maintaining design systems across multiple products.",
      date: "Nov 2024",
      readTime: "8 min",
    },
    {
      title: "Performance-First Development",
      excerpt: "Why performance should be a first-class citizen in your development workflow.",
      date: "Oct 2024",
      readTime: "6 min",
    },
    {
      title: "The Art of Code Review",
      excerpt: "Building better software through thoughtful and constructive code reviews.",
      date: "Sep 2024",
      readTime: "4 min",
    },
  ],
  contactEmail: "test@example.com",
  socials: [
    { name: "GitHub", handle: "@felixmacaspac", url: "#" },
    { name: "v0.dev", handle: "@felixmacaspac", url: "#" },
    { name: "HubSpot Community", handle: "@felixmacaspac", url: "#" },
    { name: "LinkedIn", handle: "felixmacaspac", url: "#" },
  ],
  createdAt: null,
  updatedAt: null,
}
