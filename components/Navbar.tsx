"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="font-bold text-xl">
            Saikalyan Akunuri
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/"
                  ? "font-semibold text-black underline"
                  : "text-muted-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/about"
                  ? "font-semibold text-black underline"
                  : "text-muted-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/services"
                  ? "font-semibold text-black underline"
                  : "text-muted-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/blog"
                  ? "font-semibold text-black underline"
                  : "text-muted-foreground"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === "/contact"
                  ? "font-semibold text-black underline"
                  : "text-muted-foreground"
              }`}
            >
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
}
