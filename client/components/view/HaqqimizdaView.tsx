import { PageHeader } from "@/components/common/PageHeader";
import { Divider } from "@/components/common/Ornaments";
import { aboutValues } from "@/constant/SectionData";

const aboutCraft =
  "/felsefemiz3.jpg";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="Haqqımızda"
        title="Yerli ruhun yeni dili"
        subtitle="MİLLİ — bir məkan deyil, Azərbaycan mədəniyyətinə həsr olunmuş canlı bir hekayədir. Hər küncündə bir nəsil, hər ləzzətində bir vətən."
      />

      <section className="py-20 md:py-32 bg-[#FEF1E1]">
        <div className="container-luxe grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col items-start max-w-xl">
            <span className="eyebrow mb-6">Brend dəyərləri & missiya</span>
            <h2 className="display text-5xl md:text-6xl lg:text-7xl mb-8 text-cocoa">
              MİLLİ
              <br />
              Hekayəsi
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              MİLLİ brendi olaraq missiyamız – qlobal mətbəx dadlarını yerli
              ruhla birləşdirərək Bravo müştərisinə daha premium, sürətli və
              standartlaşdırılmış yemək təcrübəsi təqdim etməkdir.
            </p>
          </div>

          <div className="relative w-full aspect-5/4 md:aspect-4/3 flex items-center justify-center">
            <img
              src="/IMG_6381.PNG"
              alt="Milli Local Spirit"
              className="w-full h-full object-contain rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px]"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-luxe grid items-center gap-16 md:grid-cols-2">
          <img
            src={aboutCraft}
            alt="Sənətkar"
            className="aspect-4/5 w-130 h-130 object-cover rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] shadow-xl"
            loading="lazy"
          />
          <div>
            <span className="eyebrow">Fəlsəfəmiz</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              Bir fincan çay, bir əsr hekayə.
            </h2>
            <Divider className="my-8 justify-start!" />
            <p className="leading-relaxed text-muted-foreground">
              Bizim üçün yemək — sadəcə qida deyil, ünsiyyətin ən qədim
              formasıdır. MİLLİ-də ənənəvi reseptlər müasir texnika ilə qovuşur,
              əl ilə hazırlanmış hər detal isə sizə evdə olduğunuzu xatırladır.
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Biz Azərbaycan mətbəxinin incəliyini, Şəki şirniyyatının
              zərifliyini və Lənkəran çayının sakitliyini bir məkanda
              toplamışıq.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[#FEF1E1]">
        <div className="container-luxe grid items-center gap-16 md:grid-cols-2">
          <div className="flex flex-col items-start max-w-xl">
            <h2 className="eyebrow">Populyar Qlobal Dadlar</h2>

            <h3 className="display mt-6 text-4xl md:text-5xl">
              Göz Qabağında və Tam Şəffaf
            </h3>
            <Divider className="my-8 justify-start!" />

            <p className=" leading-relaxed text-muted-foreground">
              MİLLİ-də qlobal kulinariya irsi müasir və premium tərzdə təqdim
              olunur. Soyuq vitrinimizdə günboyu təzə hazırlanan yeməklər hər
              bir qonağın seçiminə hazır vəziyyətdədir. Vitrin qarşısında öz
              payınızı şəxsən seçir, çəkilə-çəkilə (qramla və ya kq-la) satılan
              təamlar sayəsində hər zaman şəffaf qiymət siyasətindən
              yararlanırsınız. İstədiyiniz qədər dadmaq azadlığı, ev surəti və
              yüksək keyfiyyət MİLLİ-nin hər bir paketində cəmlənib.
            </p>
          </div>

          <div className="relative w-full aspect-4/5 md:aspect-square p-2 md:p-6">
            <img
              src="/haqqımızdasef1.jpg"
              alt="Milli service"
              className="w-full h-full object-cover rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#FEF1E1] py-24">
        <div className="container-luxe">
          <div className="mb-16 text-center">
            <span className="eyebrow">Dəyərlərimiz</span>
            <h2 className="display mt-4 text-4xl md:text-5xl">
              Üç sadə prinsip
            </h2>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            {aboutValues.map((v) => (
              <div key={v.n} className="border-t border-bronze/30 pt-8">
                <p className="display text-5xl text-bronze">{v.n}</p>
                <h3 className="mt-4 display text-2xl text-cocoa">{v.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
