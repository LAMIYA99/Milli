import { Divider } from "@/components/common/Ornaments";
import { aboutCraft } from "@/constant/SectionData";
import Link from "next/link";

interface FelsefemizSectionProps {
  showLink?: boolean;
}

export default function FelsefemizSection({ showLink = false }: FelsefemizSectionProps) {
  return (
    <section id="felsefemiz" className="py-20 md:py-32 scroll-mt-24">
      <div className="container-luxe grid items-center gap-16 md:grid-cols-2">
        <img
          src={aboutCraft}
          alt="Sənətkar"
          className="aspect-4/5 w-full h-full object-cover rounded-tl-[80px] rounded-br-[80px] md:rounded-tl-[120px] md:rounded-br-[120px] shadow-xl"
          loading="lazy"
        />
        <div>
           <span className="eyebrow">Haqqımızda</span>
           <h2 className="display mt-6 text-4xl leading-tight md:text-6xl">
                     MİLLİ brendi
                     <br />
                     <em className="not-italic text-bronze">olaraq missiyamız.</em>
                   </h2>
          <Divider className="my-8 justify-start!" />
           <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                     MİLLİ — Bakının qəlbində qurulmuş bir məkan deyil; o,
                     nənələrimizin süfrə dilini, samovarın səbrini və xalçanın
                     naxışlarındakı sükutu müasir bir dillə danışan bir mədəniyyət
                     evidir.
                   </p>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                     Hər bir ləzzət əl ilə hazırlanır, hər bir detal isə yerli
                     sənətkarlarımızın imzasını daşıyır. Bizimlə bir fincan çay
                     içdiyiniz an — siz əslində bir əsr ərzində toxunmuş hekayəyə
                     qoşulursunuz.
                   </p>
          {showLink && (
            <Link href="/haqqimizda#felsefemiz" className="btn-ghost mt-10">
              Daha çox oxu →
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
