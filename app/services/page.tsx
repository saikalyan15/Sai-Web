import Link from "next/link";

export default function ServicesPage() {
  return (
    <article className="bg-background">

      {/* Header */}
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6 py-16 md:py-24">
        <div className="max-w-[600px] space-y-4">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground">
            Three ways to work together
          </h1>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            Fixed-scope engagements. Each produces a specific result. If you are not sure where to start, begin with the Health Check.
          </p>
        </div>
      </div>

      {/* Bento grid */}
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">

          {/* Left column: two smaller cards stacked */}
          <div className="lg:col-span-5 flex flex-col gap-4">

            {/* Card 01: Fractional PM */}
            <div className="flex-1 border border-border bg-background p-8 flex flex-col justify-between gap-8 hover:shadow-md transition-shadow duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans font-medium uppercase tracking-widest px-3 py-1 bg-accent/10 text-accent">
                    Ongoing retainer
                  </span>
                  <span className="text-5xl font-display font-bold text-foreground/10 leading-none select-none">01</span>
                </div>
                <div className="space-y-1">
                  <div className="text-[3rem] font-display font-bold text-foreground leading-none">15+</div>
                  <div className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Scrum teams coordinated at Hach / Danaher</div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-display text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
                    Fractional Programme Manager / RTE
                  </h2>
                  <p className="text-sm font-sans text-foreground border-l-2 border-accent pl-4 leading-relaxed">
                    You have multiple Scrum teams. Each runs its own sprints. But nobody owns what happens between them.
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    Dependencies get missed. Priorities drift. Leadership gets a different answer from every team lead. I step in as that coordination layer: Scrum of Scrums, PI Planning, dependency tracking, dashboards that reflect reality.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {["Scrum of Scrums", "PI Planning", "Dependency tracking", "Jira dashboards", "Risk registers"].map(item => (
                    <span key={item} className="text-xs font-sans px-2.5 py-1 border border-border text-muted-foreground bg-secondary">{item}</span>
                  ))}
                </div>
                <Link href="/contact" className="inline-block w-full text-center px-6 py-2.5 border border-accent text-accent font-sans text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-colors duration-200">
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Card 02: Kaizen */}
            <div className="flex-1 border border-border bg-secondary p-8 flex flex-col justify-between gap-8 hover:shadow-md transition-shadow duration-300 group">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-sans font-medium uppercase tracking-widest px-3 py-1 bg-foreground/5 text-foreground">
                    3-5 day Kaizen + 3 months
                  </span>
                  <span className="text-5xl font-display font-bold text-foreground/10 leading-none select-none">02</span>
                </div>
                <div className="space-y-1">
                  <div className="text-[3rem] font-display font-bold text-foreground leading-none">3 mo</div>
                  <div className="text-xs font-sans uppercase tracking-widest text-muted-foreground">Sustained results verified, not just a workshop delivered</div>
                </div>
                <div className="space-y-3">
                  <h2 className="text-xl font-display text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
                    Agile Team Onboarding (Kaizen)
                  </h2>
                  <p className="text-sm font-sans text-foreground border-l-2 border-accent pl-4 leading-relaxed">
                    A team doing standups without knowing why is not an Agile team. It is a team with overhead and no delivery rhythm.
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    A 3-5 day Kaizen to get the team sprint-ready by Day 5, followed by 3 months of sustenance coaching. I facilitate the Kaizen, establish the delivery rhythm with the team, then return over three months to verify it is still working without me. The certification I hold required demonstrated results, not a classroom exam.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                  {["3-5 day Kaizen", "Sprint-ready by Day 5", "3-month coaching", "Hach-proven methodology", "Results verification"].map(item => (
                    <span key={item} className="text-xs font-sans px-2.5 py-1 border border-border text-muted-foreground bg-background">{item}</span>
                  ))}
                </div>
                <Link href="/contact" className="inline-block w-full text-center px-6 py-2.5 border border-accent text-accent font-sans text-sm font-medium tracking-wide hover:bg-accent hover:text-white transition-colors duration-200">
                  Get in touch
                </Link>
              </div>
            </div>

          </div>

          {/* Right column: featured Health Check */}
          <div className="lg:col-span-7">
            <div className="h-full border border-accent/40 bg-background p-8 md:p-10 flex flex-col justify-between gap-10 hover:shadow-md transition-shadow duration-300 group relative overflow-hidden">

              {/* "Start here" ribbon */}
              <div className="absolute top-0 right-0">
                <div className="bg-accent text-white text-xs font-sans font-medium uppercase tracking-widest px-4 py-2">
                  Start here
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-end justify-between pt-2">
                  <span className="text-xs font-sans font-medium uppercase tracking-widest px-3 py-1 bg-accent/10 text-accent">
                    2-3 day diagnostic
                  </span>
                  <span className="text-6xl font-display font-bold text-foreground/10 leading-none select-none">03</span>
                </div>

                {/* Large stat */}
                <div className="space-y-2">
                  <div className="text-[5rem] md:text-[7rem] font-display font-bold text-foreground leading-none">2-3</div>
                  <div className="text-sm font-sans uppercase tracking-widest text-muted-foreground">Days to a prioritised action plan</div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-display text-foreground leading-snug group-hover:text-accent transition-colors duration-200">
                    Programme Health Check
                  </h2>
                  <p className="text-base font-sans text-foreground border-l-2 border-accent pl-5 leading-relaxed">
                    Estimates are always off. The same issues keep resurfacing. Leadership gets surprised by problems the teams knew about for weeks.
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    Two to three days reviewing your ceremonies, tooling, team structures, and how information moves. I talk to the team leads and to whoever owns delivery at the leadership level. You leave with a ranked fix list: what to address first, why it matters, and what good looks like when it is done.
                  </p>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    This is the right starting point if you know something is wrong but are not sure where to look. It creates the evidence needed to decide whether a PM retainer, Kaizen, or smaller targeted intervention is the right next step.
                  </p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="flex flex-wrap gap-1.5 pt-5 border-t border-border">
                  {["Ceremony review", "Tooling audit", "Team structure assessment", "Leadership interviews", "Prioritised action plan"].map(item => (
                    <span key={item} className="text-xs font-sans px-2.5 py-1 border border-border text-muted-foreground bg-secondary">{item}</span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
                >
                  Get in touch
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* CTA strip */}
      <div className="border-t border-border bg-secondary">
        <div className="max-w-[720px] mx-auto px-6 py-20 text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-display text-foreground">
            Not sure which engagement fits?
          </h2>
          <p className="text-muted-foreground font-sans">
            Start with the Health Check. It will tell you exactly what you need.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
          >
            Get in touch
          </Link>
        </div>
      </div>

    </article>
  );
}
