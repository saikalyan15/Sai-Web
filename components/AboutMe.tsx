import Image from "next/image";
import Link from "next/link";

export function AboutMe() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-2xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
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
          className="inline-block bg-black text-white px-5 py-2 rounded hover:bg-gray-800 transition"
        >
          Read My Story →
        </Link>
      </div>
    </section>
  );
}
