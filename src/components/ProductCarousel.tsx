"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductSlide {
  text: string;
  image: string;
}

interface ProductCarouselProps {
  title: string;
  slides: ProductSlide[];
  href: string;
  websiteUrl?: string;
  showImage?: boolean;
  /** Single static paragraph shown instead of the rotating slide text. */
  description?: string;
}

export function ProductCarousel({ title, slides, href, websiteUrl, showImage = true, description }: ProductCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only rotate when the image carousel is visible with more than one slide.
    if (!showImage || slides.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, showImage]);

  return (
    <div className="w-full h-full flex flex-col bg-zinc-900/40 border border-white/[0.08] rounded-3xl overflow-hidden hover:border-white/[0.15] transition-all duration-500 shadow-2xl group">
      
      {/* Top Image Carousel Container */}
      {showImage && (
        <div className="relative w-full aspect-[4/3] bg-zinc-950/80 border-b border-white/[0.05] overflow-hidden">
          {slides.map((slide, idx) => (
            <Image
              key={idx}
              src={slide.image}
              alt={`${title} preview ${idx + 1}`}
              fill
              className={cn(
                "object-cover object-top transition-all duration-1000 ease-in-out group-hover:scale-105",
                idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 scale-95"
              )}
              priority={idx === 0}
            />
          ))}
          {/* Subtle Bottom Gradient blending into content */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-zinc-900/90 to-transparent z-20 pointer-events-none" />
        </div>
      )}

      {/* Content Area */}
      <div className={cn("flex flex-col flex-grow p-6 md:p-8 relative z-30", showImage && "-mt-8")}>
        
        {/* Carousel Dots - Positioned gracefully overlapping image and text */}
        {showImage && (
          <div className="flex items-center gap-2 mb-6">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 ease-in-out shadow-lg",
                  idx === currentIndex ? "w-6 bg-zinc-100" : "w-1.5 bg-zinc-600 hover:bg-zinc-400"
                )}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-50 mb-3">
          {title}
        </h3>
        
        {/* Subtitle Content */}
        <div className="min-h-[60px] flex items-start mb-auto">
          <p className="text-[15px] md:text-base text-zinc-400 font-medium leading-relaxed">
            {description ?? slides[currentIndex]?.text}
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-white/[0.06]">
          {websiteUrl && (
            <Link
              href={websiteUrl}
              target="_blank"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-100 hover:bg-white text-zinc-900 text-sm font-bold transition-transform duration-300 hover:scale-[1.02] shadow-md"
            >
              Visit <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          )}
          <Link
            href={href}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold transition-colors duration-300 border border-white/5 hover:border-white/10"
          >
            Case Study <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
