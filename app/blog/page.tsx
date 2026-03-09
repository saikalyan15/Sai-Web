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

export const revalidate = 3600; // revalidate every hour

function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory).filter(file => file.endsWith(".md"));

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const rawExcerpt =
      data.excerpt || data.description || content || "No excerpt available.";

    const postDate = data.date ? new Date(data.date) : null;
    const isValidDate = postDate && !isNaN(postDate.getTime());

    return {
      title: data.title,
      category: data.category || "automation",
      date: data.date, // Keep raw date for comparison
      displayDate: isValidDate ? postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }) : "Unknown Date",
      slug: filename.replace(/\.md$/, ""),
      excerpt: getPlainTextExcerpt(rawExcerpt),
      featuredImage: data.featuredImage || null,
      draft: data.draft === true,
      isValidDate
    };
  });

  // Sort and filter for live posts
  // Use Asia/Kolkata timezone for "today" to ensure posts go live at 00:00 IST
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const isDev = process.env.NODE_ENV === "development";

  return posts
    .filter((post) => {
      if (isDev) return true; // Show everything in dev
      if (!post.isValidDate) return false;
      // Ensure we compare YYYY-MM-DD strings in UTC to avoid timezone shifts
      const postDateStr = new Date(post.date).toISOString().split("T")[0];
      return !post.draft && postDateStr <= today;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pageSize = 6;
  const currentPage = parseInt(page || "1");
  const allPosts = getBlogPosts().filter(post => post.category === "responsible-ai");
  
  const totalPages = Math.ceil(allPosts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const posts = allPosts.slice(startIndex, startIndex + pageSize);

  return (
    <section className="py-24 md:py-32 bg-background grain min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <header className="space-y-8 mb-20 text-center md:text-left max-w-[720px]">
          <div className="space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-accent">
              The Archive
            </span>
            <h1 className="text-4xl md:text-6xl font-display leading-tight text-foreground">
              Writing
            </h1>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground font-serif leading-relaxed">
            Thoughts on Responsible AI, software engineering history, and the gap between policy and practice.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {post.featuredImage && (
                    <div className="relative aspect-[16/10] w-full mb-6 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700 border border-divider">
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
                      {post.displayDate}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 border border-accent/20 text-accent/70">
                      {post.category.replace("-", " ")}
                    </span>
                  </div>
                  <h2 className="text-2xl font-display text-foreground group-hover:text-accent transition-colors duration-300 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-base text-muted-foreground font-serif leading-relaxed line-clamp-3">
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
            <div className="col-span-full py-20 border border-accent/20 rounded-sm flex flex-col items-center justify-center space-y-4 bg-card/10">
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-accent/50">Essays</span>
              <p className="text-2xl font-display text-muted-foreground italic">First essay coming soon</p>
              <div className="h-px w-12 bg-accent/20"></div>
            </div>
          )}
        </div>
        
        {totalPages > 1 && (
          <div className="mt-24 flex items-center justify-center gap-8 border-t border-divider pt-12">
            <Link
              href={`/blog?page=${Math.max(1, currentPage - 1)}`}
              className={`font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                currentPage === 1 
                  ? "text-muted-foreground/30 pointer-events-none" 
                  : "text-accent hover:text-foreground"
              }`}
            >
              ← Previous
            </Link>
            
            <div className="flex items-center gap-4">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  className={`font-mono text-xs w-8 h-8 flex items-center justify-center rounded-sm transition-all duration-300 ${
                    currentPage === pageNum
                      ? "bg-accent text-background"
                      : "text-muted-foreground hover:text-accent border border-divider hover:border-accent/30"
                  }`}
                >
                  {pageNum}
                </Link>
              ))}
            </div>

            <Link
              href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
              className={`font-mono text-xs uppercase tracking-widest transition-all duration-300 ${
                currentPage === totalPages 
                  ? "text-muted-foreground/30 pointer-events-none" 
                  : "text-accent hover:text-foreground"
              }`}
            >
              Next →
            </Link>
          </div>
        )}
        
        <div className="pt-24 border-t border-divider mt-24">
          <Link
            href="/"
            className="inline-block text-accent font-mono text-xs uppercase tracking-widest nav-link"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
