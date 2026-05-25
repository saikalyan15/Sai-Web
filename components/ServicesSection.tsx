import Link from "next/link";

const services = [
  {
    title: "Fractional Programme Manager / RTE",
    body: "You have multiple Scrum teams but no programme layer. Delivery is fragmented. Leadership cannot see what is at risk. I set up the infrastructure and run it with you.",
  },
  {
    title: "Agile Team Onboarding",
    body: "A 5-day Kaizen to get a team sprint-ready, followed by 3 months of sustenance coaching. Based on DBS methodology from Danaher. Not a training course -- I stay until it sticks.",
  },
  {
    title: "Programme Health Check",
    body: "A 2-3 day diagnostic to find what is broken and what to fix first. Deliverable: a prioritised action plan you can act on immediately.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Three ways to work together
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="space-y-4 p-8 bg-card border border-border hover:shadow-sm transition-shadow duration-200"
            >
              <h3 className="text-2xl font-display font-bold text-foreground leading-snug">
                {service.title}
              </h3>
              <div className="w-8 h-[2px] bg-accent" />
              <p className="text-base text-muted-foreground font-sans leading-relaxed">
                {service.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5"
          >
            Full details on each engagement →
          </Link>
        </div>
      </div>
    </section>
  );
}
