const reviews = [
  {
    q: "My first time here. This is the first time in a very long time that I've been fully satisfied with a manicure. The studio is welcoming and very clean. Aida was brilliantly meticulous — I didn't feel rushed at all. Money very well spent.",
    a: "Lauren J.",
    stars: 5,
    date: "3 months ago",
  },
  {
    q: "Love my girl Aida! Been going to her for over a year and I always leave satisfied. I usually get the builder gel and my nails last 3+ weeks and they never crack or chip.",
    a: "Anjelica J.",
    stars: 5,
    date: "2 months ago",
  },
  {
    q: "I LOVED IT!! It was exactly what I asked for and Aiza was very friendly and welcoming. These look better than the ones I had before but this one matches my skin tone perfectly. You should check them out!",
    a: "Sonika M.",
    stars: 5,
    date: "2 months ago",
  },
  {
    q: "My nails have never been so healthy or this long, and it's all thanks to Aiza! It's honestly been a game changer. I will never go back to acrylic nails. Hard gel is 100% the way to go.",
    a: "Zhibek A.",
    stars: 5,
    date: "2 months ago",
  },
  {
    q: "The attention to detail here is unreal. Every single nail is perfect. I drove 45 minutes and it was absolutely worth it. Already booked my next appointment before I left.",
    a: "Maria T.",
    stars: 5,
    date: "1 month ago",
  },
  {
    q: "Clean, calm, professional. Exactly what I needed after too many bad experiences elsewhere. The Russian manicure lasted almost 4 weeks without lifting. Highly recommend.",
    a: "Jessica L.",
    stars: 5,
    date: "3 weeks ago",
  },
];

const Stars = ({ n }: { n: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: n }).map((_, i) => (
      <span key={i} className="text-brand text-sm">★</span>
    ))}
  </div>
);

export const Testimonials = () => (
  <section id="reviews" className="py-20 lg:py-28 px-6 lg:px-12 bg-accent">
    <div className="mx-auto max-w-[1400px]">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Reviews</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
          Loved by our clients
        </h2>
        <a
          href="https://www.google.com/search?q=DeeVa+Nail+Boutique+Chicago+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-5 text-brand-deep hover:opacity-70 transition"
        >
          <span className="text-lg font-semibold">4.8 ★</span>
          <span className="text-muted-foreground">· Reviews on Google</span>
        </a>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {reviews.map((r, idx) => (
          <div
            key={r.a}
            className={`break-inside-avoid bg-background rounded-2xl p-7 shadow-sm border border-border/50 ${idx >= 3 ? "hidden sm:block" : ""}`}
          >
            <Stars n={r.stars} />
            <p className="mt-4 text-primary leading-relaxed">"{r.q}"</p>
            <div className="mt-5 flex items-center justify-between">
              <span className="font-semibold text-primary">{r.a}</span>
              <span className="text-sm text-muted-foreground">{r.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="https://www.google.com/search?q=DeeVa+Nail+Boutique+Chicago+reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition text-sm tracking-[0.15em] uppercase"
        >
          See all reviews on Google
        </a>
      </div>
    </div>
  </section>
);
