import { PageHeader } from "@/components/common/PageHeader";


const t1 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d";
const t2 = "https://images.unsplash.com/photo-1494790108377-be9c29b29330";
const t3 = "https://images.unsplash.com/photo-1500648767791-00dcc994a43e";

const team = [
  { img: t1, name: "Elvin Quliyev", role: "Baş Barista" },
  { img: t2, name: "Aysel Hüseynli", role: "Şirniyyat Şefi" },
  { img: t3, name: "Rüstəm Əliyev", role: "Baş Aşpaz" },
];

export default function Team() {
  return (
    <>
      <PageHeader eyebrow="Komanda" title="Süfrənin arxasındakı əllər" subtitle="Hər bir incəlik, hər bir təbəssüm — bu insanların ürəyindən gəlir." />
      <section className="container-luxe pb-32 ">
        <div className="grid gap-12 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="mt-6 text-center">
                <h3 className="display text-2xl text-cocoa">{m.name}</h3>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.32em] text-bronze">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
