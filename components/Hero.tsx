import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Helping you automate smarter with n8n
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              I design open-source automations that save time and reduce costs.
            </p>
          </div>
          <div className="space-x-4">
            <Button size="lg">
              Work with me
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
