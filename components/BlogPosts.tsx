import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BlogPosts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Recent Blog Posts
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Insights and tutorials on automation and n8n
            </p>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] py-8">
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
                <h3 className="text-2xl font-bold">
                  How I Automated Instagram from Notion using n8n
                </h3>
                <p className="text-muted-foreground">
                  Learn how to connect Notion databases to Instagram for
                  seamless content scheduling and posting.
                </p>
                <Button variant="outline" size="sm">
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
                <h3 className="text-2xl font-bold">
                  Reducing Manual Data Entry with Google Sheets + Webhooks
                </h3>
                <p className="text-muted-foreground">
                  Discover how to eliminate repetitive data entry tasks by
                  connecting Google Sheets with custom webhooks.
                </p>
                <Button variant="outline" size="sm">
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
