import Image from "next/image";
import Link from "next/link";
import { Lightbulb, Cog, Github, Feather } from "lucide-react";
import { Badge } from "@/components/ui/badge"; // Assuming Badge component path
import { Button } from "@/components/ui/button"; // Assuming Button component path

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-gray-50">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Sai.jpg"
            alt="Saikalyan Akunuri headshot"
            width={250} // Slightly increased size for two-column layout
            height={250}
            className="rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-xl object-cover mb-6 md:mb-0"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            I'm Saikalyan Akunuri, an automation consultant focused on building
            practical, open-source workflows using n8n. I help founders and
            teams save time, reduce repetitive work, and create scalable systems
            with clarity. With decades of experience in technology, I'm now
            focused on clean, intentional tech that empowers people — not
            overwhelms them.
          </p>

          {/* Personal Quote */}
          <p className="italic text-muted-foreground font-serif mb-6">
            &ldquo;Automation done right empowers people to focus on what truly
            matters.&rdquo;
          </p>

          {/* What I Value Section with Badges */}
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold">What I value</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-800">
                <Lightbulb className="w-4 h-4 mr-1" /> Clarity
              </Badge>
              <Badge className="bg-green-100 text-green-800">
                <Cog className="w-4 h-4 mr-1" /> Intentional Tech
              </Badge>
              <Badge className="bg-purple-100 text-purple-800">
                <Github className="w-4 h-4 mr-1" /> Open Source
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800">
                <Feather className="w-4 h-4 mr-1" /> Simplicity
              </Badge>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <Link href="/contact">
              <Button size="lg" className="w-full sm:w-auto">
                Let's Work Together
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
