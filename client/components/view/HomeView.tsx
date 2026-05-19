import Link from "next/link";
import { Divider, ButaOrnament, CornerOrnament } from "@/components/common/Ornaments";

// Placeholders for missing images
const heroCafe = "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop";
const aboutCraft = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop";
const textureCarpet = "https://images.unsplash.com/photo-1582264560416-566085a6764d?q=80&w=2070&auto=format&fit=crop";
const menuPakhlava = "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1974&auto=format&fit=crop";
const menuTea = "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1974&auto=format&fit=crop";
const menuCoffee = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop";

const menu = [
  { name: "Şəkərbura & Paxlava", desc: "Əl ilə hazırlanmış ənənəvi şirniyyatlar, bal və qoz dolğusu ilə.", img: menuPakhlava },
  { name: "Armudu Çay", desc: "Lənkəran çayı, qədim samovardan süzülən isti bir ritual.", img: menuTea },
  { name: "Mütəxəssis Qəhvə", desc: "Tək mənbəli dənələr, əl ilə dəmlənən ipəkvari ləzzət.", img: menuCoffee },
];

const partners = ["AZƏRSUN", "BAKU MEDIA", "ICHERI ATELIER", "QALA STUDIO", "ŞƏKİ HOUSE", "NAR GALLERY"];

export default function HomeView() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
        <img
          src={heroCafe}
          alt="MİLLİ café atmosferi"
          className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cocoa/40 via-cocoa/30 to-cocoa/85" />
        <img
          src={textureCarpet}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-overlay"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
          <span className="eyebrow text-cream/80 animate-fade-in">Yerli Ruhla · Est. 2018</span>
          <h1 className="display mt-8 text-6xl leading-[0.95] sm:text-7xl md:text-[8.5rem] animate-fade-up">
            MİLLİ
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg animate-fade-up" style={{ animationDelay: ".15s" }}>
            Azərbaycanın qədim qonaqpərvərliyi — müasir incəlik və əl
            sənətkarlığı ilə yenidən nəfəs alır.
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: ".3s" }}>
            <Link href="/lezzetlerimiz" className="btn-primary !border-cream !bg-cream !text-cocoa hover:!bg-transparent hover:!text-cream">
            Hamısına bax
              <span aria-hidden>→</span>
            </Link>
            <Link href="/haqqimizda" className="btn-ghost !border-cream/50 !text-cream hover:!bg-cream hover:!text-cocoa">
              Hekayəmiz
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/70">
          <span className="text-[0.6rem] uppercase tracking-[0.4em]">Aşağı sürüşdür</span>
          <div className="h-12 w-px bg-cream/40 animate-scroll-hint" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden py-32 md:py-40">
        <CornerOrnament className="absolute left-0 top-0 h-32 w-32 text-bronze/30" />
        <CornerOrnament className="absolute bottom-0 right-0 h-32 w-32 -scale-100 text-bronze/30" />

        <div className="container-luxe grid items-center gap-16 md:grid-cols-2 md:gap-24">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={aboutCraft}
                alt="Samovardan çay süzən sənətkar"
                className="h-full w-full object-cover"
                loading="lazy"
                width={1280}
                height={1600}
              />
            </div>
            <div className="absolute -bottom-8 -right-6 hidden border border-bronze/40 bg-cream px-8 py-6 text-center md:block">
              <p className="display text-5xl text-cocoa">07</p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-[0.32em] text-bronze">İl ərzində</p>
            </div>
          </div>

          <div>
            <span className="eyebrow">Hekayəmiz</span>
            <h2 className="display mt-6 text-4xl leading-tight md:text-6xl">
              Hər fincanda<br />
              <em className="not-italic text-bronze">bir vətən nəfəsi.</em>
            </h2>
            <Divider className="my-10 !justify-start" />
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              MİLLİ — Bakının qəlbində qurulmuş bir məkan deyil; o, nənələrimizin
              süfrə dilini, samovarın səbrini və xalçanın naxışlarındakı sükutu
              müasir bir dillə danışan bir mədəniyyət evidir.
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Hər bir ləzzət əl ilə hazırlanır, hər bir detal isə yerli
              sənətkarlarımızın imzasını daşıyır. Bizimlə bir fincan çay
              içdiyiniz an — siz əslində bir əsr ərzində toxunmuş hekayəyə
              qoşulursunuz.
            </p>
            <Link href="/haqqimizda" className="btn-ghost mt-10">
              Daha çox oxu →
            </Link>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="relative bg-cream-soft/50 py-32 md:py-40">
        <div className="container-luxe">
          <div className="text-center">
            <span className="eyebrow">Ləzzətlərimiz</span>
            <h2 className="display mt-6 text-4xl md:text-6xl">İmzalı seçmələr</h2>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Hər biri ayrı bir hekayə, hər biri uzun illərin sənətkarlığı ilə
              hazırlanmış üç imza ləzzət.
            </p>
            <Divider className="mt-10" />
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {menu.map((m, i) => (
              <article
                key={m.name}
                className="group relative bg-card transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(78,41,27,0.45)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    width={1024}
                    height={1280}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cocoa/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
                <div className="relative border-t border-bronze/20 p-8">
                  <ButaOrnament className="absolute -top-5 right-6 h-10 w-8 bg-card text-bronze opacity-60" />
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-bronze">
                    0{i + 1} · İmza
                  </p>
                  <h3 className="display mt-3 text-2xl text-cocoa">{m.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
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

      <section className="py-28">
        <div className="container-luxe text-center">
          <span className="eyebrow">Əməkdaşlıqlar</span>
          <h2 className="display mt-6 text-3xl md:text-5xl">
            Birgə yaratdığımız hekayələr
          </h2>
          <Divider className="mt-10" />
          <div className="mt-16 grid grid-cols-2 gap-x-10 gap-y-12 sm:grid-cols-3 md:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p}
                className="flex h-16 items-center justify-center text-[0.7rem] uppercase tracking-[0.28em] text-cocoa/60 transition-all duration-500 hover:text-cocoa"
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="relative overflow-hidden bg-cocoa py-32 text-cream">
        <img
          src={textureCarpet}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
        <div className="container-luxe relative grid gap-16 md:grid-cols-2">
          <div>
            <span className="eyebrow text-gold">Əlaqə</span>
            <h2 className="display mt-6 text-4xl md:text-6xl">
              Süfrəmizə<br />
              <em className="not-italic text-gold">xoş gəlmisiniz.</em>
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-cream/75">
              Sizi sevgiylə hazırlanmış bir fincan çay və qədim bir hekayə ilə
              gözləyirik. Rezerv etmək, sadəcə bir nəfəs qədər asandır.
            </p>
            <div className="mt-10 space-y-4 text-sm text-cream/80">
              <p>📍 Nizami küçəsi 78, Bakı</p>
              <p>☎ +994 12 345 67 89</p>
              <p>✉ salam@milli.az</p>
            </div>
          
          </div>
          <div className="relative aspect-square overflow-hidden border border-cream/15 md:aspect-auto">
            <iframe
              title="MİLLİ məkanı"
              src="https://www.openstreetmap.org/export/embed.html?bbox=49.83%2C40.37%2C49.86%2C40.39&layer=mapnik"
              className="h-full w-full grayscale"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
