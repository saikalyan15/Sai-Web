import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Function to get blog posts
function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, excerpt } = matter(fileContents, { excerpt: true });

    return {
      title: data.title,
      date: new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      slug: filename.replace(/\.md$/, ""),
      excerpt: excerpt || data.description || "No excerpt available.",
      featuredImage: data.featuredImage || null,
    };
  });

  // Sort posts by date in descending order
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Blog
        </h1>
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="relative overflow-hidden rounded-lg border bg-background p-6 flex flex-col space-y-4 transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer"
            >
              {post.featuredImage && (
                <Image
                  src={post.featuredImage}
                  alt={`Featured image for ${post.title}`}
                  width={600}
                  height={400}
                  className="aspect-video object-cover rounded-md mb-4"
                />
              )}
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-gray-900">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-500">{post.date}</p>
                <p className="text-gray-700 text-base md:text-lg">
                  {post.excerpt}
                </p>
              </div>
              <div className="text-blue-600 text-sm font-medium inline-flex items-center">
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
