import { useEffect, useState } from "react";
// scrolled state removed — bar now has a permanent dark background

const items = [
  "FIRST VISIT · ENJOY 10% OFF ANY SERVICE",
  "SERVICES OVER $100 · RECEIVE 10% OFF",
  "BRING A FRIEND · EACH OF YOU GETS 10% OFF",
  "LEAVE A REVIEW · GET $5 CREDIT ON YOUR NEXT VISIT",
];

export const AnnouncementBar = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % items.length), 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="fixed top-0 inset-x-0 z-50 text-primary-foreground text-[12px] sm:text-[13px] font-semibold tracking-[0.12em] sm:tracking-[0.18em] uppercase overflow-hidden h-10 flex items-center justify-center border-b border-white/15 bg-primary/90 backdrop-blur-sm"
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
