import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <h3 className="font-display text-xl text-foreground font-medium">
              Saikalyan Akunuri
            </h3>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
              Fractional Programme Manager and Agile Coach. 25 years in software engineering. Remote only.
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-6">
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground font-sans">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/services" className="hover:text-accent transition-colors">Services</Link>
              <Link href="/work" className="hover:text-accent transition-colors">Work</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>

            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/in/saikalyanakunuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            &copy; {new Date().getFullYear()} Saikalyan Akunuri. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-sans">
            Based in Goa, India. Available US and European time zones.
          </p>
        </div>
      </div>
    </footer>
  );
}
