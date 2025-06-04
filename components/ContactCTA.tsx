import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Want to save hours with automation?
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how automation can transform your workflow and boost
              productivity.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button size="lg" className="w-full">
              Let's Talk
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
