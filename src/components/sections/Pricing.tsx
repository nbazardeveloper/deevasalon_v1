import { useState } from "react";
import { manicures, pedicures, kids, addons, removals, type PriceItem } from "@/data/prices";
import { SQUARE_BOOKING_URL, VAGARO_BOOKING_URL } from "@/data/booking";

type Item = PriceItem;

const tabs = ["Manicures", "Pedicures", "Kids", "Add-Ons"] as const;
type Tab = typeof tabs[number];

const Column = ({ items }: { items: Item[] }) => (
  <ul className="space-y-6">
    {items.map((it) => (
      <li key={it.name}>
        <div className="flex items-end gap-3">
          <span className="font-serif text-xl lg:text-2xl text-primary">{it.name}</span>
          <span className="flex-1 border-b border-dotted border-border translate-y-[-6px]" />
          <span className="font-serif text-xl lg:text-2xl text-brand whitespace-nowrap">{it.price}</span>
        </div>
        {it.desc && <p className="text-muted-foreground italic mt-1">{it.desc}</p>}
      </li>
    ))}
  </ul>
);

export const Pricing = () => {
  const [active, setActive] = useState<Tab>("Manicures");

  return (
    <section id="pricing" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Pricing</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-primary">Services & rates</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Transparent pricing for every service in our West Loop studio.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-12 flex-wrap">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-6 py-2.5 rounded-full text-xs tracking-[0.2em] uppercase transition-all duration-200 ${
                active === t
                  ? "bg-brand text-brand-foreground shadow-[0_6px_20px_-6px_hsl(var(--brand)/0.5)]"
                  : "text-muted-foreground hover:text-primary border border-border"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-[900px] mx-auto">
          {active === "Manicures" && <Column items={manicures} />}
          {active === "Pedicures" && <Column items={pedicures} />}
          {active === "Kids" && (
            <div>
              <Column items={kids} />
            </div>
          )}
          {active === "Add-Ons" && (
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-6">Add-Ons</p>
                <Column items={addons} />
              </div>
              <div className="mt-10 md:mt-0">
                <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-6">Removals</p>
                <Column items={removals} />
                <p className="text-muted-foreground mt-6 leading-relaxed">
                  Our removal manicure includes careful removal of product, buffing the nail bed, shaping, cuticle care, and nail strengthening treatment.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-16">
          <a
            href={SQUARE_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.25em] uppercase shadow-[0_10px_30px_-10px_hsl(var(--brand)/0.6)] hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300"
          >
            Book on Square
          </a>
          <a
            href={VAGARO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex px-8 py-4 rounded-full border border-brand text-brand text-xs tracking-[0.25em] uppercase hover:bg-brand hover:text-brand-foreground hover:-translate-y-0.5 transition-all duration-300"
          >
            Book on Vagaro
          </a>
        </div>
      </div>
    </section>
  );
};
