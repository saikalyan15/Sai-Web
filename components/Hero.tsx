import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] md:min-h-screen flex items-center overflow-hidden grain">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6 w-full py-20 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Content side */}
          <div className="flex flex-col space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-accent animate-fade-in-up opacity-0">
                Saikalyan Akunuri
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-display leading-[1.1] animate-fade-in-up delay-150 opacity-0">
                Responsible AI starts in the IDE, not the boardroom.
              </h1>
              <div className="h-[2px] w-full max-w-[120px] bg-accent animate-fade-in-up delay-300 opacity-0"></div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed max-w-lg animate-fade-in-up delay-300 opacity-0">
              30 years shipping software taught me how frameworks fail at the team level. Now I am watching AI governance make the same mistakes.
            </p>

            <div className="space-y-6 animate-fade-in-up delay-450 opacity-0">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">
                Writing from the engineering trenches - Goa, India
              </p>
              <Link
                href="/blog"
                className="inline-block px-8 py-3 border border-accent text-accent font-mono text-sm uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300"
              >
                Read my writing
              </Link>
            </div>
          </div>

          {/* Photo side */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-[240px] h-[240px] md:w-[280px] md:h-[280px] animate-fade-in-up delay-600 opacity-0">
              <div className="absolute inset-[-4px] rounded-full border border-accent opacity-50"></div>
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-accent">
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
      </div>
    </section>
  );
}
