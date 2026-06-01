import { Divider } from "@/components/common/Ornaments";
import { team } from "@/constant/SectionData";

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-32 md:pt-16 md:pb-40 bg-cream-soft/50">
      <div className="container-luxe">
        <div className="text-center">
          <span className="eyebrow">Komandamız</span>
          <h2 className="display mt-6 text-4xl md:text-6xl">
            Süfrənin arxasındakı əllər
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
            Hər bir incəlik, hər bir təbəssüm — bu insanların ürəyindən gəlir.
          </p>
          <Divider className="mt-10" />
        </div>

        <div className="mt-20 grid gap-12 md:grid-cols-3">
          {team.map((m) => (
            <div key={m.name} className="group">
              <div className="aspect-4/5 overflow-hidden  border border-cocoa/10">
                <img
                  src={m.img}
                  alt={m.name}
                  className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 text-center">
                <h3 className="display text-2xl text-cocoa">{m.name}</h3>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.32em] text-bronze">
                  {m.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
