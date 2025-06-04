import Link from "next/link";

export function Footer() {
  return (
    <footer className="text-sm text-gray-700 py-6 text-center border-t mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-6">
          <nav className="space-x-4">
            <Link href="/" className="hover:text-gray-900 hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-900 hover:underline">
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-gray-900 hover:underline"
            >
              Services
            </Link>
            <Link href="/blog" className="hover:text-gray-900 hover:underline">
              Blog
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-900 hover:underline"
            >
              Contact
            </Link>
          </nav>
        </div>
        <p className="text-gray-500">
          © 2025 Saikalyan Akunuri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
