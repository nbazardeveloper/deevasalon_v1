import story from "@/assets/story.webp";

export const BrandStory = () => (
  <section id="discover" className="py-20 lg:py-28 px-6 lg:px-12 bg-secondary/40">
    <div className="mx-auto max-w-[1500px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div className="aspect-[4/5] overflow-hidden rounded-[2rem]">
        <img
          src={story}
          alt="Inside the DeeVa Nail Boutique studio"
          loading="lazy"
          width={1200}
          height={1400}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-xl">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-4">Our story</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] mb-6 text-balance">
          Precise, non-toxic manicures crafted to feel as polished as they look.
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          DeeVa is a premier nail boutique in Chicago’s West Loop, built by nail artists who
          believe a manicure should feel as considered as the rest of your routine — calm space,
          sterilized tools, non-toxic products, detail-obsessed technique.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-10">
          From classic Russian manicures to Gel-X extensions and luxury pedicures, every service
          is shaped around your nails — never rushed, never templated.
        </p>
        <a
          href="https://www.vagaro.com/deevanailboutique/services"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex px-7 py-3.5 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.2em] uppercase shadow-[0_10px_30px_-10px_hsl(var(--brand)/0.6)] hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300"
        >
          Book an appointment
        </a>
      </div>
    </div>
  </section>
);
