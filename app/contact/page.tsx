import { Mail } from "lucide-react";

const email = "sai@saikalyanakunuri.com";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-background py-24 md:py-32">
      <div className="mx-auto w-full max-w-[720px] px-6 lg:max-w-screen-xl">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-24">
          <div className="mb-16 space-y-6 lg:sticky lg:top-24 lg:mb-0">
            <h1 className="text-4xl font-display leading-tight text-foreground md:text-5xl">
              Get in touch
            </h1>
            <p className="text-lg font-sans leading-relaxed text-muted-foreground">
              Available for remote engagements in US and European time zones. Generally responsive within 24 hours.
            </p>
            <p className="text-sm font-sans text-muted-foreground">
              Based in Goa, India. Remote only.
            </p>
          </div>

          <div className="border-t border-border pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div className="max-w-xl space-y-6">
              <div className="flex h-11 w-11 items-center justify-center bg-accent/10">
                <Mail className="h-5 w-5 text-accent" aria-hidden="true" />
              </div>
              <div className="space-y-3">
                <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  Email directly
                </p>
                <a
                  href={`mailto:${email}`}
                  className="inline-block border-b border-accent/40 pb-1 text-2xl font-display text-foreground transition-colors duration-200 hover:border-accent hover:text-accent md:text-3xl"
                >
                  {email}
                </a>
              </div>
              <p className="text-base font-sans leading-relaxed text-muted-foreground">
                Tell me briefly about the delivery, team-coordination, or Agile challenge you are working through. Email is the best way to start the conversation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
