import { notFound } from "next/navigation";
import BlogList, { getTotalPages } from "@/components/blog/blog-list";

export const dynamicParams = false;

// Page 1 lives at /blog; this builds /blog/page/2, /blog/page/3, ...
export function generateStaticParams() {
  const total = getTotalPages();
  return Array.from({ length: Math.max(0, total - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

export default async function BlogPaginatedPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page } = await params;
  const currentPage = parseInt(page, 10);
  if (!Number.isInteger(currentPage) || currentPage < 2) notFound();
  return <BlogList currentPage={currentPage} />;
}
