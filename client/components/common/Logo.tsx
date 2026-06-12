"use client";

import React, { useEffect, useState } from "react";

interface LogoProps {
  className?: string;
  type?: "header" | "footer";
}

export function Logo({ className = "", type = "header" }: LogoProps) {
  const [logoUrl, setLogoUrl] = useState("/IMG_6381.PNG");

  useEffect(() => {
    const loadLogo = () => {
      const saved = localStorage.getItem("milli_layout_settings");
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (type === "footer") {
            const useHeader = parsed.useHeaderLogoForFooter !== false; // default to true
            if (useHeader) {
              setLogoUrl(parsed.logoUrl || "/IMG_6381.PNG");
            } else {
              setLogoUrl(parsed.footerLogoUrl || parsed.logoUrl || "/IMG_6381.PNG");
            }
          } else {
            setLogoUrl(parsed.logoUrl || "/IMG_6381.PNG");
          }
        } catch (e) {
          console.error(e);
        }
      } else {
        setLogoUrl("/IMG_6381.PNG");
      }
    };

    loadLogo();
    
    // Listen for real-time updates when settings are saved
    window.addEventListener("milli_settings_updated", loadLogo);
    return () => window.removeEventListener("milli_settings_updated", loadLogo);
  }, [type]);

  return (
    <img 
      src={logoUrl} 
      alt="Milli Logo" 
      className={className}
    />
  );
}
