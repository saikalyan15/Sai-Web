import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Saikalyan Akunuri
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Helping you automate smarter with n8n
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  I design open-source automations that save time and reduce costs.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg">
                  Work with me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Services</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expert automation solutions to streamline your workflow
                </p>
              </div>
            </div>
            <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 py-8">
              <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">n8n Setup & Self-Hosting</h3>
                    <p className="text-muted-foreground">Custom installs, tunnels, and error-proof configurations</p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Workflow Automation</h3>
                    <p className="text-muted-foreground">
                      Build time-saving logic using Notion, Slack, APIs, Google Sheets
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background p-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Support & Maintenance</h3>
                    <p className="text-muted-foreground">Ongoing tweaks, updates, and reliability checks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Blog Posts Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recent Blog Posts</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Insights and tutorials on automation and n8n
                </p>
              </div>
            </div>
            <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] py-8">
              <div className="relative overflow-hidden rounded-lg border bg-background">
                <div className="flex flex-col space-y-4">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    width={600}
                    height={300}
                    alt="Blog post thumbnail"
                    className="aspect-video object-cover"
                  />
                  <div className="space-y-2 p-6">
                    <h3 className="text-2xl font-bold">How I Automated Instagram from Notion using n8n</h3>
                    <p className="text-muted-foreground">
                      Learn how to connect Notion databases to Instagram for seamless content scheduling and posting.
                    </p>
                    <Button variant="outline" size="sm">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-lg border bg-background">
                <div className="flex flex-col space-y-4">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    width={600}
                    height={300}
                    alt="Blog post thumbnail"
                    className="aspect-video object-cover"
                  />
                  <div className="space-y-2 p-6">
                    <h3 className="text-2xl font-bold">Reducing Manual Data Entry with Google Sheets + Webhooks</h3>
                    <p className="text-muted-foreground">
                      Discover how to eliminate repetitive data entry tasks by connecting Google Sheets with custom
                      webhooks.
                    </p>
                    <Button variant="outline" size="sm">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Teaser Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <Image
                src="/placeholder.svg?height=400&width=400"
                width={400}
                height={400}
                alt="Saikalyan Akunuri"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm an automation consultant specializing in n8n with a passion for creating efficient workflows
                    that save businesses time and resources. With years of experience in workflow automation, I help
                    companies streamline their processes and focus on what matters most.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button variant="outline">
                    Read My Story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Want to save hours with automation?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's discuss how automation can transform your workflow and boost productivity.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button size="lg" className="w-full">
                  Let's Talk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Saikalyan Akunuri. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:contact@example.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
