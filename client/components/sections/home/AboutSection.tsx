import { CornerOrnament, Divider } from "@/components/common/Ornaments";
import { aboutCraft } from "@/constant/SectionData";
import Link from "next/link";

export default function AboutSection() {
    return (
         <section className="relative overflow-hidden py-32 md:py-40 bg-[#FCEAD7]">
               <CornerOrnament className="absolute left-0 top-0 h-32 w-32 text-bronze/30" />
               <CornerOrnament className="absolute bottom-0 right-0 h-32 w-32 -scale-100 text-bronze/30" />
       
               <div className="container-luxe grid items-center gap-16 md:grid-cols-2 md:gap-24">
                 <div className="relative">
                   <div className="relative aspect-4/5 overflow-hidden">
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
                     <p className="mt-1 text-[0.65rem] uppercase tracking-[0.32em] text-bronze">
                       İl ərzində
                     </p>
                   </div>
                 </div>
       
                 <div>
                   <span className="eyebrow">Haqqımızda</span>
                   <h2 className="display mt-6 text-4xl leading-tight md:text-6xl">
                     MİLLİ brendi
                     <br />
                     <em className="not-italic text-bronze">olaraq missiyamız.</em>
                   </h2>
                   <Divider className="my-10 justify-start!" />
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
                   <Link href="/haqqimizda" className="btn-ghost mt-10">
                     Daha çox oxu →
                   </Link>
                 </div>
               </div>
             </section>
    )
}