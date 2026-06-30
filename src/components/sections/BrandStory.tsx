import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import img1 from "@/assets/aboutus/deeva-nail-boutique-chicago-studio.webp";
import img2 from "@/assets/aboutus/deeva-nail-boutique-west-loop-interior.webp";
import img3 from "@/assets/aboutus/deeva-nail-boutique-manicure-station.webp";
import img4 from "@/assets/aboutus/deeva-nail-boutique-salon-atmosphere.webp";
import img5 from "@/assets/aboutus/deeva-nail-boutique-nail-art-chicago.webp";
import videoSrc from "@/assets/aboutus/deeva-nail-boutique-interior-tour.webm";

const photos = [
  { src: img1, alt: "DEEVA Nail Boutique – Chicago studio" },
  { src: img2, alt: "DEEVA Nail Boutique – West Loop interior" },
  { src: img3, alt: "DEEVA Nail Boutique – manicure station" },
  { src: img4, alt: "DEEVA Nail Boutique – salon atmosphere" },
  { src: img5, alt: "DEEVA Nail Boutique – nail art Chicago" },
];

export const BrandStory = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  // Lazy-load video on scroll
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = "metadata";
          video.load();
          video.play().catch(() => {});
          observer.disconnect();
        }
      },
      { rootMargin: "300px" }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Lightbox keyboard nav
  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((p) => ((p ?? 0) + 1) % photos.length);
      if (e.key === "ArrowLeft") setLightbox((p) => ((p ?? 0) - 1 + photos.length) % photos.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  // Drag-to-scroll on strip
  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    const onDown = (e: MouseEvent) => { isDown = true; startX = e.pageX - el.offsetLeft; scrollLeft = el.scrollLeft; el.style.cursor = "grabbing"; };
    const onUp = () => { isDown = false; el.style.cursor = "grab"; };
    const onMove = (e: MouseEvent) => { if (!isDown) return; e.preventDefault(); el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX); };
    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    el.addEventListener("mousemove", onMove);
    return () => { el.removeEventListener("mousedown", onDown); window.removeEventListener("mouseup", onUp); el.removeEventListener("mousemove", onMove); };
  }, []);

  return (
    <section id="discover" ref={sectionRef} className="py-20 lg:py-28 bg-secondary/40 overflow-hidden">

      {/* ── Top: Text + Video ── */}
      <div className="px-6 lg:px-12 mx-auto max-w-[1600px] grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 lg:gap-14 items-center mb-10 lg:mb-14">

        {/* Text */}
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-4">Our story</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6 text-balance">
            Precise, non-toxic manicures crafted to feel as polished as they look.
          </h2>
          <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-5">
            DEEVA is a premier nail boutique in Chicago's West Loop, built by nail artists who
            believe a manicure should feel as considered as the rest of your routine — calm space,
            sterilized tools, non-toxic products, detail-obsessed technique.
          </p>
          <p className="text-lg font-medium text-muted-foreground leading-relaxed mb-8">
            From classic Russian manicures to Gel-X extensions and luxury pedicures, every service
            is shaped around your nails — never rushed, never templated.
          </p>
          <a
            href="https://book.squareup.com/appointments/ihz187drfo6900/location/LDGYV695G2H3H/services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-7 py-3.5 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.2em] uppercase shadow-[0_10px_30px_-10px_hsl(var(--brand)/0.6)] hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300"
          >
            Book an appointment
          </a>
        </div>

        {/* Portrait video */}
        <div className="w-full mx-auto lg:mx-0 shrink-0">
          <div className="aspect-[9/16] overflow-hidden rounded-[1.5rem] bg-secondary shadow-xl">
            <video
              ref={videoRef}
              preload="none"
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              aria-label="DEEVA Nail Boutique – interior and exterior tour"
            >
              <source src={videoSrc} type="video/webm" />
            </video>
          </div>
        </div>
      </div>

      {/* ── Bottom: Horizontal scroll strip ── */}
      <div className="px-6 lg:px-12 mx-auto max-w-[1600px]">
      <div
        ref={stripRef}
        className="flex gap-3 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory"
        style={{ cursor: "grab", scrollbarWidth: "none" }}
      >
        {photos.map((p, idx) => (
          <button
            key={idx}
            onClick={() => setLightbox(idx)}
            className="group relative shrink-0 h-[280px] lg:h-[360px] aspect-[3/4] overflow-hidden rounded-[1.25rem] snap-start focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            aria-label={p.alt}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </button>
        ))}
      </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && typeof document !== "undefined" && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Закрыть"
          >
            <X className="w-6 h-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition text-2xl leading-none"
            aria-label="Предыдущее"
          >←</button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
          />
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition text-2xl leading-none"
            aria-label="Следующее"
          >→</button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
            {lightbox + 1} / {photos.length}
          </p>
        </div>,
        document.body
      )}
    </section>
  );
};
