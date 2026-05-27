import Link from "next/link";
import { Divider } from "../common/Ornaments";
import { Logo } from "../common/Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-cocoa text-cream">
      <div className="container-luxe py-20">
        <Divider className="mb-14 text-cream/40" />
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block text-cream">
              <Logo className="h-16 w-auto" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/70">
              Azərbaycan mədəniyyətinin isti nəfəsini, qonaqpərvərliyimizin əsl
              mənasını və əl ilə yaradılan ləzzətlərin incəliyini bir süfrədə
              birləşdirən məkan.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[20px] font-semibold   text-cream/50">
            Səhifələr
            </p>
            <ul className="space-y-3 text-[17px] text-cream/80">
              <li><Link href="/haqqimizda" className="link-underline">Haqqımızda</Link></li>
              <li><Link href="/lezzetlerimiz" className="link-underline">Ləzzətlərimiz</Link></li>
              <li><Link href="/gallery" className="link-underline">Qalereya</Link></li>
              <li><Link href="/blog" className="link-underline">Bloq</Link></li>
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[20px] font-semibold text-cream/50">
              Əlaqə
            </p>
            <ul className="space-y-3 text-[17px] text-cream/80">
              <li>Nizami küçəsi 78, Bakı</li>
              <li>+994 12 345 67 89</li>
              <li>salam@milli.az</li>
              <li>Hər gün · 08:00 – 23:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-[0.7rem] uppercase tracking-[0.28em] text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} MİLLİ Café & Restoran</p>
          <p>Bakı · Azərbaycan</p>
        </div>
      </div>
    </footer>
  );
}
