import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { SQUARE_BOOKING_URL, VAGARO_BOOKING_URL } from "@/data/booking";

export const StickyMobileCTA = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after the user scrolls past most of the hero (≈ 80vh)
      setShow(window.scrollY > window.innerHeight * 0.8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`lg:hidden fixed right-5 z-40 flex flex-col items-end gap-2 transition-all duration-500 ease-out will-change-transform ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      <a
        href={SQUARE_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment on Square"
        title="Book on Square"
        className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand text-brand-foreground shadow-[0_10px_30px_-8px_hsl(var(--brand)/0.7)] hover:scale-110 active:scale-95 transition-transform"
      >
        <Calendar className="w-5 h-5" />
      </a>
      <a
        href={VAGARO_BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book an appointment on Vagaro"
        title="Book on Vagaro"
        className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-background text-brand border border-brand shadow-[0_10px_24px_-8px_rgba(0,0,0,0.25)] hover:scale-110 active:scale-95 transition-transform"
      >
        <Calendar className="w-4 h-4" />
      </a>
    </div>
  );
};
