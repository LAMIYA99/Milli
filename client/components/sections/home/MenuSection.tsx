import { Divider } from "@/components/common/Ornaments";
import { menu } from "@/constant/SectionData";
import Link from "next/link";

export default function MenuSection() {
  return (
    <section className="relative bg-cream-soft/50 pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container-luxe">
        <div className="text-center">
          <span className="eyebrow">Ləzzətlərimiz</span>
          <h2 className="display mt-6 text-4xl md:text-6xl">
            MİLLİ-də qlobal kulinariya irsi müasir və premium tərzdə təqdim
            olunur.{" "}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Göz Qabağında, Hər Gün Təzə və Tam Şəffaf
          </p>
          <Divider className="mt-10" />
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {menu.slice(0, 3).map((m, i) => (
            <article
              key={m.name}
              className="group relative bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(78,41,27,0.45)]"
            >
              <div className="relative aspect-4/5 overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  width={1024}
                  height={1280}
                />
                <div className="absolute inset-0 bg-linear-to-t from-cocoa/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
              <div className="relative border-t border-bronze/20 p-8">
                <img src="/buta2.PNG" alt="" className="absolute -top-5 right-6 h-12 w-auto opacity-60" />
                <h3 className="display mt-3 text-2xl text-cocoa">{m.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/lezzetlerimiz" className="btn-primary">
            Hamısına bax
          </Link>
        </div>
      </div>
    </section>
  );
}
