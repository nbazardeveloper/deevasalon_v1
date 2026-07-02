import { useState } from "react";
import { Plus } from "lucide-react";
import manicureImg from "@/assets/ourwork/deeva-manicure-nail-boutique-chicago-2.webp";
import pedicureImg from "@/assets/ourwork/deeva-manicure-nail-boutique-chicago-1.webp";
import { manicureServices, pedicureServices, type ServiceItem } from "@/data/prices";

type Service = ServiceItem;

const categories: { key: string; title: string; img: string; services: Service[] }[] = [
  { key: "manicures", title: "Manicures", img: manicureImg, services: manicureServices },
  { key: "pedicures", title: "Pedicures", img: pedicureImg, services: pedicureServices },
];

export const Categories = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 px-6 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Our services</p>
          <h2 className="font-serif text-5xl lg:text-6xl text-primary">Tap to explore</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat) => {
            const isOpen = open === cat.key;
            return (
              <div key={cat.key} className="bg-secondary border border-border rounded-[2rem] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : cat.key)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${cat.key}`}
                  className="group block w-full text-left"
                >
                  <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      loading="lazy"
                      width={896}
                      height={1120}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                      <h3 className="font-serif text-3xl lg:text-4xl text-white">{cat.title}</h3>
                      <span
                        className={`flex items-center justify-center w-12 h-12 rounded-full bg-brand text-brand-foreground transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                        aria-hidden
                      >
                        <Plus className="w-6 h-6" />
                      </span>
                    </div>
                  </div>
                </button>

                <div
                  id={`panel-${cat.key}`}
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="px-6 lg:px-8 py-8 space-y-5">
                      {cat.services.map((s) => (
                        <li key={s.name}>
                          <div className="flex items-end gap-3">
                            <span className="font-serif text-lg lg:text-xl text-primary">{s.name}</span>
                            <span className="flex-1 border-b border-dotted border-border translate-y-[-6px]" />
                            <span className="font-serif text-lg lg:text-xl text-brand">{s.price}</span>
                          </div>
                          {s.desc && (
                            <p className="text-muted-foreground italic mt-1">{s.desc}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                    <div className="px-6 lg:px-8 pb-8">
                      <a
                        href="https://book.squareup.com/appointments/ihz187drfo6900/location/LDGYV695G2H3H/services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full justify-center px-6 py-4 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.25em] uppercase hover:bg-brand-deep transition"
                      >
                        Book {cat.title}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
