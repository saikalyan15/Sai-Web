import Link from "next/link";
import { Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-1 text-center md:text-left">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Saikalyan Akunuri
          </h3>
          <p className="text-gray-600 text-sm">
            Helping businesses automate smarter with n8n and open-source
            solutions.
          </p>
        </div>

        <div className="col-span-1 md:col-span-1 text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
          <nav className="flex flex-row justify-center space-x-4">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="col-span-1 md:col-span-1 text-center md:text-right">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Connect</h3>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="mailto:sai@saikalyanakunuri.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/saikalyanakunuri/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Saikalyan Akunuri. All rights reserved.
      </div>
    </footer>
  );
}
