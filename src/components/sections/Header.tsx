import { Phone, Menu, X, Instagram } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const PHONE_DISPLAY = "(312) 841-7587";
const PHONE_HREF = "tel:+13128417587";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Studio", href: "#discover" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#newsletter" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
    <header
      className={`sticky top-9 z-40 transition-colors duration-300 ${
        open || scrolled
          ? "bg-background/95 backdrop-blur border-b border-border text-primary"
          : "bg-transparent text-primary-foreground"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-16 lg:h-20 grid grid-cols-3 items-center text-sm lg:text-[0.95rem] tracking-[0.18em] uppercase">
        {/* Left col */}
        <div className="flex items-center">
          <nav className="hidden xl:flex items-center gap-8 font-medium">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-60 transition">
                {l.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="xl:hidden p-2"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Center col — logo */}
        <a
          href="/"
          className="flex flex-col items-center justify-self-center leading-none [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]"
        >
          <span className="font-serif font-bold text-[2.25rem] lg:text-[3rem] tracking-[0.15em] leading-none">
            DeeVa
          </span>
          <span className="text-[9px] lg:text-[11px] tracking-[0.4em] uppercase opacity-80 mt-1">
            Nail Boutique
          </span>
        </a>

        {/* Right col */}
        <div className="flex items-center justify-end gap-3 lg:gap-5">
          <a
            href="https://www.vagaro.com/deevanailboutique/services" target="_blank" rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center px-5 py-2.5 rounded-full bg-brand text-brand-foreground hover:bg-brand-deep transition text-xs tracking-[0.25em] uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Book now
          </a>
          <a
            href={PHONE_HREF}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex items-center justify-center p-2.5 rounded-full bg-brand text-brand-foreground hover:bg-brand-deep transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <Phone className="w-4 h-4" />
          </a>
        </div>
      </div>

    </header>
    {typeof document !== "undefined" &&
      createPortal(
        <div
          className={`fixed inset-0 z-[60] xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
          aria-hidden={!open}
        >
          <div
            className={`absolute inset-0 bg-primary/50 transition-opacity duration-300 ${
              open ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setOpen(false)}
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className={`absolute left-0 top-0 h-full w-[85%] max-w-sm bg-background p-8 shadow-2xl transition-transform duration-300 ease-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-end items-center mb-10">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-2 -mr-2 hover:opacity-60 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Menu</p>
            <ul className="space-y-3 mb-10 font-serif text-2xl">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="inline-block hover:text-brand transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.vagaro.com/deevanailboutique/services" target="_blank" rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-brand text-brand-foreground hover:bg-brand-deep transition text-xs tracking-[0.25em] uppercase"
              >
                Book now
              </a>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition text-sm"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <a
                href="https://instagram.com/deeva.nailboutique"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-primary hover:bg-secondary transition text-xs tracking-[0.25em] uppercase"
              >
                <Instagram className="w-4 h-4" />
                @deeva.nailboutique
              </a>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
};