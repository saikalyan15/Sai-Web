import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full border-t py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Saikalyan Akunuri. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com"
            className="text-muted-foreground hover:text-foreground"
          >
            <Github className="h-5 w-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            className="text-muted-foreground hover:text-foreground"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
