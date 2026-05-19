import ClientMap from "@/components/ui/ClientMap";
import { textureCarpet } from "@/constant/SectionData";

export default function ContactSection() {
    return (
      <section className="relative overflow-hidden bg-[#FCEAD7] py-32 text-cocoa">
        <img
          src={textureCarpet}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.03] mix-blend-multiply"
        />
        <div className="container-luxe relative grid gap-16 lg:grid-cols-2">
          <div>
            <span className="eyebrow text-bronze">Ünvanlarımız</span>
            <h2 className="display mt-6 text-4xl md:text-5xl">
              Süfrəmizə
              <br />
              <em className="not-italic text-bronze">xoş gəlmisiniz.</em>
            </h2>
            <p className="mt-6 mb-10 max-w-md leading-relaxed text-cocoa/75">
              Sizi sevgiylə hazırlanmış bir fincan çay və qədim bir hekayə ilə
              aşağıdakı məkanlarımızda gözləyirik.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              <div>
                <h3 className="display text-2xl text-cocoa">BRAVO Azure</h3>
                <p className="mt-2 text-sm text-cocoa/80">
                  Afiyəddin Cəlilov küçəsi 27a
                </p>
                <p className="mt-1 text-xs text-bronze font-medium">
                  Hər gün: 09:00 - 23:00
                </p>
              </div>
              <div>
                <h3 className="display text-2xl text-cocoa">BRAVO 20 Bayıl</h3>
                <p className="mt-2 text-sm text-cocoa/80">
                  Şahlar Allahverdiyev küçəsi 6b
                </p>
                <p className="mt-1 text-xs text-bronze font-medium">
                  Hər gün: 09:00 - 23:00
                </p>
              </div>
              <div>
                <h3 className="display text-2xl text-cocoa">BRAVO Lökbatan</h3>
                <p className="mt-2 text-sm text-cocoa/80">
                  Qobu şosesi, 28 May küçəsi
                </p>
                <p className="mt-1 text-xs text-bronze font-medium">
                  Hər gün: 09:00 - 23:00
                </p>
              </div>
              <div>
                <h3 className="display text-2xl text-cocoa">BRAVO Babək</h3>
                <p className="mt-2 text-sm text-cocoa/80">Babək pr. 94</p>
                <p className="mt-1 text-xs text-bronze font-medium">
                  Hər gün: 09:00 - 23:00
                </p>
              </div>
              <div>
                <h3 className="display text-2xl text-cocoa opacity-60">
                  BRAVO Oazis
                </h3>
                <p className="mt-2 text-sm text-cocoa/50">
                  Açılış mərhələsində
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-cocoa/15 lg:aspect-auto lg:h-150">
            <ClientMap />
          </div>
        </div>
      </section>
    )
}