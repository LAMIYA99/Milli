import { PageHeader } from "@/components/common/PageHeader";
import { Divider } from "@/components/common/Ornaments";
import { comboItems, images, menuArchitectureItems, saladFeatures } from "@/constant/SectionData";





export default function Menu() {
  return (
    <>
      <PageHeader
        eyebrow="Kulinariya Jurnalı"
        title="MİLLİ Ləzzət Təcrübəsi"
        subtitle="Bura sadəcə bir menyu deyil, hər bir reseptin, hər bir paketin və qablaşdırmanın öz hekayəsi olan kulinariya səyahətidir."
      />

      <div className="container-luxe pb-32">
        
        <section className="py-16 md:py-24 border-b border-black/5">
          <div className="mb-12 md:mb-16">
            <h2 className="display text-5xl md:text-6xl lg:text-7xl mb-6 text-cocoa">
              Menyu<br className="hidden md:block"/> Arxitekturası
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl">
              MİLLİ brendi altında yenilənmiş və standartlaşdırılmış vizual elementlər. 
              Beynəlxalq keyfiyyətin Local Spirit harmoniyası.
            </p>
            <Divider className="my-8 justify-start! w-full border-black/10" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {menuArchitectureItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative aspect-4/5 rounded-3xl overflow-hidden bg-[#F2EDE4] mb-6">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="display text-2xl md:text-3xl mb-3 text-cocoa">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>


        <section className="py-20 md:py-28 bg-[#FEF1E1] -mx-4 px-4 md:-mx-8 md:px-8 lg:-mx-16 lg:px-16 mt-12 mb-12">
          <div className="mb-16 max-w-4xl">
            <span className="eyebrow mb-4 block">
              Kampaniyalar & Xüsusi Təkliflər
            </span>
            <h2 className="display text-5xl md:text-6xl lg:text-7xl text-cocoa">
              Dadlı Təkliflər və Kombo Menyular
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {comboItems.map((combo) => (
              <div key={combo.id} className="group cursor-pointer bg-white rounded-4xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
                <div className="relative aspect-16/10 overflow-hidden">
                  <img src={combo.image} alt={combo.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="p-8 md:p-10 flex flex-col grow">
                  <h3 className="display text-3xl md:text-4xl mb-4 text-cocoa">{combo.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 grow">
                    {combo.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-cocoa/10">
                    <span className="eyebrow text-xs! mb-0!">{combo.category}</span>
                  </div>
                </div>
              </div>
            ))}
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
