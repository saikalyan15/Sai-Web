import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Helper function to strip Markdown and truncate text
function getPlainTextExcerpt(markdownText: string, maxLength = 160): string {
  // Remove common markdown: links, images, bold, italics, headers, lists, etc.
  let plainText = markdownText
    .replace(/\!\[.*?\]\(.*?\)/g, "") // Remove images
    .replace(/\[.*?\]\(.*?\)/g, "") // Remove links
    .replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold
    .replace(/\*(.*?)\*/g, "$1") // Remove italics
    .replace(/`.*?`/g, "") // Remove inline code
    .replace(/^#{1,6}\s/m, "") // Remove headers
    .replace(/^[-*+]\s/m, "") // Remove list markers
    .replace(/\n\n+/g, " ") // Replace multiple newlines with space
    .replace(/\s+/g, " ") // Replace multiple spaces with single space
    .trim();

  // Truncate text
  if (plainText.length > maxLength) {
    plainText = plainText.substring(0, maxLength) + "...";
  }

  return plainText;
}

// Function to get blog posts
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, excerpt, content } = matter(fileContents, { excerpt: true });

    // Use excerpt from frontmatter, or generate from content if not available
    const rawExcerpt =
      excerpt || content || data.description || "No excerpt available.";

    return {
      title: data.title,
      date: new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }), // Format date
      slug: filename.replace(/\.md$/, ""),
      excerpt: getPlainTextExcerpt(rawExcerpt), // Process excerpt with helper
      featuredImage: data.featuredImage || null, // Include featured image
    };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function BlogPosts() {
  const posts = getBlogPosts();

  // Limit to a certain number of recent posts, e.g., 4
  const recentPosts = posts.slice(0, 4);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          Recent Blog Posts
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-[900px] mx-auto mb-10">
          Insights and tutorials on automation and n8n
        </p>
        {/* Center the grid container with consistent spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center max-w-6xl mx-auto">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block w-full max-w-[320px] overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-lg hover:scale-[1.02] cursor-pointer flex flex-col h-full"
            >
              {post.featuredImage && (
                <div className="relative w-full h-48 bg-muted">
                  <Image
                    src={post.featuredImage}
                    alt={`Featured image for ${post.title}`}
                    fill
                    className="object-contain object-center"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col space-y-3 flex-grow">
                <h3 className="text-xl font-bold text-foreground">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
                <p className="text-muted-foreground text-base flex-grow">
                  {post.excerpt}
                </p>
                <div className="text-primary text-sm font-medium inline-flex items-center self-end mt-auto">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
