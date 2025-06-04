import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="prose max-w-xl mx-auto mt-12 text-center px-4">
      <h1>Let's Connect</h1>
      <p>
        If you're looking to automate parts of your business with n8n or just
        want to chat about smart workflows, feel free to reach out.
      </p>
      <p>
        📧{" "}
        <a
          href="mailto:saikalyan.akunuri@gmail.com"
          className="text-blue-600 underline"
        >
          saikalyan.akunuri@gmail.com
        </a>
      </p>
      <div className="mt-8">
        <Link href="/" className="text-gray-600 underline">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
