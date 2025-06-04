export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-6">About Me</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm an automation consultant specializing in n8n with a passion for
          creating efficient workflows that save businesses time and resources.
          With years of experience in workflow automation, I help companies
          streamline their processes and focus on what matters most.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed mt-4">
          My journey in automation began when I discovered the power of n8n to
          connect different tools and services. Since then, I've helped numerous
          businesses implement custom automation solutions that have
          significantly improved their productivity and reduced operational
          costs.
        </p>
      </article>
    </div>
  );
}
