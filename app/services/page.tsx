export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          Services Offered
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I provide comprehensive automation solutions using n8n to help
          businesses streamline their operations and boost productivity. My
          services are designed to save you time, reduce costs, and eliminate
          manual tasks.
        </p>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              n8n Setup & Self-Hosting
            </h2>
            <p className="text-muted-foreground">
              Custom installations, secure tunnels, and error-proof
              configurations to ensure your automation infrastructure runs
              smoothly and securely.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">Workflow Automation</h2>
            <p className="text-muted-foreground">
              Build time-saving logic using popular tools like Notion, Slack,
              APIs, and Google Sheets to automate your daily tasks and
              processes.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3">
              Support & Maintenance
            </h2>
            <p className="text-muted-foreground">
              Ongoing tweaks, updates, and reliability checks to keep your
              automation workflows running efficiently and adapt to your
              changing needs.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
