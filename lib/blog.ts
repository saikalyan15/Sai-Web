import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  displayDate: string;
  slug: string;
  excerpt: string;
  featuredImage: string | null;
  draft: boolean;
  isValidDate: boolean;
}

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

export function getBlogPosts() {
  const postsDirectory = path.join(process.cwd(), "content/blog");
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(postsDirectory).filter(file => file.endsWith(".md"));
  
  const today = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const rawExcerpt =
      data.excerpt || data.description || content || "No excerpt available.";

    const postDate = data.date ? new Date(data.date) : null;
    const isValidDate = postDate && !isNaN(postDate.getTime());

    return {
      title: data.title || "Untitled",
      category: data.category || "automation",
      date: data.date, // ISO string or Date from matter
      displayDate: isValidDate ? postDate!.toLocaleDateString("en-US", {
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

  const isDev = process.env.NODE_ENV === "development";

  return posts
    .filter((post) => {
      if (isDev) return true;
      if (!post.isValidDate) return false;
      
      // Ensure we compare YYYY-MM-DD strings in UTC
      const postDateStr = new Date(post.date).toISOString().split("T")[0];
      return !post.draft && postDateStr <= today;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
