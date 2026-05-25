import Link from "next/link";

export function ProofSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary border-t border-border">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-24 items-start">

          {/* Left: stats */}
          <div className="mb-12 lg:mb-0 space-y-10">
            <p className="text-xs font-sans uppercase tracking-widest text-accent font-medium">
              Hach / Danaher
            </p>
            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-5 space-y-1">
                <p className="text-4xl font-display font-bold text-foreground">15+</p>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest">Scrum teams coordinated</p>
              </div>
              <div className="border-l-2 border-border pl-5 space-y-1">
                <p className="text-4xl font-display font-bold text-foreground">4</p>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest">Countries, one programme</p>
              </div>
              <div className="border-l-2 border-border pl-5 space-y-1">
                <p className="text-4xl font-display font-bold text-foreground">8 yrs</p>
                <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest">Running the programme</p>
              </div>
            </div>
          </div>

          {/* Right: narrative */}
          <div className="space-y-6 text-base text-muted-foreground font-sans leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-display text-foreground">
              What this looks like in practice
            </h2>
            <p className="text-lg text-foreground font-medium leading-snug">
              15+ Scrum teams. US, Germany, Switzerland, India. No shared timezone. No natural alignment. Leadership needed to know what was at risk at any given point.
            </p>
            <p>
              I built the PMO infrastructure from scratch: Scrum of Scrums, PI Planning, Jira dashboards, dependency registers, risk tracking. Not as a one-off setup, but as a running system the programme operated on for years.
            </p>
            <p>
              That level of visibility does not happen by itself. It requires someone whose job it is to own the space between the teams. That is what I do.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-5">
              <Link
                href="/about"
                className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5"
              >
                More about my background →
              </Link>
              <Link
                href="/work"
                className="inline-block text-muted-foreground font-sans text-sm font-medium border-b border-border hover:border-accent hover:text-accent transition-colors duration-200 pb-0.5"
              >
                See case study →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
