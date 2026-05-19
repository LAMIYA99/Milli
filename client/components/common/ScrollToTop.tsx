"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cocoa/20 bg-cocoa text-cream shadow-md transition-all duration-500 hover:border-cocoa hover:bg-cocoa hover:text-cream hover:-translate-y-1 hover:shadow-lg focus:outline-none ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Yuxarı qayıt"
    >
      <svg
        className="h-5 w-5 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M5 15l7-7 7 7"
        />
      </svg>
    </button>
  );
}
