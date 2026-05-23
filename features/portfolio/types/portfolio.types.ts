export type AvailabilityBlock = {
  status: string
  location: string
}

export type HeroBlock = {
  eyebrow: string
  name: string
  title: string
  summary: string
  availability: AvailabilityBlock
}

export type WorkItem = {
  year: string
  role: string
  company: string
  description: string
  tech: string[]
}

export type ThoughtItem = {
  title: string
  excerpt: string
  date: string
  readTime: string
}

export type SocialLink = {
  name: string
  handle: string
  url: string
}

export type PortfolioProfile = {
  id: string | null
  hero: HeroBlock
  currentRole: WorkItem | null
  focus: string[]
  work: WorkItem[]
  thoughts: ThoughtItem[]
  contactEmail: string
  socials: SocialLink[]
  createdAt: string | null
  updatedAt: string | null
}
