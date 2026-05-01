import { Calendar } from "lucide-react";
import { useEffect, useState } from "react";

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
    <a
      href="https://www.vagaro.com/deevanailboutique/services"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book an appointment"
      className={`lg:hidden fixed right-5 z-40 inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand text-brand-foreground shadow-[0_10px_30px_-8px_hsl(var(--brand)/0.7)] transition-all duration-500 ease-out will-change-transform hover:scale-110 active:scale-95 ${
        show
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-8 scale-75 pointer-events-none"
      }`}
      style={{ bottom: "calc(env(safe-area-inset-bottom, 0px) + 1.25rem)" }}
    >
      <Calendar className="w-5 h-5" />
    </a>
  );
};
