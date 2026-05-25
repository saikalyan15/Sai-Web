import Link from "next/link";

export function ProofSection() {
  return (
    <section className="py-24 md:py-32 bg-secondary border-t border-border">
      <div className="max-w-[720px] mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            What this looks like in practice
          </h2>
        </div>
        <div className="space-y-6">
          <p className="text-lg text-foreground font-sans leading-relaxed font-medium">
            Solo founder. Bootstrapped soap business. No systems. No visibility into whether the business was profitable.
          </p>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            I built the website, the shop, the SEO strategy, and a full custom business operations app from scratch. Site reached 4,000+ impressions in 3 months with no ad spend. The founder now has a live dashboard showing exactly where she stands.
          </p>
          <div className="grid grid-cols-3 gap-6 pt-4 border-t border-border">
            <div>
              <p className="text-2xl font-display font-bold text-foreground">4,000+</p>
              <p className="text-sm text-muted-foreground font-sans mt-1">impressions in 3 months</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">16</p>
              <p className="text-sm text-muted-foreground font-sans mt-1">database migrations</p>
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-foreground">0</p>
              <p className="text-sm text-muted-foreground font-sans mt-1">ad spend</p>
            </div>
          </div>
          <div className="pt-4">
            <Link
              href="/work"
              className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5"
            >
              See the full case study →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
