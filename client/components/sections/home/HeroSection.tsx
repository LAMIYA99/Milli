import { heroCafe, textureCarpet } from "@/constant/SectionData";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-170 w-full overflow-hidden">
      <img
        src={heroCafe}
        alt="MİLLİ café atmosferi"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-linear-to-b from-cocoa/40 via-cocoa/30 to-cocoa/85" />
      <img
        src={textureCarpet}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-overlay"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-cream">
        <span className="eyebrow text-cream/80 animate-fade-in">
          Yerli Ruhla · Est. 2018
        </span>
        <h1 className="display mt-8 text-6xl leading-[0.95] sm:text-7xl md:text-[8.5rem] animate-fade-up">
          MİLLİ
        </h1>
        <p
          className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg animate-fade-up"
          style={{ animationDelay: ".15s" }}
        >
          Azərbaycanın qədim qonaqpərvərliyi — müasir incəlik və əl sənətkarlığı
          ilə yenidən nəfəs alır.
        </p>

        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-4 animate-fade-up"
          style={{ animationDelay: ".3s" }}
        >
          <Link
            href="/lezzetlerimiz"
            className="btn-primary border-cream! bg-cream! text-cocoa! hover:bg-transparent! hover:text-cream!"
          >
            Hamısına bax
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/haqqimizda"
            className="btn-ghost border-cream/50! text-cream! hover:bg-cream! hover:text-cocoa!"
          >
            Hekayəmiz
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3 text-cream/70">
        <span className="text-[0.6rem] uppercase tracking-[0.4em]">
          Aşağı sürüşdür
        </span>
        <div className="h-12 w-px bg-cream/40 animate-scroll-hint" />
      </div>
    </section>
  );
}
