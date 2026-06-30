import { useEffect, useRef, useState } from "react";

const GOOGLE_URL = "https://www.google.com/search?q=DeeVa+Nail+Boutique+Chicago+reviews";

type Stat = { value: number; suffix?: string; label: string; link?: string; sub?: string };

const stats: Stat[] = [
  { value: 2000, suffix: "+", label: "Happy clients" },
  {
    value: 4.8,
    label: "Google rating",
    link: GOOGLE_URL,
    sub: "Google reviews",
  },
  { value: 5, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "%", label: "Non-toxic" },
];

const fmt = (n: number, isFloat: boolean) =>
  isFloat ? n.toFixed(1) : Math.round(n).toLocaleString("en-US");

const Counter = ({ stat }: { stat: Stat }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const isFloat = stat.value % 1 !== 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1500;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setCount(stat.value * eased);
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [stat.value]);

  const inner = (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand leading-none">
        {fmt(count, isFloat)}
        {stat.suffix && <span>{stat.suffix}</span>}
        {stat.label === "Google rating" && <span className="text-brand-deep"> ★</span>}
      </div>
      <p className="text-sm md:text-base font-semibold uppercase tracking-[0.18em] text-muted-foreground mt-3">
        {stat.label}
      </p>
      {stat.sub && (
        <p className="text-sm text-muted-foreground/70 mt-1 tracking-wide">
          {stat.sub}
        </p>
      )}
    </div>
  );

  if (stat.link) {
    return (
      <a
        href={stat.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-70 transition-opacity"
        aria-label={`${stat.label} — see our Google reviews`}
      >
        {inner}
      </a>
    );
  }

  return inner;
};

export const TrustBar = () => (
  <section
    aria-label="Trust signals"
    className="py-14 md:py-20 px-6 lg:px-12 bg-secondary/40 border-y border-border"
  >
    <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
      {stats.map((s) => (
        <Counter key={s.label} stat={s} />
      ))}
    </div>
  </section>
);
