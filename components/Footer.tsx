import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-sm text-gray-700 py-6 text-center border-t mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <nav className="space-x-4">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/blog" className="hover:underline">
              Blog
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </div>
        <p className="text-muted-foreground text-sm">
          © 2025 Saikalyan Akunuri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
