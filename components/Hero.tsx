import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">
              Helping you automate smarter with n8n
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mx-auto max-w-[700px]">
              I design open-source automations that save time and reduce costs.
            </p>
          </div>
          <div className="space-x-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-md text-sm font-medium transition"
              >
                Work with me
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
