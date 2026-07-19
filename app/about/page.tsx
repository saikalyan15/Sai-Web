import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Saikalyan Akunuri",
  description:
    "25 years building software and running engineering programmes. Fractional Programme Manager and Agile Coach, available for remote engagements.",
};

export default function AboutPage() {
  return (
    <article className="bg-background">
      {/* Editorial split: sticky left, scrolling right */}
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[380px_1fr] lg:gap-24 lg:items-start">

          {/* Left column -- sticky on desktop */}
          <div className="lg:sticky lg:top-24 py-24 md:py-32 flex flex-col gap-8">
            <div className="relative w-[280px] h-[340px] md:w-[320px] md:h-[390px] overflow-hidden border border-border">
              <Image
                src="/Me-2025.jpg"
                alt="Saikalyan Akunuri"
                fill
                className="object-cover object-center grayscale"
                priority
              />
            </div>
            <div className="space-y-1">
              <p className="font-display text-xl font-bold text-foreground">Saikalyan Akunuri</p>
              <p className="text-sm text-muted-foreground font-sans">Fractional Programme Manager</p>
              <p className="text-sm text-muted-foreground font-sans">Agile Coach</p>
              <p className="text-sm text-accent font-sans mt-2">Goa, India &mdash; Remote only</p>
            </div>
            <div className="space-y-3 border-t border-border pt-6">
              <div>
                <p className="text-2xl font-display font-bold text-foreground">25</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5">Years in software engineering</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5">Scrum teams, Hach / Danaher</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-foreground">3</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5">Enterprise certifications</p>
              </div>
            </div>
          </div>

          {/* Right column -- scrollable bio */}
          <div className="lg:py-32 pb-24 space-y-10 text-lg text-muted-foreground font-sans leading-relaxed border-t border-border lg:border-t-0 lg:border-l lg:border-border lg:pl-16 pt-0">

            <p className="text-xl text-foreground font-medium leading-snug">
              I spent 25 years building software and running engineering programmes before I learned that most delivery problems are not technical. They are coordination problems that nobody is paid to fix.
            </p>

            <p>
              At Hach (Danaher), I coordinated delivery across 15+ Scrum teams spread across the US, Germany, Switzerland, and India. No shared timezone. No natural alignment. I developed the programme operating infrastructure: Scrum of Scrums, PI Planning, Jira dashboards, dependency tracking, risk registers, and delivery metrics. At any given point I could tell leadership exactly where the programme stood: what was at risk, what was delayed, and what needed a decision. That level of visibility does not happen by itself.
            </p>

            <p>
              I also helped scale a multidisciplinary engineering group from 5 to 30+ through hiring across full-stack, mobile, and DevOps teams, while leading delivery through influence rather than formal reporting lines.
            </p>

            <p>
              Before that I spent five years at Finastra as a Senior Architect in financial services, and seven years at Wipro leading cross-functional programmes across retail, manufacturing, healthcare, and finance.
            </p>

            {/* Pull quote */}
            <blockquote className="border-l-4 border-accent pl-6 py-2">
              <p className="text-foreground font-display text-2xl font-bold leading-snug">
                &ldquo;It is not a classroom exam.&rdquo;
              </p>
              <p className="text-sm text-muted-foreground font-sans mt-3">
                I hold the DBS Agile Coach credential earned at Hach. To get it, a coach observed me facilitate actual Kaizens, sustained the results, and verified the teams were still running on their own three months later. It is not a classroom exam.
              </p>
            </blockquote>

            <p>
              I am now available for fractional and fixed-scope remote engagements. If your engineering organisation has multiple teams that are not coordinating well, or you are scaling Agile and the cracks are starting to show, that is the problem I solve.
            </p>

            <p className="text-sm text-muted-foreground">
              Based in Goa, India. Remote only. US and European time zones.
            </p>

            <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-5">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
              >
                Get in touch
              </Link>
              <Link
                href="/services"
                className="inline-block px-8 py-3 border border-border text-foreground font-sans text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
              >
                See how I work
              </Link>
            </div>
          </div>

        </div>
      </div>
    </article>
  );
}
