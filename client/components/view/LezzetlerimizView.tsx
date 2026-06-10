"use client";

import { useRef, useState, useEffect } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Divider } from "@/components/common/Ornaments";
import { comboItems, images, menu, menuArchitectureItems, saladFeatures } from "@/constant/SectionData";





export default function Menu() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeComboIndex, setActiveComboIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveComboIndex((prev) => (prev + 1) % comboItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextCombo = () => {
    setActiveComboIndex((prev) => (prev + 1) % comboItems.length);
  };

  const prevCombo = () => {
    setActiveComboIndex((prev) => (prev - 1 + comboItems.length) % comboItems.length);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Kulinariya Jurnalı"
        title="Milli Ləzzət Təcrübəsi"
        subtitle="Bura sadəcə bir menyu deyil, hər bir reseptin, hər bir paketin və qablaşdırmanın öz hekayəsi olan kulinariya səyahətidir."
      />

      <div className="container-luxe pb-32">
        
        <section className="py-16 md:py-24 border-b border-black/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <h2 className="display text-5xl md:text-6xl lg:text-7xl mb-6 text-cocoa">
                Menyu<br className="hidden md:block"/> Arxitekturası
              </h2>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                MİLLİ brendi altında yenilənmiş və standartlaşdırılmış vizual elementlər. 
                Beynəlxalq keyfiyyətin Local Spirit harmoniyası.
              </p>
            </div>
            <div className="flex gap-4 mt-6 md:mt-0">
              <button 
                onClick={scrollLeft}
                className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-cocoa hover:text-cream hover:border-cocoa transition-all duration-300 active:scale-95"
                aria-label="Əvvəlki"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={scrollRight}
                className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-cocoa hover:text-cream hover:border-cocoa transition-all duration-300 active:scale-95"
                aria-label="Növbəti"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <Divider className="my-8 justify-start! w-full border-black/10" />

          <div 
            ref={scrollRef}
            className="mt-20 flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar scrollbar-none"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {menu.map((m, i) => (
              <article
                key={m.name}
                className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] max-w-[380px] snap-start group relative bg-card flex-shrink-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_30px_60px_-30px_rgba(78,41,27,0.45)]"
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
        </section>


        <section className="py-20 md:py-28 bg-[#FEF1E1] dark:bg-[#1A0E0C] -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16 mt-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="max-w-4xl">
              <span className="eyebrow mb-4 block">
                Kampaniyalar & Xüsusi Təkliflər
              </span>
              <h2 className="display text-5xl md:text-6xl lg:text-7xl text-cocoa">
                Dadlı Təkliflər və Kombo Menyular
              </h2>
            </div>
            
            <div className="flex gap-4 mt-6 md:mt-0">
              <button 
                onClick={prevCombo}
                className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-cocoa hover:text-cream hover:border-cocoa transition-all duration-300 active:scale-95"
                aria-label="Əvvəlki"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextCombo}
                className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-cocoa hover:text-cream hover:border-cocoa transition-all duration-300 active:scale-95"
                aria-label="Növbəti"
              >
                <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden w-full mx-auto rounded-4xl bg-white dark:bg-[#2A1814] shadow-xl">
             <div className="flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeComboIndex * 100}%)` }}>
                {comboItems.map((combo) => (
                   <div key={combo.id} className="min-w-full group flex flex-col">
                      <div className="relative aspect-[4/3] md:aspect-[2.5/1] overflow-hidden">
                         <img src={combo.image} alt={combo.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      </div>
                      <div className="p-8 md:p-12 lg:p-16 flex flex-col grow">
                         <h3 className="display text-4xl md:text-5xl lg:text-6xl mb-6 text-cocoa dark:text-cream">{combo.title}</h3>
                         <p className="text-xl lg:text-[22px] text-muted-foreground leading-relaxed mb-12 max-w-5xl">
                            {combo.description}
                         </p>
                         <div className="flex items-center justify-between mt-auto pt-8 border-t border-cocoa/10">
                            <span className="eyebrow text-sm! mb-0!">{combo.category}</span>
                            <div className="flex gap-2">
                               {comboItems.map((_, idx) => (
                                 <button 
                                   key={idx} 
                                   onClick={() => setActiveComboIndex(idx)}
                                   className={`h-2 rounded-full transition-all duration-300 ${activeComboIndex === idx ? 'w-8 bg-cocoa dark:bg-cream' : 'w-2 bg-cocoa/30 dark:bg-cream/30'}`}
                                   aria-label={`Slayd ${idx + 1}`}
                                 />
                               ))}
                            </div>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </section>

        <section className="py-20 md:py-28 border-b border-black/5">
          <div className="relative w-full aspect-4/3 md:aspect-2.5/1 rounded-[40px] overflow-hidden mb-16 md:mb-24 shadow-2xl">
            <img src={images.saladBar} alt="Milli Salat Barı" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent flex items-end">
               <div className="p-8 md:p-16 w-full max-w-5xl">
                  <span className="eyebrow text-white/80! mb-4 block">Təravət Hekayəsi</span>
                  <h2 className="display text-4xl md:text-6xl lg:text-7xl text-white mb-4">Sağlamlığın və Təravətin Mərkəzi</h2>
               </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16 px-2 md:px-8">
            {saladFeatures.map((feature) => (
              <div key={feature.id} className="flex flex-col items-center text-center">
                <h3 className="display text-3xl mb-4 text-cocoa">
                  {feature.titleLines.map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < feature.titleLines.length - 1 && <br />}
                    </span>
                  ))}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            <div className="flex flex-col max-w-2xl">
              <h2 className="display text-5xl md:text-6xl lg:text-7xl text-cocoa mb-8">
                Fastfood<br/>Komfortu,<br/>Milli Ruhla
              </h2>
              <h3 className="display text-2xl md:text-3xl text-bronze mb-10">
                Çatdırılma və paket servis üçün yaradılmış dadlar
              </h3>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  MİLLİ, sürətli həyat ritminə uyğun, amma dad və keyfiyyətdən güzəştə getməyən 
                  fastfood konseptidir. Bizim üçün əsas, qonaqların milli yerli ruh dəyərlərindən 
                  uzaqlaşmadan, rahat və sürətli şəkildə yemək zövqü yaşamasıdır.
                </p>
                <p>
                  Konseptimiz daha çox çatdırılma və paket servis üzərində qurulub. İstər 
                  Bravo daxilində alış-verişdən sonra, istər evə və ya işə aparmaq üçün - MİLLİ 
                  paketləri yolüstü rahat, isti və təmiz saxlanması üçün düşünülüb.
                </p>
                <p>
                  Loqolu plov box-lar, milli dönər, burger və kabab burger qablaşdırmaları MİLLİ 
                  brendini hər addımda görünən edir. Hər paket həm praktik seçimdir, həm də 
                  Azərbaycanın zəngin mətbəx irsini müasir formada daşıyan kiçik bir brend vizit kartıdır.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-4 md:space-y-6 pt-12 md:pt-24">
                <div className="rounded-4xl overflow-hidden aspect-4/5 shadow-lg">
                   <img src={images.fastfood1} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Bags" />
                </div>
                <div className="rounded-4xl overflow-hidden aspect-square shadow-lg">
                   <img src={images.fastfood3} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Cups" />
                </div>
              </div>
              <div className="space-y-4 md:space-y-6">
                <div className="rounded-4xl overflow-hidden aspect-square shadow-lg">
                   <img src={images.fastfood2} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Burger box" />
                </div>
                <div className="rounded-4xl overflow-hidden aspect-4/5 shadow-lg">
                   <img src={images.plov} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Takeout bowls" />
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </>
  );
}
