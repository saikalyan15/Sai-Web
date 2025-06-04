import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return (
    <div className="prose max-w-3xl mx-auto mt-12 px-4">
      <h1>{data.title}</h1>
      <div className="text-sm text-gray-500 mb-4">{data.date}</div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
