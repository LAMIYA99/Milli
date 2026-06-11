import { blogPosts } from "@/constant/SectionData";
import BlogDetailView from "@/components/view/BlogDetailView";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Bloq Təfərrüatları | Milli",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return <BlogDetailView post={post} />;
}
