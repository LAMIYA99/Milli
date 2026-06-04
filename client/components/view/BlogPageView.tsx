import { PageHeader } from "@/components/common/PageHeader";
import { blogPosts } from "@/constant/SectionData";

export default function Blog() {
  return (
    <>
      <PageHeader eyebrow="Bloq" title="Mətbəxin arxasında" subtitle="Hekayələr, reseptlər və yerli ilhamlar — MİLLİ jurnalından." />
      <section className="container-luxe pb-32">
        <div className="grid gap-12 md:grid-cols-3">
          {blogPosts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="mt-6">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-bronze">
                  {p.cat} · {p.date}
                </p>
                <h2 className="display mt-3 text-2xl text-cocoa group-hover:text-bronze transition-colors">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
