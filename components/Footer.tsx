import Link from "next/link";
import { Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background py-20 border-t border-divider grain">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="font-display text-2xl text-foreground font-medium">
              Saikalyan Akunuri
            </h3>
            <p className="text-muted-foreground font-serif leading-relaxed max-w-sm">
              Writing honestly about Responsible AI from 30 years in the engineering trenches.
            </p>
          </div>

          <div className="flex flex-col md:items-end space-y-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
              <Link href="/about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/blog" className="hover:text-accent transition-colors">Writing</Link>
              <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/saikalyanakunuri/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Saikalyan Akunuri. All rights reserved.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Built for the long term
          </p>
        </div>
      </div>
    </footer>
  );
}
