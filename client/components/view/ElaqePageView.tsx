"use client";

import { useState, FormEvent } from "react";
import { PageHeader } from "@/components/common/PageHeader";
import { Divider } from "@/components/common/Ornaments";
import ClientMap from "@/components/ui/ClientMap";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Mesaj göndərilə bilmədi");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err) {
      console.error("Contact Form Error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <>
      <PageHeader eyebrow="Əlaqə" title="Süfrəmizə dəvətlisiniz" subtitle="Sizi gözləyirik — bir fincan çay, bir hekayə və isti bir təbəssümlə." />

      <section className="container-luxe grid gap-16 pb-32 md:grid-cols-2">
        <div>
          <span className="eyebrow">Bizi tap</span>
          <h2 className="display mt-6 text-3xl md:text-4xl">Bakının qəlbində</h2>
          <Divider className="my-8 !justify-start" />
          <ul className="space-y-5 text-base text-cocoa">
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">Baş Ofis</span>Nizami küçəsi 78, Bakı, AZ1000</li>
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">Telefon</span>+994 12 345 67 89</li>
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">Təklif və iradlarınızı bizə yollayın</span>salam@milli.az</li>
            <li><span className="text-bronze text-xs uppercase tracking-[0.28em] block mb-1">Məkanlarımız</span>BRAVO Azure · BRAVO Bayıl · BRAVO Lökbatan · BRAVO Babək</li>
          </ul>
        </div>

        <form className="space-y-6 border border-cocoa/15 bg-card p-8 md:p-10 flex flex-col justify-between" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Ad Soyad</label>
              <input 
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full border-b border-cocoa/30 bg-transparent py-3 outline-none focus:border-cocoa text-cocoa transition-colors" 
              />
            </div>
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.28em] text-bronze">E-poçt</label>
              <input 
                required
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full border-b border-cocoa/30 bg-transparent py-3 outline-none focus:border-cocoa text-cocoa transition-colors" 
              />
            </div>
            <div>
              <label className="text-[0.65rem] uppercase tracking-[0.28em] text-bronze">Təklif və İradlarınız</label>
              <textarea 
                required
                rows={4} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="mt-2 w-full border-b border-cocoa/30 bg-transparent py-3 outline-none focus:border-cocoa resize-none text-cocoa transition-colors" 
              />
            </div>
          </div>
          
          <div className="mt-6 space-y-4">
            <button 
              type="submit"
              disabled={status === "loading"}
              className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
            >
              {status === "loading" ? "Göndərilir..." : "Göndər →"}
            </button>

            {status === "success" && (
              <p className="text-xs text-emerald-600 bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-lg text-center animate-fade-in font-medium">
                Mesajınız uğurla göndərildi! Ən qısa zamanda əlaqə saxlayacağıq.
              </p>
            )}

            {status === "error" && (
              <p className="text-xs text-rose-600 bg-rose-50 border border-rose-200 px-4 py-3 rounded-lg text-center animate-fade-in font-medium">
                Göndərilmə zamanı xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.
              </p>
            )}
          </div>
        </form>
      </section>

      <section className="container-luxe pb-32">
        <div className="aspect-[21/9] w-full border border-cocoa/15 overflow-hidden rounded-3xl relative min-h-[350px] md:min-h-[450px]">
          <ClientMap />
        </div>
        <div className="mt-18">
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
        </div>
      </section>
    </>
  );
}
