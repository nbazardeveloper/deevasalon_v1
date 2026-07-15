import { Phone } from "lucide-react";
import { SQUARE_BOOKING_URL, VAGARO_BOOKING_URL } from "@/data/booking";

const PHONE_DISPLAY = "(312) 841-7587";
const PHONE_HREF = "tel:+13128417587";

export const FinalCTA = () => (
  <section className="py-24 lg:py-32 px-6 bg-accent text-primary text-center">
    <div className="mx-auto max-w-3xl">
      <p className="text-xs uppercase tracking-[0.3em] text-brand-deep mb-6">Ready when you are</p>
      <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-6 text-balance">
        Book your appointment.
      </h2>
      <p className="text-xl font-medium text-muted-foreground mb-12 max-w-xl mx-auto">
        Walk-ins welcome. Online booking is the fastest way to lock in your favorite time.
      </p>
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
        <a
          href={SQUARE_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.25em] uppercase shadow-[0_10px_40px_-10px_hsl(var(--brand)/0.6)] hover:bg-brand-deep hover:-translate-y-0.5 transition-all duration-300"
        >
          Book on Square
        </a>
        <a
          href={VAGARO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-9 py-4 rounded-full border border-primary/30 text-primary text-xs tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Book on Vagaro
        </a>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full border border-primary/30 text-primary text-xs tracking-[0.25em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          <Phone className="w-4 h-4" />
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  </section>
);
