import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <article className="py-24 md:py-32 bg-background grain">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="space-y-12">
          <header className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              The Long Story
            </span>
            <h1 className="text-4xl md:text-6xl font-display leading-tight text-foreground">
              Thirty years in the trenches.
            </h1>
          </header>

          <div className="relative aspect-video w-full overflow-hidden rounded-sm grayscale border border-divider">
            <Image
              src="/Sai.jpg"
              alt="Saikalyan Akunuri"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-8 text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            <p>
              I spent three decades building and managing software teams across geographies. I have seen the industry move from monoliths to microservices, from waterfall to agile, and now from manual coding to AI-assisted development.
            </p>
            <p>
              Through all these shifts, one thing remained constant: the gap between what management thinks is happening and what the engineers are actually doing.
            </p>
            <p>
              Frameworks and policies fail not because they are inherently wrong, but because they are often written for an idealized version of software engineering that doesn't exist in reality. AI governance is currently making the same mistake. 
            </p>
            <p>
              While boardrooms discuss high-level ethics and governance, developers are already pointing AI at production codebases. The real "Responsible AI" happens in the IDE, in the pull requests, and in the architectural decisions made at 2 AM.
            </p>
            <p>
              I now live on a farm in Goa, India. The slow pace of life here has given me the perspective to look back at 30 years of shipping software and see the patterns that repeat. I write about these patterns, and how we can build AI systems that are actually responsible to the people building them.
            </p>
          </div>

          <div className="pt-12 border-t border-divider">
            <h2 className="font-display text-2xl text-foreground mb-6">Let's talk.</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-accent text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300"
              >
                Contact me
              </Link>
              <Link
                href="/blog"
                className="inline-block px-8 py-3 text-muted-foreground font-mono text-xs uppercase tracking-widest hover:text-accent transition-all duration-300"
              >
                Read my writing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
