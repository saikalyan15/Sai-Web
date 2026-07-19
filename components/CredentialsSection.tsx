const credentials = [
  {
    label: "DBS Agile Coach",
    detail: "Earned at Hach (Danaher). Hands-on, results-verified. Not a classroom exam.",
  },
  {
    label: "Engineering organisation growth",
    detail: "Helped scale from 5 to 30+ through hiring across full-stack, mobile, and DevOps teams.",
  },
  {
    label: "Architecture & automation",
    detail: "Azure Service Fabric microservices, identity, IoT APIs, and CI/CD improvement.",
  },
  {
    label: "SAFe Agilist (SA)",
    detail: "Certification renewal in progress.",
  },
  {
    label: "Microsoft Certified Azure Architect",
    detail: "Historical certification — no longer current.",
  },
  {
    label: "TOGAF 8",
    detail: "Historical certification — no longer current. Enterprise architecture background.",
  },
  {
    label: "8 years at Hach (Danaher)",
    detail: "15+ Scrum teams across US, Germany, Switzerland, India",
  },
  {
    label: "5 years at Finastra",
    detail: "Financial services architecture",
  },
  {
    label: "7 years at Wipro",
    detail: "Cross-functional programmes",
  },
];

export function CredentialsSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-[720px] lg:max-w-screen-xl mx-auto px-6">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-display text-foreground">
            Background
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-sans leading-relaxed text-muted-foreground">
            Delivery experience and certifications that shaped how I work.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 max-w-[860px]">
          {credentials.map((cred) => (
            <div
              key={cred.label}
              className="flex flex-col space-y-1 border-l-2 border-accent pl-4"
            >
              <span className="font-sans font-medium text-foreground text-base">
                {cred.label}
              </span>
              {cred.detail && (
                <span className="font-sans text-sm text-muted-foreground">
                  {cred.detail}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
