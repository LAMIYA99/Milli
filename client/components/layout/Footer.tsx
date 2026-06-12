"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Divider } from "../common/Ornaments";
import { Logo } from "../common/Logo";

interface NavLink {
  label: string;
  href: string;
}

interface LayoutSettings {
  logoUrl: string;
  navLinks: NavLink[];
  footerLogoUrl: string;
  useHeaderLogoForFooter: boolean;
  footerAboutText: string;
  footerAddress: string;
  footerPhone: string;
  footerEmail: string;
  footerWorkingHours: string;
  footerCopyrightText: string;
  footerCopyrightSubtext: string;
}

const defaultSettings: LayoutSettings = {
  logoUrl: "/IMG_6381.PNG",
  navLinks: [
    { href: "/", label: "Ana Səhifə" },
    { href: "/haqqimizda", label: "Haqqımızda" },
    { href: "/lezzetlerimiz", label: "Ləzzətlərimiz" },
    { href: "/gallery", label: "Qalereya" },
    { href: "/blog", label: "Bloq" },
    { href: "/elaqe", label: "Əlaqə" },
  ],
  footerLogoUrl: "/IMG_6381.PNG",
  useHeaderLogoForFooter: true,
  footerAboutText: "Azərbaycan mədəniyyətinin isti nəfəsini, qonaqpərvərliyimizin əsl mənasını və əl ilə yaradılan ləzzətlərin incəliyini bir süfrədə birləşdirən məkan.",
  footerAddress: "Nizami küçəsi 78, Bakı",
  footerPhone: "+994 12 345 67 89",
  footerEmail: "salam@milli.az",
  footerWorkingHours: "Hər gün · 08:00 – 23:00",
  footerCopyrightText: `© ${new Date().getFullYear()} MİLLİ Café & Restoran`,
  footerCopyrightSubtext: "Bakı · Azərbaycan"
};

export function Footer() {
  const [settings, setSettings] = useState<LayoutSettings>(defaultSettings);

  useEffect(() => {
    const loadSettings = () => {
      const saved = localStorage.getItem("milli_layout_settings");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setSettings({ ...defaultSettings, ...parsed });
        } catch (e) {
          console.error("Failed to parse layout settings in footer:", e);
        }
      } else {
        setSettings(defaultSettings);
      }
    };

    loadSettings();

    window.addEventListener("milli_settings_updated", loadSettings);
    return () => window.removeEventListener("milli_settings_updated", loadSettings);
  }, []);

  return (
    <footer className="relative overflow-hidden bg-cocoa dark:bg-[#1A0E0C] text-cream dark:text-cocoa">
      <div className="container-luxe py-20">
        <Divider className="mb-14 text-cream/40 dark:text-cocoa/40" />
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block text-cream dark:text-cocoa">
              <Logo className="h-16 w-auto" type="footer" />
            </Link>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-cream/70 dark:text-cocoa/70">
              {settings.footerAboutText}
            </p>
          </div>

          <div>
            <p className="mb-5 text-[20px] font-semibold text-cream/50 dark:text-cocoa/50">
              Səhifələr
            </p>
            <ul className="space-y-3 text-[17px] text-cream/80 dark:text-cocoa/80">
              {settings.navLinks.filter(l => l.href !== "/").map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="link-underline">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-5 text-[20px] font-semibold text-cream/50 dark:text-cocoa/50">
              Əlaqə
            </p>
            <ul className="space-y-3 text-[17px] text-cream/80 dark:text-cocoa/80">
              <li>{settings.footerAddress}</li>
              <li>{settings.footerPhone}</li>
              <li>{settings.footerEmail}</li>
              <li>{settings.footerWorkingHours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 dark:border-cocoa/10 pt-8 text-[14px] uppercase tracking-[0.28em] text-cream/40 dark:text-cocoa/40 md:flex-row">
          <p>{settings.footerCopyrightText}</p>
          <p>{settings.footerCopyrightSubtext}</p>
        </div>
      </div>
    </footer>
  );
}
