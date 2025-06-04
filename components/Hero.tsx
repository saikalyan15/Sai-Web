import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Helping you automate smarter with n8n
            </h1>
            <p className="text-gray-700 text-base md:text-lg mx-auto max-w-[700px]">
              I design open-source automations that save time and reduce costs.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              size="lg"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition"
            >
              Work with me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
