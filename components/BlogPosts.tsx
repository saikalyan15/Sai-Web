import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogPosts() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Recent Blog Posts
        </h2>
        <p className="text-gray-700 text-base md:text-lg max-w-[900px] mx-auto mb-10">
          Insights and tutorials on automation and n8n
        </p>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <div className="flex flex-col space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="Blog post thumbnail"
                className="aspect-video object-cover"
              />
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  How I Automated Instagram from Notion using n8n
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Learn how to connect Notion databases to Instagram for
                  seamless content scheduling and posting.
                </p>
                <Button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background">
            <div className="flex flex-col space-y-4">
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="Blog post thumbnail"
                className="aspect-video object-cover"
              />
              <div className="space-y-2 p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Reducing Manual Data Entry with Google Sheets + Webhooks
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Discover how to eliminate repetitive data entry tasks by
                  connecting Google Sheets with custom webhooks.
                </p>
                <Button className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm font-medium transition">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
