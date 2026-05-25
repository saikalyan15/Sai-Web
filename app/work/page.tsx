import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work -- Saikalyan Akunuri",
  description:
    "Healing Soil case study: full website, custom business operations app (SoapLedger), SEO strategy, and conversion funnel for a bootstrapped solo-founder business.",
};

export default function WorkPage() {
  return (
    <article className="bg-background">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">

        {/* Header */}
        <div className="py-24 md:py-32 max-w-[720px]">
          <div className="space-y-3 mb-10">
            <Link
              href="/"
              className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5"
            >
              &larr; Back to home
            </Link>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans uppercase tracking-widest text-accent font-medium">Case study</span>
              <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground">
                Healing Soil
              </h1>
            </div>
            <p className="text-xl text-muted-foreground font-sans leading-relaxed">
              Healing Soil is a bootstrapped handmade soap business run by a solo founder. I came in as the technical and operations partner -- not a co-founder, but the person who built everything the business runs on so the founder could focus entirely on making the product.
            </p>
          </div>
        </div>

        {/* Stats strip */}
        <div className="border-t border-b border-border py-10 mb-16 grid grid-cols-3 gap-8 max-w-[720px]">
          <div>
            <p className="text-4xl font-display font-bold text-foreground">4,000+</p>
            <p className="text-sm text-muted-foreground font-sans mt-2">Impressions in 3 months, zero ad spend</p>
          </div>
          <div>
            <p className="text-4xl font-display font-bold text-foreground">16</p>
            <p className="text-sm text-muted-foreground font-sans mt-2">Database migrations across the product lifecycle</p>
          </div>
          <div>
            <p className="text-4xl font-display font-bold text-foreground">1</p>
            <p className="text-sm text-muted-foreground font-sans mt-2">Founder, now with full visibility into her business</p>
          </div>
        </div>

        {/* Two-column: what I built + product screenshot */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start mb-24 max-w-screen-xl">

          <div className="space-y-10 text-base text-muted-foreground font-sans leading-relaxed">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-display text-foreground">What I built</h2>
              <div className="space-y-6">
                <div className="border-l-2 border-accent pl-5 space-y-1">
                  <p className="font-medium text-foreground">Full customer-facing site (Next.js)</p>
                  <p>Product catalogue, shop, SEO blog, and WhatsApp-integrated order flow.</p>
                </div>
                <div className="border-l-2 border-accent pl-5 space-y-1">
                  <p className="font-medium text-foreground">Conversion strategy from scratch</p>
                  <p>Customer research, VOC analysis, bundle pricing, referral funnel.</p>
                </div>
                <div className="border-l-2 border-accent pl-5 space-y-1">
                  <p className="font-medium text-foreground">SoapLedger -- custom operations app</p>
                  <p>Order management, customer records, expense tracking, inventory, label printing, and a growth analytics module that pulls Google Search Console data alongside order history to surface AI-generated content and SEO actions.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 border-t border-border pt-10">
              <h2 className="text-2xl font-display text-foreground">The result</h2>
              <p>
                A solo creative founder who previously had no visibility into whether her business was profitable now has a dashboard that tells her exactly where she stands, which products are working, and what to do next.
              </p>
            </div>
          </div>

          {/* Dashboard screenshot */}
          <div className="mt-12 lg:mt-0 space-y-3">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-border shadow-sm">
              <Image
                src="/soapledger-dashboard.png"
                alt="SoapLedger dashboard -- business operations app for Healing Soil"
                fill
                className="object-cover object-top"
              />
            </div>
            <p className="text-xs text-muted-foreground font-sans">SoapLedger -- business operations dashboard built for Healing Soil</p>
          </div>
        </div>

        {/* CTA */}
        <div className="pb-24 border-t border-border pt-12 flex flex-col sm:flex-row gap-5 max-w-[720px]">
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200"
          >
            Get in touch
          </Link>
          <Link
            href="/services"
            className="inline-block px-8 py-3 border border-border text-foreground font-sans text-sm font-medium hover:border-accent hover:text-accent transition-colors duration-200"
          >
            See services
          </Link>
        </div>

      </div>
    </article>
  );
}
