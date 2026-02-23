import { Hero } from "@/components/Hero";
import { BlogPosts } from "@/components/BlogPosts";
import { AboutMe } from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <Hero />
        <AboutMe />
        <BlogPosts />
      </main>
    </div>
  );
}
