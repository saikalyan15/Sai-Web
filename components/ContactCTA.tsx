import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-muted/50 py-8 text-center rounded-lg">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want to save hours with automation?
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-6">
            Let's discuss how automation can transform your workflow and boost
            productivity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition"
          >
            Let's Talk →
          </Link>
        </div>
      </div>
    </section>
  );
}
