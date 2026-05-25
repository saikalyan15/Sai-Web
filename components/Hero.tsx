import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6 w-full py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-display leading-[1.1] text-foreground">
                Engineering programmes run. Teams aligned. Delivery visible.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-lg">
                Fractional Programme Manager and Agile Coach. 25 years in software engineering. Available for remote engagements.
              </p>
            </div>
            {/* Credibility strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6">
              <div>
                <p className="text-xl font-display font-bold text-foreground">25 yrs</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5">Software engineering</p>
              </div>
              <div>
                <p className="text-xl font-display font-bold text-foreground">15+ teams</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5">Hach / Danaher</p>
              </div>
              <div>
                <p className="text-xl font-display font-bold text-foreground">4 countries</p>
                <p className="text-xs text-muted-foreground font-sans uppercase tracking-widest mt-0.5">US, DE, CH, India</p>
              </div>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
              >
                Get in touch
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[280px] h-[340px] md:w-[340px] md:h-[420px] lg:w-[380px] lg:h-[460px]">
              <Image
                src="/Me-2025.jpg"
                alt="Saikalyan Akunuri"
                fill
                className="object-cover grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
