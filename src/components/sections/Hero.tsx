import { useEffect, useRef, useState } from "react";
import slider1 from "@/assets/slider1.webp";
import slider2 from "@/assets/slider2.webp";
import slider3 from "@/assets/slider3.webp";
import heroMobileNeon from "@/assets/hero-mobile-neon.webp";
import heroMobileSlide1 from "@/assets/hero-mobile-slide1.webp";
import heroNeonTips from "@/assets/hero-neon-tips.webp";
import { useIsMobile } from "@/hooks/use-mobile";
import logoWhite from "@/assets/logos/Logo-white.webp";

const desktopSlides = [slider1, slider2, slider3];
const mobileSlides  = [heroNeonTips, heroMobileSlide1, heroMobileNeon];

export const Hero = () => {
  const isMobile = useIsMobile();
  const slides = isMobile ? mobileSlides : desktopSlides;
  const [i, setI] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setI((p) => (p + 1) % slides.length);
    }, 6000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [slides.length]);

  return (
    <section className="relative -mt-[100px] lg:-mt-[116px] h-[100svh] lg:h-[100dvh] min-h-[680px] w-full overflow-hidden">
      {slides.map((src, idx) => (
        <img
          key={idx}
          src={src}
          alt={idx === 0 ? "Premier manicure in Chicago West Loop" : ""}
          width={1920}
          height={1080}
          loading={idx === 0 ? "eager" : "lazy"}
          {...({ fetchpriority: idx === 0 ? "high" : "low" } as any)}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Scrims */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Logo watermark — first slide only */}
      {i === 0 && (
        <img
          src={logoWhite}
          alt=""
          aria-hidden
          className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] max-w-2xl pointer-events-none opacity-30 mix-blend-overlay animate-fade-in"
        />
      )}

      {/* Fixed title + CTA */}
      <div className="absolute left-6 lg:left-16 bottom-16 lg:bottom-20 max-w-2xl">
        <h1 className="font-serif text-primary-foreground text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-[-0.01em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]">
          Premier manicure<br />in Chicago West Loop
        </h1>
        <div className="mt-10 lg:mt-12 flex flex-wrap gap-3">
          <a
            href="https://book.squareup.com/appointments/ihz187drfo6900/location/LDGYV695G2H3H/services"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-cta group inline-flex items-center gap-3 px-9 lg:px-10 py-4 lg:py-5 rounded-full bg-background/95 backdrop-blur-md text-primary text-xs tracking-[0.25em] uppercase shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.45)] ring-1 ring-primary/5 hover:bg-background hover:shadow-[0_18px_50px_-10px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <span>Book an appointment now</span>
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-2 py-4 text-primary-foreground/90 hover:text-primary-foreground text-xs tracking-[0.25em] uppercase transition-colors rounded-md"
          >
            <span className="border-b border-primary-foreground/40 group-hover:border-primary-foreground pb-1">Services</span>
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Dots only */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-[2px] transition-all ${idx === i ? "w-10 bg-primary-foreground" : "w-5 bg-primary-foreground/60"}`}
          />
        ))}
      </div>

      {/* 10% OFF badge */}
      <a
        href="#newsletter"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center w-12 bg-accent text-accent-foreground text-xs tracking-[0.25em] uppercase py-6 [writing-mode:vertical-rl] rotate-180 hover:bg-sky transition"
      >
        10% off - gift card
      </a>
    </section>
  );
};
