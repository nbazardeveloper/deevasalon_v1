type Item = { name: string; desc: string; price: string };

const manicures: Item[] = [
  { name: "Classic Manicure", desc: "30 min", price: "$35" },
  { name: "Dazzle Dry Manicure", desc: "30 min", price: "$40" },
  { name: "No Chip Manicure", desc: "Removal & cuticle cleaning included", price: "$55" },
  { name: "Dip Powder", desc: "Removal & cuticle cleaning · 50 min", price: "$65" },
  { name: "Builder Gel / Overlay", desc: "85 min", price: "$80" },
  { name: "Builder / Hard Gel Fill", desc: "65 min", price: "$80" },
  { name: "Hard Gel", desc: "90 min", price: "$85" },
  { name: "Russian Manicure w/ Strengthening", desc: "90 min", price: "$85" },
  { name: "Gel X Fill", desc: "80 min", price: "$85" },
  { name: "Gel X Set", desc: "90 min", price: "$90" },
  { name: "Acrylic Fill", desc: "70 min", price: "$80" },
  { name: "Acrylic Full Set (with AcryGel)", desc: "95 min", price: "$95" },
  { name: "Gel Full Set Extensions", desc: "100 min", price: "$110" },
];

const pedicures: Item[] = [
  { name: "Classic Pedicure", desc: "35 min", price: "$45" },
  { name: "Dazzle Dry Pedicure", desc: "40 min", price: "$50" },
  { name: "SPA Deluxe Pedicure", desc: "50 min", price: "$60" },
  { name: "No Chip Pedicure", desc: "60 min", price: "$65" },
  { name: "Russian Dry Pedicure", desc: "60 min", price: "$75" },
  { name: "Manicure & Pedicure Combo", desc: "70 min", price: "$75" },
  { name: "Luxury Spa Pedicure", desc: "70 min", price: "$85" },
  { name: "Golden Spa Pedicure", desc: "90 min", price: "$98" },
];

const Column = ({ kicker, title, items }: { kicker: string; title: string; items: Item[] }) => (
  <div>
    <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">{kicker}</p>
    <h3 className="font-serif text-4xl lg:text-5xl text-primary mb-10">{title}</h3>
    <ul className="space-y-7">
      {items.map((it) => (
        <li key={it.name}>
          <div className="flex items-end gap-3">
            <span className="font-serif text-xl lg:text-2xl text-primary">{it.name}</span>
            <span className="flex-1 border-b border-dotted border-border translate-y-[-6px]" />
            <span className="font-serif text-xl lg:text-2xl text-brand">{it.price}</span>
          </div>
          <p className="text-sm text-muted-foreground italic mt-1">{it.desc}</p>
        </li>
      ))}
    </ul>
  </div>
);

export const Pricing = () => (
  <section id="pricing" className="py-20 lg:py-28 px-6 lg:px-12">
    <div className="mx-auto max-w-[1400px]">
      <div className="text-center mb-16">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Pricing</p>
        <h2 className="font-serif text-5xl lg:text-6xl text-primary">Services & rates</h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Transparent pricing for every service in our West Loop studio. Add-ons available at booking.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <Column kicker="Hands" title="Manicures" items={manicures} />
        <Column kicker="Feet" title="Pedicures" items={pedicures} />
      </div>
      <div className="text-center mt-16">
        <a
          href="https://www.vagaro.com/deevanailboutique/services" target="_blank" rel="noopener noreferrer"
          className="inline-flex px-8 py-4 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.25em] uppercase shadow-[0_10px_30px_-10px_hsl(var(--brand)/0.6)] hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
        >
          Book an appointment now
        </a>
      </div>
    </div>
  </section>
);
