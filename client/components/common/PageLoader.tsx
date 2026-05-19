"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButaOrnament } from "@/components/common/Ornaments";
import { Logo } from "./Logo";

export default function PageLoader() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const hideTimer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(hideTimer);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setLoading(true);
    setVisible(true);

    const timer = setTimeout(() => {
      setLoading(false);
      const hideTimer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(hideTimer);
    }, 600);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-cream text-cocoa transition-opacity duration-500 ease-in-out ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative flex flex-col items-center select-none pointer-events-none w-72">
        <div className={`transition-all duration-1000 ${loading ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
          <ButaOrnament className="h-10 w-8 text-bronze shadow-glow mb-4 animate-pulse" />
        </div>

        <Logo className="w-56 h-auto text-cocoa" />

        <div className="mt-8 h-[2px] w-36 overflow-hidden bg-cocoa/10 rounded-full">
          <div className="h-full w-full bg-bronze origin-left animate-loading-bar" />
        </div>
      </div>
    </div>
  );
}
