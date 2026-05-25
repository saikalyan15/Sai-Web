"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Linkedin, Send } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", company: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-background min-h-screen">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-24 items-start">

          {/* Left: context */}
          <div className="mb-16 lg:mb-0 space-y-10 lg:sticky lg:top-24">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground">
                Get in touch
              </h1>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Available for remote engagements in US and European time zones. Generally responsive within 24 hours.
              </p>
            </div>

            <div className="space-y-6 pt-4 border-t border-border">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" />
                  <span>Email directly</span>
                </div>
                <a
                  href="mailto:sai@saikalyanakunuri.com"
                  className="block text-base font-sans text-foreground hover:text-accent transition-colors duration-200"
                >
                  sai@saikalyanakunuri.com
                </a>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-muted-foreground">
                  <Linkedin className="h-3.5 w-3.5" />
                  <span>LinkedIn</span>
                </div>
                <a
                  href="https://www.linkedin.com/in/saikalyanakunuri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-base font-sans text-foreground hover:text-accent transition-colors duration-200"
                >
                  linkedin.com/in/saikalyanakunuri
                </a>
              </div>
            </div>

            <p className="text-sm text-muted-foreground font-sans">
              Based in Goa, India. Remote only.
            </p>
          </div>

          {/* Right: form */}
          <div className="border-t border-border pt-12 lg:border-t-0 lg:pt-0">
            {status === "sent" ? (
              <div className="space-y-5 py-12">
                <div className="w-10 h-10 bg-accent/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-2xl font-display text-foreground">Message sent</h2>
                <p className="text-muted-foreground font-sans">
                  Thanks for reaching out. I will get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-accent font-sans text-sm border-b border-accent/40 hover:border-accent transition-colors pb-0.5"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                    Company <span className="text-muted-foreground/50 normal-case tracking-normal">(optional)</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200"
                    placeholder="Your company"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-sans uppercase tracking-widest text-muted-foreground">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-border px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent transition-colors duration-200 resize-none"
                    placeholder="Tell me about what you are working on and what you need help with."
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm font-sans text-red-500">
                    Something went wrong. Please try emailing directly at sai@saikalyanakunuri.com.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-white font-sans text-sm font-medium tracking-wide hover:bg-accent/90 transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>Sending...</>
                  ) : (
                    <>Send message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
