"use client";

import { useRef } from "react";
import Link from "next/link";
import { blogPosts } from "@/constant/SectionData";


export default function BlogSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-8 pb-28 bg-cream-soft/50 overflow-hidden relative">
      <div className="container-luxe">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="eyebrow">Jurnal</span>
            <h2 className="display mt-6 text-3xl md:text-5xl">
              Hekayələr və ilhamlar
            </h2>
          </div>
          
          <div className="flex gap-4 mt-6 md:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-cocoa hover:text-cream hover:border-cocoa transition-all duration-300 active:scale-95"
              aria-label="Əvvəlki slayd"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-cocoa/20 flex items-center justify-center text-cocoa hover:bg-cocoa hover:text-cream hover:border-cocoa transition-all duration-300 active:scale-95"
              aria-label="Növbəti slayd"
            >
              <svg className="w-5 h-5 stroke-current" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 no-scrollbar scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {blogPosts.map((p) => (
            <article 
              key={p.title} 
              className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] max-w-[380px] snap-start group cursor-pointer flex-shrink-0"
            >
              <div className="aspect-[4/5] overflow-hidden bg-cream-soft">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  loading="lazy" 
                />
              </div>
              <div className="mt-6">
                <p className="text-[0.65rem] uppercase tracking-[0.32em] text-bronze">
                  {p.cat} · {p.date}
                </p>
                <h3 className="display mt-3 text-xl md:text-2xl text-cocoa group-hover:text-bronze transition-colors duration-300 line-clamp-2">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {p.excerpt}
                </p>
                <Link href="/blog" className="link-underline mt-4 inline-block text-xs uppercase tracking-[0.28em] text-cocoa font-medium">
                  Oxu →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
