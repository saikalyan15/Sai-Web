import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import markdownToHtml from "@/lib/markdownToHtml";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;

  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDirectory, `${slug}.md`);

  let data: any = {};
  let contentHtml = "";
  let title = "";
  let date = "";
  let excerpt = "";
  let featuredImage = "";

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    data = frontmatter;

    if (data.draft === true) {
      throw new Error("This post is a draft.");
    }

    title = data.title || "Untitled";
    const dateString = data.date ? data.date.toString() : "";
    date = dateString
      ? new Date(dateString).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "No date";
    excerpt = data.description || data.excerpt || "";
    featuredImage = data.featuredImage || "";

    contentHtml = await markdownToHtml(content);
  } catch (error) {
    console.error(`Error reading or processing blog post ${slug}:`, error);
    return (
      <div className="py-24 text-center">
        <h1 className="text-2xl font-display">Post not found.</h1>
        <Link href="/blog" className="text-accent font-mono text-xs uppercase mt-4 inline-block">Back to writing</Link>
      </div>
    );
  }

  return (
    <article className="py-24 md:py-32 bg-background grain min-h-screen">
      <div className="max-w-[720px] mx-auto px-6">
        <header className="space-y-8 mb-16">
          <Link
            href="/blog"
            className="inline-block text-accent font-mono text-[10px] uppercase tracking-widest nav-link"
          >
            ← Back to writing
          </Link>
          
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {date}
            </span>
            <h1 className="text-4xl md:text-6xl font-display leading-tight text-foreground">
              {title}
            </h1>
          </div>

          {excerpt && (
            <p className="text-xl md:text-2xl text-muted-foreground font-serif leading-relaxed italic border-l-2 border-accent/30 pl-6">
              {excerpt}
            </p>
          )}
        </header>

        {featuredImage && (
          <div className="relative aspect-video w-full mb-16 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 border border-divider">
            <Image
              src={featuredImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="prose prose-invert prose-quoteless max-w-none 
          prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight
          prose-p:font-serif prose-p:text-lg prose-p:md:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground
          prose-a:text-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-foreground prose-strong:font-semibold
          prose-blockquote:border-accent prose-blockquote:bg-card/30 prose-blockquote:p-6 prose-blockquote:rounded-sm
          prose-img:rounded-sm prose-img:border prose-img:border-divider
          markdown-content-tables">
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </div>

        <footer className="mt-24 pt-12 border-t border-divider">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h3 className="font-display text-2xl text-foreground">Thanks for reading.</h3>
              <p className="text-muted-foreground font-serif">
                I write about the intersection of engineering and ethics. If you found this useful, consider sharing it or reaching out.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 border border-accent text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300"
              >
                Contact me
              </Link>
              <Link
                href="/blog"
                className="inline-block px-8 py-3 text-muted-foreground font-mono text-xs uppercase tracking-widest hover:text-accent transition-all duration-300"
              >
                All writing
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
}
