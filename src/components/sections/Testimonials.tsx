import { useEffect, useState } from "react";

const quotes = [
  {
    q: "My first time here. I must say this is the first time in a very very long time that I have been fully satisfied with a manicure. First of the studio is welcoming and very clean. Aida was brilliantly meticulous. I didn't feel rushed at all like most other places and the end result was fabulous. Money very well spent. Ladies dont waste your time and money going elsewhere. This is the place you need to be if you enjoy pampering yourself.",
    a: "Lauren J · 5 stars · 3 months ago"
  },
  {
    q: "Love my girl Aida! Been going to her for over a year and I always leave satisfied. I usually get the builder gel and my nails last 3+ weeks and they never crack or chip. While they were under construction I went to another salon & paid DOUBLE the price for a builder gel & a pedicure. Safe to say I am so happy they’re open up again!",
    a: "Anjelica Jauregui · 5 stars · 2 months ago"
  },
  {
    q: "I LOVED IT!! it was exactly what I asked for and Aiza was very friendly and welcoming about my suggestions and made changes without any hesitation. These look better than the ones I had before (same red cat eye ones) but this one matches my skin tone perfectly. You should check them out!",
    a: "Sonika M J · 5 stars · 2 months ago"
  },
  {
    q: "My nails have never been so healthy or this long, and it's all thanks to Aiza! It's honestly been a game changer. I will never go back to acrylic nails. Hard gel is 100% the way to go. In my picture, those are my natural nails - no nail extensions! That's freaking awesome! I've had 3 sessions so far with Aiza. I'm so glad I found her! I will say it can be pricey, BUT they last a really long time and it's so much better than acrylic. Great customer service, as well!",
    a: "Zhibek Almaz · 5 stars · 2 months ago"
  },
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
        <blockquote key={i} className="font-serif text-xl md:text-2xl lg:text-3xl leading-[1.2] text-accent-foreground text-balance animate-fade-in">
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