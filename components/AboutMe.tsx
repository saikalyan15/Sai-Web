import Link from "next/link";

export function AboutMe() {
  return (
    <section className="py-24 md:py-32 bg-background border-y border-divider">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              About
            </span>
            <h2 className="text-3xl md:text-5xl font-display leading-[1.2] text-foreground">
              Slow thinking in a fast world
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              I spent 30 years building and managing software teams across geographies. I have seen frameworks fail not because they were wrong but because they were written for a world that does not match how teams actually work.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              AI governance is heading down the same path. I write about the gap between what the policy documents assume and what actually happens when developers point AI at a production codebase.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
              I write from a farm in Goa, India, where slow living has taught me that the best thinking happens when you stop performing busyness.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-block text-accent font-mono text-sm uppercase tracking-widest nav-link mt-4"
          >
            Read my full story
          </Link>
        </div>
      </div>
    </section>
  );
}
