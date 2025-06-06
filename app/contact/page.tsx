import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import Script from "next/script";

export default function ContactPage() {
  const calendlyUrl = "https://calendly.com/saikalyan-akunuri/30min";

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Let's Connect
      </h1>
      <p className="text-muted-foreground text-base md:text-lg mb-8">
        If you're looking to automate parts of your business with n8n or just
        want to chat about smart workflows, feel free to reach out.
      </p>

      <div className="flex flex-col items-center space-y-4 mb-12">
        <a
          href="mailto:sai@saikalyanakunuri.com"
          className="inline-flex items-center text-primary hover:underline text-lg"
        >
          <Mail className="mr-2 h-5 w-5" />
          sai@saikalyanakunuri.com
        </a>

        <a
          href="https://www.linkedin.com/in/saikalyanakunuri/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline text-lg"
        >
          <Linkedin className="mr-2 h-5 w-5" />
          LinkedIn Profile
        </a>
      </div>

      <div
        className="calendly-inline-widget"
        data-url={calendlyUrl}
        style={{ minWidth: "320px", height: "630px" }}
      ></div>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />

      <div className="mt-12">
        <Link href="/" className="text-muted-foreground hover:underline">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
