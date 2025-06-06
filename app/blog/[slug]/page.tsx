// app/blog/[slug]/page.tsx

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
  // Await params before accessing properties, as suggested by the error
  const { slug } = await params; // Await params

  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDirectory, `${slug}.md`); // Use awaited slug

  let data: any = {};
  let contentHtml = "";
  let title = "";
  let date = "";
  let featuredImage = null;

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);
    data = frontmatter;
    title = data.title || "Untitled";
    // Ensure data.date is treated as a string before creating a Date object
    const dateString = data.date ? data.date.toString() : "";
    date = dateString
      ? new Date(dateString).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "No date";
    featuredImage = data.featuredImage || null;

    contentHtml = await markdownToHtml(content);
  } catch (error) {
    console.error(`Error reading or processing blog post ${slug}:`, error); // Use awaited slug in error message
    return <div>Error loading blog post.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Back to blog link */}
      <Link
        href="/blog"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <div className="text-sm text-gray-500 mb-6">{date}</div>

      {/* Featured Image */}
      {featuredImage && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 mb-6 rounded-lg overflow-hidden">
          <Image
            src={featuredImage}
            alt={`Featured image for ${title}`}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
          />
        </div>
      )}

      {/* Blog Content */}
      <div className="prose lg:prose-lg mx-auto">
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </div>
  );
}
