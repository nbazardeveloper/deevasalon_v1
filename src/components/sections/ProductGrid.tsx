import p1 from "@/assets/product-1.webp";
import p2 from "@/assets/product-2.webp";
import p3 from "@/assets/product-3.webp";
import p4 from "@/assets/product-4.webp";
import { spotlightPrices } from "@/data/prices";

type Product = { img: string; tag?: string; name: string; type: string; price: string };

const services: Product[] = [
  { img: p1, tag: "Manicure",   name: "Russian Manicure",      type: "Dry technique · 2–3 weeks of wear", price: spotlightPrices.russianManicure },
  { img: p2, tag: "Extensions", name: "Gel-X Extensions",       type: "Soft-gel tips · full set",          price: spotlightPrices.gelXFullSet     },
  { img: p3, tag: "Manicure",   name: "Gel Overlay & Fill-In",  type: "Strength + glossy finish",          price: spotlightPrices.gelOverlay       },
  { img: p4, tag: "Pedicure",   name: "Deluxe Pedicure",        type: "Soak, scrub, massage, gel",         price: spotlightPrices.deluxePedicure   },
];

const newIn: Product[] = [
  { img: p3, tag: "New",     name: "Hard-Gel Manicure", type: "Sculpted strength for natural nails", price: spotlightPrices.hardGelManicure  },
  { img: p4, tag: "New",     name: "Luxury Pedicure",   type: "Extended massage + paraffin",         price: spotlightPrices.luxuryPedicure   },
  { img: p1, tag: "Limited", name: "Golden Pedicure",   type: "Signature ritual · 90 min",           price: spotlightPrices.goldenPedicure   },
  { img: p2, tag: "New",     name: "Dip Powder Set",    type: "Lightweight, long-wear color",         price: spotlightPrices.dipPowderSet     },
];

const Card = ({ p }: { p: Product }) => (
  <a href="#shop" className="group block">
    <div className="relative aspect-[4/5] overflow-hidden bg-secondary rounded-[2rem]">
      <img
        src={p.img}
        alt={p.name}
        loading="lazy"
        width={800}
        height={1000}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
      {p.tag && (
        <span className="absolute top-4 left-4 bg-brand text-brand-foreground font-serif italic text-base px-4 py-1 rounded-full shadow-sm">
          {p.tag}
        </span>
      )}
      <button
        type="button"
        className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-brand text-brand-foreground text-xs tracking-[0.2em] uppercase py-3 rounded-full hover:bg-brand-deep"
      >
        Book this service
      </button>
    </div>
    <div className="mt-5 flex items-start justify-between gap-4">
      <div>
        <h3 className="font-serif text-xl text-primary">{p.name}</h3>
        <p className="text-muted-foreground mt-1">{p.type}</p>
      </div>
      <span className="text-brand-deep font-medium mt-1">{p.price}</span>
    </div>
  </a>
);

export const Bestsellers = () => (
  <section id="services-grid" className="pt-0 pb-20 lg:pb-28 px-6 lg:px-12">
    <div className="mx-auto max-w-[1600px]">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
        {services.map((p) => <Card key={p.name} p={p} />)}
      </div>
    </div>
  </section>
);

export const NewIn = () => (
  <section className="py-20 lg:py-28 px-6 lg:px-12 bg-secondary/40">
    <div className="mx-auto max-w-[1600px]">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Just Added</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-primary">New Services</h2>
        </div>
        <a href="https://book.squareup.com/appointments/ihz187drfo6900/location/LDGYV695G2H3H/services" target="_blank" rel="noopener noreferrer" className="text-xs tracking-[0.25em] uppercase text-brand border-b border-brand pb-1 hover:text-brand-deep hover:border-brand-deep transition">
          See all new →
        </a>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
        {newIn.map((p) => <Card key={p.name} p={p} />)}
      </div>
    </div>
  </section>
);