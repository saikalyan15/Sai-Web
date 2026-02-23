import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.saikalyanakunuri.com"; // Replace with your actual domain

  const blogPostsDirectory = path.join(process.cwd(), "content/blog");
  const blogPostFileNames = fs.readdirSync(blogPostsDirectory);

  const blogPostUrls = blogPostFileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const filePath = path.join(blogPostsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      url: `${baseUrl}/blog/${slug}`,
      lastModified: new Date(data.date).toISOString().split("T")[0],
      changeFrequency: "weekly" as "weekly",
      priority: 0.7,
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...blogPostUrls,
  ];
}
