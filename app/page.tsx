import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { BlogPosts } from "@/components/BlogPosts";
import { AboutMe } from "@/components/AboutMe";
import { ContactCTA } from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Services />
        <BlogPosts />
        <AboutMe />
        <ContactCTA />
      </main>
    </div>
  );
}
