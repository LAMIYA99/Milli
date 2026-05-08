import { PageHeader } from "@/components/common/PageHeader";

// Placeholders
const blog1 = "https://images.unsplash.com/photo-1509440159596-0249088772ff";
const blog2 = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085";
const blog3 = "https://images.unsplash.com/photo-1549492423-400259a2e574";

const posts = [
  { img: blog1, cat: "Sənət", date: "12 Mart 2024", title: "Əl ilə yoğrulan xəmirin sirri", excerpt: "Nənələrimizdən qalan reseptlərin müasir mətbəxdə yaşadılması." },
  { img: blog2, cat: "Qəhvə", date: "28 Fevral 2024", title: "Tək mənşəli qəhvə: dünyadan süfrəmizə", excerpt: "Hər dənənin arxasındakı uzun yol və qovurma sənəti." },
  { img: blog3, cat: "Mədəniyyət", date: "05 Yanvar 2024", title: "İçərişəhərin küçələrində bir gün", excerpt: "Bakının qədim daşlarında müasir bir nəfəs axtarışı." },
];

export default function Blog() {
  return (
    <>
      <PageHeader eyebrow="Jurnal" title="Mətbəxin arxasında" subtitle="Hekayələr, reseptlər və yerli ilhamlar — MİLLİ jurnalından." />
      <section className="container-luxe pb-32">
        <div className="grid gap-12 md:grid-cols-3">
          {posts.map((p) => (
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
                <Link href="/blog" className="link-underline mt-4 inline-block text-xs uppercase tracking-[0.28em] text-cocoa">Oxu →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
