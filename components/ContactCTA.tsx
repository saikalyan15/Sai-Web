import Link from "next/link";

export function ContactCTA() {
  return (
    <section className="bg-gray-50 py-16 text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Want to save hours with automation?
        </h2>
        <p className="text-gray-600 mb-6">
          Let's discuss how automation can transform your workflow and boost
          productivity.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition"
        >
          Let's Talk →
        </Link>
      </div>
    </section>
  );
}
