import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-sm text-gray-500 py-6 text-center border-t mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-4">
          <nav className="space-x-4">
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-700">
              About
            </Link>
            <Link href="/services" className="hover:text-gray-700">
              Services
            </Link>
            <Link href="/blog" className="hover:text-gray-700">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </nav>
        </div>
        <p>© 2025 Saikalyan Akunuri. All rights reserved.</p>
      </div>
    </footer>
  );
}
