import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact -- Saikalyan Akunuri",
  description:
    "Get in touch. Available for fractional and fixed-scope remote engagements in US and European time zones.",
};

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32 bg-background min-h-screen">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="space-y-12">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-lg">
              Available for remote engagements in US and European time zones. Generally responsive within 24 hours.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 border-t border-border">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                <span>Email</span>
              </div>
              <a
                href="mailto:sai@saikalyanakunuri.com"
                className="block text-xl font-display text-foreground hover:text-accent transition-colors duration-200"
              >
                sai@saikalyanakunuri.com
              </a>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </div>
              <a
                href="https://www.linkedin.com/in/saikalyanakunuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl font-display text-foreground hover:text-accent transition-colors duration-200"
              >
                linkedin.com/in/saikalyanakunuri
              </a>
            </div>
          </div>

          <div className="pt-10 border-t border-border space-y-3">
            <p className="text-muted-foreground font-sans text-base leading-relaxed">
              Based in Goa, India. Remote only. I work with engineering organisations in the US and across Europe.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
