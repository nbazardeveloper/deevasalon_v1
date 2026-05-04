import { Instagram, Facebook, Youtube, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type Item = { label: string; href: string };
const cols: { t: string; l: Item[] }[] = [
  { t: "Services", l: [
    { label: "Russian Manicure", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Gel-X & Extensions", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Dip Powder", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Hard-Gel", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Pedicures", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Gift Cards", href: "https://www.vagaro.com/deevanailboutique" },
  ]},
  { t: "Visit", l: [
    { label: "West Loop, Chicago", href: "#visit" },
    { label: "Hours & Walk-Ins", href: "#visit" },
    { label: "Book Online", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Parking", href: "#visit" },
    { label: "Contact", href: "#visit" },
  ]},
  { t: "Info", l: [
    { label: "Pricing", href: "#pricing" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ]},
];

export const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer className="bg-secondary text-primary px-6 lg:px-12 pt-16 pb-10">
      <div className="mx-auto max-w-[1600px]">


        {/* Columns */}
        <div className="grid lg:grid-cols-5 lg:gap-12 mb-12">
          <div className="lg:col-span-1 mb-10 lg:mb-0">
            <div className="mb-6">
              <div className="font-serif text-3xl tracking-[0.3em]">DeeVa</div>
              <div className="text-xs tracking-[0.4em] uppercase opacity-70 mt-1">Nail Boutique</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premier nail boutique in Chicago’s West Loop. Non-toxic products. Walk-ins welcome.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://www.instagram.com/deeva_nailboutique/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Facebook" className="hover:opacity-60 transition"><Facebook className="w-5 h-5" /></a>
              <a href="#" aria-label="Youtube" className="hover:opacity-60 transition"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>
          {cols.map((c) => {
            const isOpen = openCol === c.t;
            return (
              <div key={c.t} className="border-b border-border lg:border-0">
                {/* Mobile: accordion trigger */}
                <button
                  type="button"
                  onClick={() => setOpenCol(isOpen ? null : c.t)}
                  aria-expanded={isOpen}
                  aria-controls={`footer-col-${c.t}`}
                  className="lg:hidden w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{c.t}</span>
                  {isOpen
                    ? <Minus className="w-4 h-4 text-brand-deep" />
                    : <Plus  className="w-4 h-4 text-brand-deep" />}
                </button>
                {/* Desktop: static heading */}
                <p className="hidden lg:block text-xs uppercase tracking-[0.25em] mb-5 text-muted-foreground">{c.t}</p>

                <ul
                  id={`footer-col-${c.t}`}
                  className={`space-y-3 text-sm overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 pb-5" : "max-h-0 lg:max-h-none"
                  } lg:block`}
                >
                  {c.l.map((i) => (
                    <li key={i.label}>
                      <a
                        href={i.href}
                        target={i.href.startsWith("http") ? "_blank" : undefined}
                        rel={i.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hover:opacity-60 transition"
                      >
                        {i.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} DeeVa Nail Boutique. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-primary transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
