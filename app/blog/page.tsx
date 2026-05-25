import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "@/lib/blog";

export const revalidate = 3600;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pageSize = 6;
  const currentPage = parseInt(page || "1");
  const allPosts = getBlogPosts();

  const totalPages = Math.ceil(allPosts.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const posts = allPosts.slice(startIndex, startIndex + pageSize);

  return (
    <section className="py-24 md:py-32 bg-background min-h-screen">
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <header className="space-y-4 mb-16 max-w-[720px]">
          <h1 className="text-4xl md:text-5xl font-display leading-tight text-foreground">
            Writing
          </h1>
          <p className="text-lg text-muted-foreground font-sans leading-relaxed">
            Articles on software delivery, Agile at scale, and technology operations.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {posts.length > 0 ? (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group"
              >
                <div className="space-y-3">
                  {post.featuredImage && (
                    <div className="relative aspect-[16/10] w-full mb-5 overflow-hidden border border-border">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                  <span className="font-sans text-xs text-muted-foreground">
                    {post.displayDate}
                  </span>
                  <h2 className="text-xl font-display text-foreground group-hover:text-accent transition-colors duration-200 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 group-hover:border-accent pb-0.5 transition-colors duration-200">
                    Read &rarr;
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full py-20 border border-border flex flex-col items-center justify-center space-y-4">
              <p className="text-xl font-display text-muted-foreground">No posts yet</p>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-6 border-t border-border pt-10">
            <Link
              href={`/blog?page=${Math.max(1, currentPage - 1)}`}
              className={`font-sans text-sm transition-colors duration-200 ${
                currentPage === 1
                  ? "text-muted-foreground/30 pointer-events-none"
                  : "text-accent hover:text-foreground"
              }`}
            >
              &larr; Previous
            </Link>

            <div className="flex items-center gap-3">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <Link
                  key={pageNum}
                  href={`/blog?page=${pageNum}`}
                  className={`font-sans text-sm w-8 h-8 flex items-center justify-center transition-colors duration-200 ${
                    currentPage === pageNum
                      ? "bg-accent text-white"
                      : "text-muted-foreground hover:text-accent border border-border"
                  }`}
                >
                  {pageNum}
                </Link>
              ))}
            </div>

            <Link
              href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
              className={`font-sans text-sm transition-colors duration-200 ${
                currentPage === totalPages
                  ? "text-muted-foreground/30 pointer-events-none"
                  : "text-accent hover:text-foreground"
              }`}
            >
              Next &rarr;
            </Link>
          </div>
        )}

        <div className="pt-16 border-t border-border mt-16">
          <Link
            href="/"
            className="inline-block text-accent font-sans text-sm font-medium border-b border-accent/40 hover:border-accent transition-colors duration-200 pb-0.5"
          >
            &larr; Back to home
          </Link>
        </div>
      </div>
    </section>
  );
}
