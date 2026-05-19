import { PageHeader } from "@/components/common/PageHeader";
import { Divider } from "@/components/common/Ornaments";

const aboutCraft = "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1974&auto=format&fit=crop";
const gallery1 = "https://images.unsplash.com/photo-1582264560416-566085a6764d?q=80&w=2070&auto=format&fit=crop";

const values = [
  { n: "01", t: "Mənşə", d: "Hər inqrediyent yerli torpağın nəfəsindən, yerli sənətkarın əlindən gəlir." },
  { n: "02", t: "Sənətkarlıq", d: "Hər çörək, hər dəmləmə — uzun illərin səbri ilə formalaşan bir ritualdır." },
  { n: "03", t: "Qonaqpərvərlik", d: "Süfrəmizə oturan hər kəs — qonaq deyil, ailəmizin bir parçasıdır." },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Haqqımızda"
        title="Yerli ruhun yeni dili"
        subtitle="MİLLİ — bir məkan deyil, Azərbaycan mədəniyyətinə həsr olunmuş canlı bir hekayədir. Hər küncündə bir nəsil, hər ləzzətində bir vətən."
      />

      {/* BREND DƏYƏRLƏRİ & MİSSİYA */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container-luxe grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Image/Graphic Area */}
          <div className="relative w-full aspect-[5/4] md:aspect-[4/3] flex items-center justify-center p-4 order-last md:order-first">
            <img 
              src="/milli-local-spirit.jpg" 
              alt="Milli Local Spirit" 
              className="w-full h-full object-contain" 
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start max-w-xl">
            <span className="text-sm font-bold tracking-[0.15em] text-[#A65B45] uppercase mb-6 md:mb-8">
              Brend dəyərləri & missiya
            </span>
            <h2 className="text-6xl md:text-[75px] font-extrabold text-[#111] leading-[1.1] mb-8 md:mb-12">
              MİLLİ<br />
              Hekayəsi
            </h2>
            <p className="text-[17px] md:text-[20px] leading-[1.8] font-medium text-[#111]">
              <span className="bg-[#D4E3FF] box-decoration-clone px-1 py-[2px] whitespace-pre-wrap">
                MİLLİ brendi olaraq missiyamız – qlobal mətbəx dadlarını yerli ruhla birləşdirərək Bravo müştərisinə daha premium, sürətli və standartlaşdırılmış yemək təcrübəsi təqdim etməkdir.
              </span>
            </p>
          </div>

        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe grid items-center gap-16 md:grid-cols-2">
          <img src={aboutCraft} alt="Sənətkar" className="aspect-[4/5] w-full object-cover" loading="lazy" />
          <div>
            <span className="eyebrow">Fəlsəfəmiz</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">Bir fincan çay, bir əsr hekayə.</h2>
            <Divider className="my-8 !justify-start" />
            <p className="leading-relaxed text-muted-foreground">
              Bizim üçün yemək — sadəcə qida deyil, ünsiyyətin ən qədim
              formasıdır. MİLLİ-də ənənəvi reseptlər müasir texnika ilə qovuşur,
              əl ilə hazırlanmış hər detal isə sizə evdə olduğunuzu xatırladır.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Biz Azərbaycan mətbəxinin incəliyini, Şəki şirniyyatının zərifliyini
              və Lənkəran çayının sakitliyini bir məkanda toplamışıq.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream-soft/50 py-24">
        <div className="container-luxe">
          <div className="mb-16 text-center">
            <span className="eyebrow">Dəyərlərimiz</span>
            <h2 className="display mt-4 text-4xl md:text-5xl">Üç sadə prinsip</h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.n} className="border-t border-bronze/30 pt-8">
                <p className="display text-5xl text-bronze">{v.n}</p>
                <h3 className="mt-4 display text-2xl text-cocoa">{v.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-luxe">
          <img src={gallery1} alt="MİLLİ interyer" className="aspect-[21/9] w-full object-cover" loading="lazy" />
        </div>
      </section>
    </>
  );
}
