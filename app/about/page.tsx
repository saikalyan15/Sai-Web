import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          I'm Saikalyan Akunuri, an automation consultant focused on building
          practical, open-source workflows using n8n. I help founders and teams
          save time, reduce repetitive work, and create scalable systems with
          clarity. With decades of experience in technology, I'm now focused on
          clean, intentional tech that empowers people — not overwhelms them.
        </p>
        <Image
          src="/Sai.jpg"
          alt="Saikalyan Akunuri headshot"
          width={200}
          height={200}
          className="rounded-xl shadow-md mx-auto mb-6"
        />
        <Link
          href="/contact"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
        >
          Let's Work Together
        </Link>
      </div>
    </section>
  );
}
