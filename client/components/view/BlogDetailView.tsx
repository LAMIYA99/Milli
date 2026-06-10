import { PageHeader } from "@/components/common/PageHeader";
import { blogPosts } from "@/constant/SectionData";

export default function BlogDetailView() {
  return (
    <>
      <PageHeader eyebrow="Bloq Təfərrüatları" title="Məqalələr və Hekayələr" subtitle="Bütün hekayələrimizi daha ətraflı və geniş formatda oxuyun." />
      <section className="container-luxe pb-32">
        <div className="flex flex-col gap-24">
          {blogPosts.map((p) => (
            <article key={p.title} className="w-full max-w-5xl mx-auto flex flex-col">
              <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden rounded-[2rem] shadow-lg">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-8 md:mt-12 px-4 md:px-0">
                <p className="text-sm uppercase tracking-[0.32em] text-bronze font-medium">
                  {p.cat} · {p.date}
                </p>
                <h2 className="display mt-4 text-4xl md:text-5xl text-cocoa leading-tight">
                  {p.title}
                </h2>
                <div className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground whitespace-pre-line text-justify">
                  {p.excerpt}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
