import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Fractional Programme Manager / RTE",
    tag: "Ongoing retainer",
    body: "You have multiple Scrum teams but nobody owns what happens between them. I set up and run the coordination layer: Scrum of Scrums, PI Planning, dependency tracking, dashboards that reflect reality.",
  },
  {
    number: "02",
    title: "Agile Team Onboarding (Kaizen)",
    tag: "3-5 day Kaizen + 3 months",
    body: "A 3-5 day Kaizen to get a team sprint-ready by Day 5, followed by 3 months of sustenance coaching. Used at Hach. I stay until it sticks.",
  },
  {
    number: "03",
    title: "Programme Health Check",
    tag: "2-3 day diagnostic",
    body: "Something is wrong but you are not sure where to look. Two to three days of review, ending with a prioritised action plan you can act on immediately.",
    recommended: true,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Three ways to work together
          </h2>
          <Link
            href="/services"
            className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5 shrink-0"
          >
            Full details →
          </Link>
        </div>

        <div className="divide-y divide-border border-t border-border">
          {services.map((s) => (
            <div key={s.number} className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 items-start group">

              {/* Number */}
              <span className="text-3xl font-display font-bold text-foreground/10 leading-none select-none w-10 hidden md:block pt-0.5">
                {s.number}
              </span>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-sans font-medium uppercase tracking-widest px-3 py-1 bg-accent/10 text-accent">
                    {s.tag}
                  </span>
                  {s.recommended && (
                    <span className="text-xs font-sans font-medium uppercase tracking-widest px-3 py-1 bg-accent text-white">
                      Start here
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-display text-foreground leading-snug">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed max-w-xl">
                  {s.body}
                </p>
              </div>

              {/* Arrow */}
              <Link
                href="/services"
                className="text-muted-foreground hover:text-accent transition-colors duration-200 pt-1 hidden md:block"
                aria-label={`Learn more about ${s.title}`}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
