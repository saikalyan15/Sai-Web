import Image from "next/image";
import Link from "next/link";

export function AboutMe() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          About Me
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          I'm an automation consultant specializing in n8n with a passion for
          creating efficient workflows that save businesses time and resources.
          With years of experience in workflow automation, I help companies
          streamline their processes and focus on what matters most.
        </p>
        <Image
          src="/Sai.jpg"
          alt="Saikalyan Akunuri headshot"
          width={200}
          height={200}
          className="rounded-xl shadow-md mx-auto mb-6"
        />
        <Link
          href="/about"
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
        >
          Read My Story →
        </Link>
      </div>
    </section>
  );
}
