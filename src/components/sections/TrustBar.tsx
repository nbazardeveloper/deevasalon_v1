import { useEffect, useRef, useState } from "react";

type Stat = { value: number; suffix?: string; label: string };

const stats: Stat[] = [
  { value: 2000, suffix: "+", label: "Happy clients" },
  { value: 5.0, label: "Google rating" },
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

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-3xl md:text-4xl text-brand leading-none">
        {fmt(count, isFloat)}
        {stat.suffix && <span>{stat.suffix}</span>}
        {stat.label === "Google rating" && <span className="text-brand-deep"> ★</span>}
      </div>
      <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] text-muted-foreground mt-2">
        {stat.label}
      </p>
    </div>
  );
};

export const TrustBar = () => (
  <section
    aria-label="Trust signals"
    className="py-10 md:py-12 px-6 lg:px-12 bg-secondary/40 border-y border-border"
  >
    <div className="mx-auto max-w-[1400px] grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
      {stats.map((s) => (
        <Counter key={s.label} stat={s} />
      ))}
    </div>
  </section>
);
