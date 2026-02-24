import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

// Helper function to strip Markdown and truncate text
function getPlainTextExcerpt(markdownText: string, maxLength = 120): string {
  let plainText = markdownText
    .replace(/\!\[.*?\]\(.*?\)/g, "")
    .replace(/\[.*?\]\(.*?\)/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`.*?`/g, "")
    .replace(/^#{1,6}\s/m, "")
    .replace(/^[-*+]\s/m, "")
    .replace(/\n\n+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength) + "...";
  }

  return plainText;
}

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, excerpt, content } = matter(fileContents, { excerpt: true });

    const rawExcerpt =
      excerpt || content || data.description || "No excerpt available.";

    return {
      title: data.title,
      category: data.category || "automation",
      date: new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      slug: filename.replace(/\.md$/, ""),
      excerpt: getPlainTextExcerpt(rawExcerpt),
      featuredImage: data.featuredImage || null,
    };
  });

  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function BlogPosts() {
  const allPosts = getBlogPosts();
  // Filter for responsible-ai category only
  const posts = allPosts.filter(post => post.category === "responsible-ai").slice(0, 4);

  return (
    <section className="py-24 md:py-32 bg-background grain">
      <div className="max-w-[720px] mx-auto px-6 w-full">
        <div className="space-y-8 mb-16 text-center md:text-left">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              Recent Writing
            </span>
            <h2 className="text-3xl md:text-5xl font-display leading-[1.2] text-foreground">
              Honest writing about AI and the humans building it
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="space-y-4 border-l-0 hover:border-l-[1px] hover:border-accent pl-0 hover:pl-6 transition-all duration-300">
                  {post.featuredImage && (
                    <div className="relative aspect-video w-full mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 border border-divider">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {post.date}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-accent/20 text-accent/70">
                      {post.category.replace("-", " ")}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-serif leading-relaxed line-clamp-2 max-w-2xl">
                    {post.excerpt}
                  </p>
                  <div className="pt-2">
                    <span className="inline-block text-accent font-mono text-[10px] uppercase tracking-widest border-b border-accent/30 group-hover:border-accent pb-1 transition-all duration-300">
                      Read article
                    </span>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="py-20 border border-accent/20 rounded-sm flex flex-col items-center justify-center space-y-4 bg-card/10">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent/50">Essays</span>
              <p className="text-2xl font-display text-muted-foreground italic">First essay coming soon</p>
              <div className="h-px w-12 bg-accent/20"></div>
            </div>
          )}
        </div>

        <div className="mt-20 flex justify-center">
          <Link
            href="/blog"
            className="inline-block px-8 py-3 border border-accent text-accent font-mono text-xs uppercase tracking-widest hover:bg-accent hover:text-background transition-all duration-300"
          >
            View all writing
          </Link>
        </div>
      </div>
    </section>
  );
}
