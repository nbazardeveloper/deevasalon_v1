import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slider1 from "@/assets/slider1.webp";
import slider2 from "@/assets/slider2.webp";
import slider3 from "@/assets/slider3.webp";
import heroMobileNeon from "@/assets/hero-mobile-neon.jpg";
import heroMobileSlide1 from "@/assets/hero-mobile-slide1.jpg";
import heroNeonTips from "@/assets/hero-neon-tips.jpg";
import { useIsMobile } from "@/hooks/use-mobile";

const desktopSlides = [
  { img: slider1, title: "Manicure\nExtensions\nPedicure", cta: "Book an appointment now" },
  { img: slider2, title: "Premier manicure\nin Chicago West Loop", cta: "Book an appointment now" },
  { img: slider3, title: "Non-toxic products\nWalk-ins welcome", cta: "Book an appointment now" },
];
const mobileSlides = [
  { img: heroNeonTips, title: "Manicure\nExtensions\nPedicure", cta: "Book an appointment now" },
  { img: heroMobileSlide1, title: "Premier manicure\nin Chicago West Loop", cta: "Book an appointment now" },
  { img: heroMobileNeon, title: "Bold neon tips\nthat turn heads", cta: "Book an appointment now" },
];

export const Hero = () => {
  const isMobile = useIsMobile();
  const slides = isMobile ? mobileSlides : desktopSlides;
  const [i, setI] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (pausedRef.current) return;
      setI((p) => (p + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (idx: number) => {
    setI((idx + slides.length) % slides.length);
    startTimer();
  };
  const prev = () => goTo(i - 1);
  const next = () => goTo(i + 1);
  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };
  const s = slides[i];

  return (
    <section
      className="relative -mt-[100px] lg:-mt-[116px] h-[100svh] lg:h-[100dvh] min-h-[680px] w-full overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      {slides.map((sl, idx) => (
        <img
          key={idx}
          src={sl.img}
          alt={idx === i ? sl.title.replace(/\n/g, " ") : ""}
          width={1920}
          height={1080}
          loading={idx === 0 ? "eager" : "lazy"}
          fetchPriority={idx === 0 ? "high" : "low"}
          decoding="async"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
            idx === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {/* Readability scrim — top for header, bottom for text + controls */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Giant brand mark */}
      <span
        key={`brand-${i}`}
        aria-hidden
        className="hidden lg:block font-serif text-primary-foreground absolute left-1/2 top-[28%] -translate-x-1/2 text-[22vw] leading-[0.8] tracking-tighter pointer-events-none opacity-40 mix-blend-overlay animate-fade-in"
      >
        DeeVa
      </span>

      {/* Slide title + CTA bottom-left */}
      <div className="absolute left-6 lg:left-16 bottom-16 lg:bottom-20 max-w-2xl">
        <h1
          key={`title-${i}`}
          className="font-display-serif text-primary-foreground text-4xl sm:text-5xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-[-0.01em] whitespace-pre-line animate-fade-up drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]"
        >
          {s.title}
        </h1>
        <div className="mt-10 lg:mt-12 flex flex-wrap gap-3 animate-fade-up-delayed">
          <a
            key={`cta-${i}`}
            href="https://www.vagaro.com/deevanailboutique/services" target="_blank" rel="noopener noreferrer"
            className="shine-cta group inline-flex items-center gap-3 px-9 lg:px-10 py-4 lg:py-5 rounded-full bg-background/95 backdrop-blur-md text-primary text-xs tracking-[0.25em] uppercase shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.45)] ring-1 ring-primary/5 hover:bg-background hover:shadow-[0_18px_50px_-10px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:bg-background focus-visible:-translate-y-0.5 focus-visible:shadow-[0_18px_50px_-10px_hsl(var(--primary)/0.55)] focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary/40 transition-all duration-300"
          >
            <span>{s.cta}</span>
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-2 py-4 text-primary-foreground/90 hover:text-primary-foreground text-xs tracking-[0.25em] uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60 rounded-md"
          >
            <span className="border-b border-primary-foreground/40 group-hover:border-primary-foreground pb-1">Services</span>
            <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>

      {/* Slide controls: arrows + dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6 px-3 py-0.5 rounded-full lg:bg-black/30 lg:backdrop-blur-md">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="group p-1 rounded-full text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/15 transition-all hover:-translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60"
        >
          <ChevronLeft size={24} strokeWidth={1.25} />
        </button>
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-[2px] transition-all ${idx === i ? "w-10 bg-primary-foreground" : "w-5 bg-primary-foreground/60"}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="group p-1 rounded-full text-primary-foreground/90 hover:text-primary-foreground hover:bg-white/15 transition-all hover:translate-x-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/60"
        >
          <ChevronRight size={24} strokeWidth={1.25} />
        </button>
      </div>

      {/* 10% OFF floating badge */}
      <a
        href="#newsletter"
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center w-12 bg-accent text-accent-foreground text-xs tracking-[0.25em] uppercase py-6 [writing-mode:vertical-rl] rotate-180 hover:bg-sky transition"
      >
        10% Off · Subscribe
      </a>
    </section>
  );
};