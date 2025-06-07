import { ServerCog, Workflow, LifeBuoy } from "lucide-react";

export default function ServicesPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-background">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Services I Offer
        </h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Expert automation solutions tailored to your needs, freeing up your
          time and reducing manual work.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service Card 1 */}
        <div className="relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
          <ServerCog className="w-7 h-7 text-foreground mb-3" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            n8n Setup & Self-Hosting
          </h3>
          <p className="text-muted-foreground text-base md:text-lg">
            Custom installations, secure tunnels, and error-proof configurations
            for reliable self-hosted n8n instances.
          </p>
        </div>
        {/* Service Card 2 */}
        <div className="relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
          <Workflow className="w-7 h-7 text-foreground mb-3" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Workflow Automation
          </h3>
          <p className="text-muted-foreground text-base md:text-lg">
            Building efficient workflows integrating various services like
            Slack, Notion, APIs, and Google Sheets.
          </p>
        </div>
        {/* Service Card 3 */}
        <div className="relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
          <LifeBuoy className="w-7 h-7 text-foreground mb-3" />
          <h3 className="text-xl font-bold text-foreground mb-2">
            Support & Maintenance
          </h3>
          <p className="text-muted-foreground text-base md:text-lg">
            Ongoing support, debugging, updates, and performance checks to keep
            your automations running smoothly.
          </p>
        </div>
      </div>
    </section>
  );
}
