import { Instagram, Facebook, Youtube, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

type Item = { label: string; href: string };
const cols: { t: string; l: Item[] }[] = [
  { t: "Services", l: [
    { label: "Russian Manicure", href: "#categories" },
    { label: "Gel-X & Extensions", href: "#categories" },
    { label: "Dip Powder", href: "#categories" },
    { label: "Hard-Gel", href: "#categories" },
    { label: "Pedicures", href: "#categories" },
    { label: "Gift Cards", href: "https://www.vagaro.com/deevanailboutique" },
  ]},
  { t: "Visit", l: [
    { label: "West Loop, Chicago", href: "#visit" },
    { label: "Hours & Walk-Ins", href: "#visit" },
    { label: "Book Online", href: "https://www.vagaro.com/deevanailboutique/services" },
    { label: "Parking", href: "#visit" },
    { label: "Contact", href: "#visit" },
  ]},
  { t: "Studio", l: [
    { label: "Our Story", href: "#story" },
    { label: "Non-Toxic Products", href: "#story" },
    { label: "Sanitation", href: "#story" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
  ]},
  { t: "Info", l: [
    { label: "Pricing", href: "#pricing" },
    { label: "Aftercare", href: "#" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Accessibility", href: "#" },
  ]},
];

export const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [openCol, setOpenCol] = useState<string | null>(null);

  return (
    <footer className="bg-secondary text-primary px-6 lg:px-12 pt-16 pb-10">
      <div className="mx-auto max-w-[1600px]">
        {/* Newsletter strip */}
        <div
          id="newsletter"
          className="border-y border-border py-10 mb-14 grid md:grid-cols-2 gap-6 md:gap-10 items-center"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-2">Stay in touch</p>
            <h3 className="font-serif text-2xl md:text-3xl leading-tight">
              Get $15 off your first visit.
            </h3>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              toast({ title: "Welcome to DeeVa", description: "Check your inbox for your $15-off code." });
              setEmail("");
            }}
            className="flex border-b border-primary/40 focus-within:border-primary transition"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              aria-label="Email for newsletter"
              className="flex-1 bg-transparent py-3 px-1 placeholder:text-muted-foreground outline-none text-primary"
            />
            <button
              type="submit"
              className="text-xs tracking-[0.25em] uppercase px-4 text-brand-deep hover:text-brand transition"
            >
              Subscribe →
            </button>
          </form>
        </div>

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
              <a href="https://instagram.com/deeva.nailboutique" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-60 transition">
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
