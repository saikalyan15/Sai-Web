import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services -- Saikalyan Akunuri",
  description:
    "Three ways to work with a fractional Programme Manager and Agile Coach. Fractional retainer, Agile team onboarding, or a programme health check.",
};

export default function ServicesPage() {
  return (
    <article className="py-24 md:py-32 bg-background">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="space-y-16">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground">
              Services
            </h1>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-xl">
              Three fixed-scope engagements. Each one is designed to produce a specific result -- not a discovery phase that turns into a never-ending retainer.
            </p>
          </header>

          <div className="space-y-16 border-t border-border pt-12">
            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest text-accent font-medium">
                  01
                </span>
                <h2 className="text-2xl md:text-3xl font-display text-foreground">
                  Fractional Programme Manager / RTE
                </h2>
              </div>
              <div className="space-y-4 text-base text-muted-foreground font-sans leading-relaxed max-w-xl">
                <p>
                  For engineering organisations with multiple Scrum teams that have no programme layer. Delivery is fragmented. Teams are pulling in different directions. Leadership cannot get a straight answer on what is at risk.
                </p>
                <p>
                  I set up the PMO infrastructure and run it alongside your teams: Scrum of Scrums, PI Planning, dependency tracking, Jira dashboards, risk registers. The goal is to make the programme visible -- to you, to leadership, and to the teams themselves.
                </p>
                <p>
                  This is an ongoing fractional retainer. I am not a consultant who hands over a slide deck and leaves. I am in the ceremonies, talking to the teams, updating the dashboards. You get programme management without the full-time cost.
                </p>
              </div>
            </div>

            <div className="space-y-5 border-t border-border pt-12">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest text-accent font-medium">
                  02
                </span>
                <h2 className="text-2xl md:text-3xl font-display text-foreground">
                  Agile Team Onboarding (Kaizen)
                </h2>
              </div>
              <div className="space-y-4 text-base text-muted-foreground font-sans leading-relaxed max-w-xl">
                <p>
                  A 5-day Kaizen to get a single team sprint-ready, followed by 3 months of sustenance coaching. Based on the DBS (Danaher Business System) methodology -- the same approach used to standardise Agile across a 15+ team programme.
                </p>
                <p>
                  This is not a training course. I facilitate the Kaizen, stay through the first sprint, and come back over the following three months to verify the team is still running the process on their own. The DBS certification process requires evidence of sustained results -- not just a workshop delivered.
                </p>
                <p>
                  Suitable for teams that have been doing Agile in name only, or teams being stood up for the first time and need to get to productive cadence quickly.
                </p>
              </div>
            </div>

            <div className="space-y-5 border-t border-border pt-12">
              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest text-accent font-medium">
                  03
                </span>
                <h2 className="text-2xl md:text-3xl font-display text-foreground">
                  Programme Health Check
                </h2>
              </div>
              <div className="space-y-4 text-base text-muted-foreground font-sans leading-relaxed max-w-xl">
                <p>
                  A 2-3 day diagnostic to find what is broken and what to fix first.
                </p>
                <p>
                  I review your ceremonies, tooling, metrics, and team structures. I talk to the team leads and to whoever owns delivery at the leadership level. I look at where the friction is, where estimates are consistently wrong, where information is disappearing between teams.
                </p>
                <p>
                  The deliverable is a prioritised action plan you can act on immediately. Not a report that sits in a folder -- a ranked list of what to fix, why, and what good looks like when it is fixed.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-5">
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
            >
              Get in touch
            </Link>
            <Link
              href="/work"
              className="inline-block px-8 py-3 border border-border text-foreground font-sans text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
            >
              See a case study
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
