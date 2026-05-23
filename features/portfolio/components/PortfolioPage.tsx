"use client"

import Link from "next/link"
import { type FormEvent, useEffect, useRef, useState } from "react"

import { submitContactMessage } from "@/features/contact/api/contact.api"
import type { PortfolioProfile } from "@/features/portfolio/types/portfolio.types"

type PortfolioPageProps = {
  portfolio: PortfolioProfile
}

type ContactFormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialContactForm: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export function PortfolioPage({ portfolio }: PortfolioPageProps) {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const [contactForm, setContactForm] = useState<ContactFormState>(initialContactForm)
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [submitMessage, setSubmitMessage] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitState("loading")
    setSubmitMessage("")

    try {
      const response = await submitContactMessage({
        name: contactForm.name,
        email: contactForm.email,
        subject: contactForm.subject || undefined,
        message: contactForm.message,
      })

      setContactForm(initialContactForm)
      setSubmitState("success")
      setSubmitMessage(response.message)
    } catch (error) {
      setSubmitState("error")
      setSubmitMessage(error instanceof Error ? error.message : "Could not send your message.")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "thoughts", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`h-8 w-2 rounded-full transition-all duration-500 ${
                activeSection === section ? "bg-foreground" : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Navigate to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-16">
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="flex min-h-screen items-center opacity-0"
        >
          <div className="grid w-full gap-12 sm:gap-16 lg:grid-cols-5">
            <div className="space-y-6 sm:space-y-8 lg:col-span-3">
              <div className="space-y-3 sm:space-y-2">
                <div className="font-mono text-sm tracking-wider text-muted-foreground">{portfolio.hero.eyebrow}</div>
                <h1 className="text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl">
                  {portfolio.hero.name.split(" ")[0]}
                  <br />
                  <span className="text-muted-foreground">{portfolio.hero.name.split(" ").slice(1).join(" ")}</span>
                </h1>
              </div>

              <div className="max-w-md space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">{portfolio.hero.summary}</p>

                <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    {portfolio.hero.availability.status}
                  </div>
                  <div>{portfolio.hero.availability.location}</div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col justify-end space-y-6 sm:space-y-8 lg:col-span-2 lg:mt-0">
              {portfolio.currentRole ? (
                <div className="space-y-4">
                  <div className="font-mono text-sm text-muted-foreground">CURRENTLY</div>
                  <div className="space-y-2">
                    <div className="text-foreground">{portfolio.currentRole.role}</div>
                    <div className="text-muted-foreground">@ {portfolio.currentRole.company}</div>
                    <div className="text-xs text-muted-foreground">{portfolio.currentRole.year}</div>
                  </div>
                </div>
              ) : null}

              <div className="space-y-4">
                <div className="font-mono text-sm text-muted-foreground">FOCUS</div>
                <div className="flex flex-wrap gap-2">
                  {portfolio.focus.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-3 py-1 text-xs transition-colors duration-300 hover:border-muted-foreground/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>

        <section
          id="work"
          ref={(el) => {
            sectionsRef.current[1] = el
          }}
          className="min-h-screen py-20 opacity-0 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-3xl font-light sm:text-4xl">Selected Work</h2>
              <div className="font-mono text-sm text-muted-foreground">2019 - 2026</div>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {portfolio.work.map((job) => (
                <div
                  key={`${job.year}-${job.company}-${job.role}`}
                  className="group grid gap-4 border-b border-border/50 py-6 transition-colors duration-500 hover:border-border sm:gap-8 sm:py-8 lg:grid-cols-12"
                >
                  <div className="lg:col-span-2">
                    <div className="text-xl font-light text-muted-foreground transition-colors duration-500 group-hover:text-foreground sm:text-2xl">
                      {job.year}
                    </div>
                  </div>

                  <div className="space-y-3 lg:col-span-6">
                    <div>
                      <h3 className="text-lg font-medium sm:text-xl">{job.role}</h3>
                      <div className="text-muted-foreground">{job.company}</div>
                    </div>
                    <p className="max-w-lg leading-relaxed text-muted-foreground">{job.description}</p>
                  </div>

                  <div className="mt-2 flex flex-wrap gap-2 lg:col-span-4 lg:mt-0 lg:justify-end">
                    {job.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded px-2 py-1 text-xs text-muted-foreground transition-colors duration-500 group-hover:border-muted-foreground/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="thoughts"
          ref={(el) => {
            sectionsRef.current[2] = el
          }}
          className="min-h-screen py-20 opacity-0 sm:py-32"
        >
          <div className="space-y-12 sm:space-y-16">
            <h2 className="text-3xl font-light sm:text-4xl">Recent Thoughts</h2>

            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
              {portfolio.thoughts.map((post) => (
                <article
                  key={`${post.date}-${post.title}`}
                  className="group cursor-pointer rounded-lg border border-border p-6 transition-all duration-500 hover:border-muted-foreground/50 hover:shadow-lg sm:p-8"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-lg font-medium transition-colors duration-300 group-hover:text-muted-foreground sm:text-xl">
                      {post.title}
                    </h3>

                    <p className="leading-relaxed text-muted-foreground">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[3] = el
          }}
          className="py-20 opacity-0 sm:py-32"
        >
          <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl font-light sm:text-4xl">Let's Connect</h2>

              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  Always interested in new opportunities, collaborations, and conversations about technology and design.
                </p>

                <Link
                  href={`mailto:${portfolio.contactEmail}`}
                  className="group flex items-center gap-3 text-foreground transition-colors duration-300 hover:text-muted-foreground"
                >
                  <span className="text-base sm:text-lg">{portfolio.contactEmail}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">-&gt;</span>
                </Link>
              </div>

              <div className="space-y-6 sm:space-y-8">
                <div className="font-mono text-sm text-muted-foreground">ELSEWHERE</div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {portfolio.socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      className="group rounded-lg border border-border p-4 transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-sm"
                    >
                      <div className="space-y-2">
                        <div className="text-foreground transition-colors duration-300 group-hover:text-muted-foreground">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-4 rounded-lg border border-border p-5 sm:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm">
                  <span className="text-muted-foreground">Name</span>
                  <input
                    required
                    minLength={1}
                    maxLength={120}
                    value={contactForm.name}
                    onChange={(event) => setContactForm((form) => ({ ...form, name: event.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-muted-foreground"
                  />
                </label>

                <label className="space-y-2 text-sm">
                  <span className="text-muted-foreground">Email</span>
                  <input
                    required
                    type="email"
                    value={contactForm.email}
                    onChange={(event) => setContactForm((form) => ({ ...form, email: event.target.value }))}
                    className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-muted-foreground"
                  />
                </label>
              </div>

              <label className="block space-y-2 text-sm">
                <span className="text-muted-foreground">Subject</span>
                <input
                  maxLength={160}
                  value={contactForm.subject}
                  onChange={(event) => setContactForm((form) => ({ ...form, subject: event.target.value }))}
                  className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-muted-foreground"
                />
              </label>

              <label className="block space-y-2 text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  required
                  minLength={10}
                  maxLength={4000}
                  rows={6}
                  value={contactForm.message}
                  onChange={(event) => setContactForm((form) => ({ ...form, message: event.target.value }))}
                  className="w-full resize-none rounded-md border border-border bg-background px-3 py-2 text-foreground outline-none transition-colors focus:border-muted-foreground"
                />
              </label>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitState === "loading"}
                  className="rounded-md border border-foreground px-4 py-2 text-sm text-foreground transition-colors hover:bg-foreground hover:text-background disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitState === "loading" ? "Sending..." : "Send message"}
                </button>

                {submitMessage ? (
                  <p
                    className={`text-sm ${
                      submitState === "error" ? "text-destructive" : "text-muted-foreground"
                    }`}
                  >
                    {submitMessage}
                  </p>
                ) : null}
              </div>
            </form>
          </div>
        </section>

        <footer className="border-t border-border py-12 sm:py-16">
          <div className="flex flex-col items-start justify-between gap-6 sm:gap-8 lg:flex-row lg:items-center">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">(c) 2026 {portfolio.hero.name}. All rights reserved.</div>
              <div className="text-xs text-muted-foreground">Built with Next.js and FastAPI</div>
            </div>

            <button
              onClick={() => setIsDark((value) => !value)}
              className="group rounded-lg border border-border p-3 transition-all duration-300 hover:border-muted-foreground/50"
              aria-label="Toggle theme"
            >
              <span className="block h-4 w-4 rounded-full border border-muted-foreground transition-colors duration-300 group-hover:border-foreground" />
            </button>
          </div>
        </footer>
      </main>

      <div className="pointer-events-none fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </div>
  )
}
