import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ServicesSection } from "@/components/ServicesSection";
import { ProofSection } from "@/components/ProofSection";
import { CredentialsSection } from "@/components/CredentialsSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <ProofSection />
        <CredentialsSection />
        <section className="py-24 md:py-32 bg-secondary border-t border-border">
          <div className="max-w-[720px] mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-5">
              Ready to talk?
            </h2>
            <p className="text-lg text-muted-foreground font-sans mb-10 max-w-md mx-auto">
              Available for remote engagements in US and European time zones.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
