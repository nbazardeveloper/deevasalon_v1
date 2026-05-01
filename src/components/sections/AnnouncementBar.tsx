import { useEffect, useState } from "react";

const items = [
  "WALK-INS WELCOME · CHICAGO WEST LOOP",
  "NON-TOXIC PRODUCTS · CLEAN STUDIO",
  "BOOK ONLINE — SAME-DAY APPOINTMENTS",
  "RUSSIAN MANICURE · GEL-X · DIP POWDER · HARD-GEL",
];

export const AnnouncementBar = () => {
  const [i, setI] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 inset-x-0 z-50 text-primary-foreground text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase py-2.5 overflow-hidden h-9 flex items-center justify-center border-b transition-colors duration-300 ${
        scrolled
          ? "bg-primary backdrop-blur-sm border-white/20"
          : "bg-transparent border-white/60"
      }`}
    >
      <span
        key={i}
        className="block whitespace-nowrap animate-slide-up-fade"
      >
        {items[i]}
      </span>
    </div>
  );
};
