"use client";

import { PageHeader } from "@/components/common/PageHeader";
import { Divider } from "@/components/common/Ornaments";

export default function Contact() {
  return (
    <>
      <PageHeader eyebrow="Əlaqə" title="Süfrəmizə dəvətlisiniz" subtitle="Sizi gözləyirik — bir fincan çay, bir hekayə və isti bir təbəssümlə." />

      <section className="container-luxe grid gap-16 pb-32 md:grid-cols-2">
        <div>
          <span className="eyebrow">Bizi tap</span>
          <h2 className="display mt-6 text-3xl md:text-4xl">Bakının qəlbində</h2>
          <Divider className="my-8 !justify-start" />
          <ul className="space-y-5 text-base text-cocoa">
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">Ünvan</span>Nizami küçəsi 78, Bakı, AZ1000</li>
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">Telefon</span>+994 12 345 67 89</li>
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">E-poçt</span>salam@milli.az</li>
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">İş saatları</span>Hər gün · 08:00 — 23:00</li>
          </ul>
        </div>

        <form className="space-y-6 border border-cocoa/15 bg-card p-8 md:p-10" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Ad Soyad</label>
            <input className="mt-2 w-full border-b border-cocoa/30 bg-transparent py-3 outline-none focus:border-cocoa" />
          </div>
          <div>
            <label className="text-[0.65rem] uppercase tracking-[0.28em] text-bronze">E-poçt</label>
            <input type="email" className="mt-2 w-full border-b border-cocoa/30 bg-transparent py-3 outline-none focus:border-cocoa" />
          </div>
          <div>
            <label className="text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Mesaj</label>
            <textarea rows={4} className="mt-2 w-full border-b border-cocoa/30 bg-transparent py-3 outline-none focus:border-cocoa resize-none" />
          </div>
          <button className="btn-primary w-full justify-center">Göndər →</button>
        </form>
      </section>

      <section className="container-luxe pb-32">
        <iframe
          title="Xəritə"
          src="https://www.openstreetmap.org/export/embed.html?bbox=49.83%2C40.37%2C49.86%2C40.39&layer=mapnik"
          className="aspect-[21/9] w-full border border-cocoa/15 grayscale"
          loading="lazy"
        />
      </section>
    </>
  );
}
