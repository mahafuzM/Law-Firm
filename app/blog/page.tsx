import BlogHero from "../components/blog/BlogHero";
import BlogLayout from "../components/blog/BlogLayout";
import BlogSection from "../components/blog/BlogSection";
import BlogSidebar from "../components/blog/BlogSidebar";



export default function BlogPage() {
  return (
    <main>
      <BlogHero />
      <BlogLayout />
      <BlogSidebar />
      <BlogSection />
    </main>
  );
}