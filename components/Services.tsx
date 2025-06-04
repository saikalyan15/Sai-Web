import { ServerCog, Workflow, LifeBuoy } from "lucide-react";

export function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              My Services
            </h2>
            <p className="text-gray-700 text-base md:text-lg max-w-[900px] mx-auto">
              Expert automation solutions to streamline your workflow
            </p>
          </div>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 py-8">
          <div className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <ServerCog className="w-7 h-7 text-gray-700 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  n8n Setup & Self-Hosting
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Custom installs, tunnels, and error-proof configurations
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Workflow className="w-7 h-7 text-gray-700 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Workflow Automation
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                  Build time-saving logic using Notion, Slack, APIs, Google
                  Sheets
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <LifeBuoy className="w-7 h-7 text-gray-700 mb-3" />
                <h3 className="text-xl font-bold text-gray-900">
                  Support & Maintenance
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
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
