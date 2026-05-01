import { useEffect, useState } from "react";

const quotes = [
  { q: "Cleanest manicure I’ve had in Chicago. Three weeks in and still flawless.", a: "Elena S., West Loop" },
  { q: "The Russian manicure here is on another level — calm space, perfect shape.", a: "Marta L., River North" },
  { q: "My new go-to for Gel-X. Beautiful studio, kind team, zero rush.", a: "Anya P., Fulton Market" },
];

export const Testimonials = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % quotes.length), 6000);
    return () => clearInterval(id);
  }, []);
  return (
    <section id="reviews" className="py-24 lg:py-32 px-6 bg-accent">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-accent-foreground mb-8">Loved by you</p>
        <blockquote key={i} className="font-serif text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-accent-foreground text-balance animate-fade-in">
          “{quotes[i].q}”
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.25em] text-accent-foreground">{quotes[i].a}</p>
        <div className="mt-10 flex justify-center gap-2">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-[2px] transition-all ${idx === i ? "w-12 bg-accent-foreground" : "w-6 bg-accent-foreground/30"}`}
              aria-label={`Quote ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};