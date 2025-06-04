export function Services() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              My Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Expert automation solutions to streamline your workflow
            </p>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 py-8">
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">n8n Setup & Self-Hosting</h3>
                <p className="text-muted-foreground">
                  Custom installs, tunnels, and error-proof configurations
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Workflow Automation</h3>
                <p className="text-muted-foreground">
                  Build time-saving logic using Notion, Slack, APIs, Google
                  Sheets
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Support & Maintenance</h3>
                <p className="text-muted-foreground">
                  Ongoing tweaks, updates, and reliability checks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
