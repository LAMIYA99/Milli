import { PageHeader } from "@/components/common/PageHeader";
import { blogPosts } from "@/constant/SectionData";
import Link from "next/link";

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
                <h3 className="display mt-3 text-xl md:text-2xl text-cocoa group-hover:text-bronze transition-colors duration-300 line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {p.excerpt}
                </p>
                <Link href={`/blog/${p.id}`} className="link-underline mt-4 inline-block text-xs uppercase tracking-[0.28em] text-cocoa font-medium">
                  Oxu →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
