import { PageHeader } from "@/components/common/PageHeader";

type BlogPostProps = {
  post: {
    id: string;
    img: string;
    cat: string;
    date: string;
    title: string;
    excerpt: string;
  };
};

export default function BlogDetailView({ post }: BlogPostProps) {
  if (!post) return <div className="py-32 text-center">Məqalə tapılmadı</div>;

  return (
    <>
      <PageHeader eyebrow="Bloq" title={post.title} subtitle={`${post.cat} · ${post.date}`} />
      <section className="container-luxe pb-32">
        <article className="w-full max-w-5xl mx-auto flex flex-col">
          <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[2rem] shadow-lg">
            <img src={post.img} alt={post.title} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="mt-8 md:mt-12 px-4 md:px-0">
            <div className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-line text-justify">
              {post.excerpt}
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
