import coffeeSvg from "@/assets/icons/coffee.svg?raw";
import featherSvg from "@/assets/icons/feather.svg?raw";
import sunSvg from "@/assets/icons/sun.svg?raw";
import doorSvg from "@/assets/icons/door.svg?raw";

const items = [
  {
    svg: sunSvg,
    title: "Clean & safe — always",
    desc: "Non-toxic brands only: Dazzle Dry, CND, and more. Every tool is autoclaved between clients — you'll always see us open a fresh kit.",
  },
  {
    svg: featherSvg,
    title: "Russian manicure specialists",
    desc: "E-file technique for a flawless, long-lasting finish. It's not a side service — it's our signature. We trained specifically in this method.",
  },
  {
    svg: coffeeSvg,
    title: "Never rushed",
    desc: "Each appointment is blocked out fully. No double-booking. Your nails get exactly the time they need to be done right.",
  },
  {
    svg: doorSvg,
    title: "Walk-ins welcome",
    desc: "No appointment? Walk in — we'll take care of you. Online booking is the fastest way to lock in your favorite time slot.",
  },
];

export const Differentiators = () => (
  <section className="py-20 lg:py-28 px-6 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Why DEEVA</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05] text-balance">
          The difference you'll feel from the first visit.
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {items.map((item) => (
          <div key={item.title} className="flex flex-col gap-5">
            {/* Large icon + title side by side */}
            <div className="flex items-center gap-5">
              <div
                aria-hidden
                className="w-16 h-16 shrink-0 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-[hsl(var(--brand-deep))]"
                dangerouslySetInnerHTML={{ __html: item.svg }}
              />
              <h3 className="font-serif text-xl lg:text-2xl text-primary leading-snug">{item.title}</h3>
            </div>
            {/* Description full width below */}
            <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
