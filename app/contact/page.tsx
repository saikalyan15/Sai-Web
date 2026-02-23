import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="py-24 md:py-32 bg-background grain min-h-screen">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="space-y-12">
          <header className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Let's Connect
            </span>
            <h1 className="text-4xl md:text-6xl font-display leading-tight text-foreground">
              Drop me a line.
            </h1>
          </header>

          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            If you want to talk about Responsible AI, software engineering at scale, or anything else I've written about, feel free to reach out. I'm always up for a conversation that goes beyond the buzzwords.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12 border-t border-divider">
            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Email</h3>
              <a
                href="mailto:sai@saikalyanakunuri.com"
                className="block text-2xl font-display text-foreground hover:text-accent transition-colors duration-300"
              >
                sai@saikalyanakunuri.com
              </a>
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/saikalyanakunuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl font-display text-foreground hover:text-accent transition-colors duration-300"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>

          <div className="pt-24 border-t border-divider flex flex-col gap-6 items-center md:items-start text-center md:text-left">
            <h3 className="font-display text-3xl text-foreground">A conversation is better than a pitch.</h3>
            <p className="text-muted-foreground font-serif">
              I am currently writing and researching from Goa, India. I am generally responsive within 24-48 hours.
            </p>
          </div>
          
          <div className="pt-12">
            <Link
              href="/"
              className="inline-block text-accent font-mono text-xs uppercase tracking-widest nav-link"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
