import { PageHeader } from "@/components/common/PageHeader";
import { Divider, ButaOrnament } from "@/components/common/Ornaments";

const menuPakhlava = "https://images.unsplash.com/photo-1519676867240-f03562e64548?q=80&w=1974&auto=format&fit=crop";
const menuTea = "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=1974&auto=format&fit=crop";
const menuCoffee = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop";
const gallery2 = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop";
const gallery3 = "https://images.unsplash.com/photo-1590004953392-5aba2e785943?q=80&w=2070&auto=format&fit=crop";

const sections = [
  {
    title: "Qəhvə Sənəti",
    img: menuCoffee,
    items: [
      { name: "Espresso Yerli", price: "5₼", desc: "Tək mənbəli, qara karamel notları" },
      { name: "Cappuccino MİLLİ", price: "7₼", desc: "İpəkvari süd köpüyü, evdə qovrulan dənələr" },
      { name: "Filtr Qəhvə", price: "6₼", desc: "Slow-drip, gündəlik mənşə dəyişir" },
      { name: "Buz Latte", price: "8₼", desc: "Soyuq dəmləmə + vanil notu" },
    ],
  },
  {
    title: "Ənənəvi Şirniyyatlar",
    img: menuPakhlava,
    items: [
      { name: "Bakı Paxlavası", price: "9₼", desc: "Qoz, bal, zəfəran" },
      { name: "Şəkərbura", price: "7₼", desc: "Zərif xəmir, qoz dolğusu" },
      { name: "Şəki Halvası", price: "10₼", desc: "Şəkidən gətirilən əl işi" },
      { name: "Qoğal", price: "5₼", desc: "Ənənəvi çörəkçi reseptində" },
    ],
  },
  {
    title: "Çay Ritualı",
    img: menuTea,
    items: [
      { name: "Lənkəran Çayı", price: "4₼", desc: "Armudu stəkanda, samovardan" },
      { name: "Çobanyastığı", price: "5₼", desc: "Dağ otları qarışığı" },
      { name: "Nar Çayı", price: "6₼", desc: "Quru nar dənələri ilə" },
      { name: "Zəfəran Latte", price: "8₼", desc: "İsti süd, bal, zəfəran" },
    ],
  },
];

export default function Menu() {
  return (
    <>
      <PageHeader
        eyebrow="Ləzzətlərimiz"
        title="Süfrəmizdən bir nəfəs"
        subtitle="Hər fincan, hər dilim — uzun illərin sənətkarlığı və yerli torpağın səxavəti ilə hazırlanır."
      />

      <div className="container-luxe space-y-24 pb-32">
        {sections.map((s, i) => (
          <section key={s.title} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <img src={s.img} alt={s.title} className="aspect-square w-full object-cover" loading="lazy" />
              <ButaOrnament className="absolute -bottom-6 -right-6 hidden h-20 w-16 text-bronze md:block" />
            </div>
            <div>
              <span className="eyebrow">0{i + 1}</span>
              <h2 className="display mt-4 text-4xl md:text-5xl">{s.title}</h2>
              <Divider className="my-8 !justify-start" />
              <ul className="divide-y divide-cocoa/10">
                {s.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-4 py-5">
                    <div className="flex-1">
                      <h3 className="display text-xl text-cocoa">{it.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
                    </div>
                    <span className="display text-xl text-bronze">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}

        <section className="grid gap-6 md:grid-cols-2">
          <img src={gallery2} alt="Şirniyyat" className="aspect-[4/3] w-full object-cover" loading="lazy" />
          <img src={gallery3} alt="Nar" className="aspect-[4/3] w-full object-cover" loading="lazy" />
        </section>
      </div>
    </>
  );
}
