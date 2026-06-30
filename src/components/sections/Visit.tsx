import { Phone, MapPin, Clock, CreditCard, Wifi, Accessibility, Tv, Heart, Car } from "lucide-react";

const hours = [
  { d: "Sunday",    h: "9:00 AM – 5:00 PM" },
  { d: "Monday",    h: "10:00 AM – 8:00 PM" },
  { d: "Tuesday",   h: "10:00 AM – 8:00 PM" },
  { d: "Wednesday", h: "10:00 AM – 8:00 PM" },
  { d: "Thursday",  h: "10:00 AM – 8:00 PM" },
  { d: "Friday",    h: "10:00 AM – 8:00 PM" },
  { d: "Saturday",  h: "9:00 AM – 6:00 PM" },
];

const amenities = [
  { icon: Wifi,          label: "WiFi" },
  { icon: Tv,            label: "TV" },
  { icon: Accessibility, label: "Disabled Access" },
  { icon: Heart,         label: "LGBTQIA Friendly" },
  { icon: Car,           label: "Metered Parking" },
  { icon: CreditCard,    label: "Visa · MC · Discover" },
];

const ADDRESS = "912 West Madison Street, Chicago, IL 60607";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export const Visit = () => (
  <section id="visit" className="py-20 lg:py-28 px-6 lg:px-12 bg-secondary/40">
    <div className="mx-auto max-w-[1500px]">
      <div className="text-center mb-14">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Visit us</p>
        <h2 className="font-serif text-5xl lg:text-6xl text-primary">Find the studio</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
        {/* Map */}
        <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:min-h-[520px] overflow-hidden rounded-[2rem] shadow-xl">
          <iframe
            title="DEEVA Nail Boutique location"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Info */}
        <div className="bg-background rounded-[2rem] p-8 lg:p-12 shadow-xl">
          <div className="flex items-start gap-4 mb-8">
            <MapPin className="w-5 h-5 text-brand mt-1 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Address</p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAP_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-2xl text-primary hover:text-brand transition"
              >
                {ADDRESS}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <Phone className="w-5 h-5 text-brand mt-1 shrink-0" />
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1">Phone</p>
              <a href="tel:+13128417587" className="font-serif text-2xl text-primary hover:text-brand transition">
                (312) 841-7587
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-8">
            <Clock className="w-5 h-5 text-brand mt-1 shrink-0" />
            <div className="flex-1">
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">Business Hours</p>
              <ul className="divide-y divide-border">
                {hours.map((row) => (
                  <li key={row.d} className="flex justify-between py-2">
                    <span className="text-primary">{row.d}</span>
                    <span className="text-muted-foreground">{row.h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Amenities</p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
              {amenities.map((a) => {
                const Icon = a.icon;
                return (
                  <li key={a.label} className="flex items-center gap-2 text-primary">
                    <Icon className="w-4 h-4 text-brand-deep shrink-0" />
                    <span>{a.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <a
            href="https://book.squareup.com/appointments/ihz187drfo6900/location/LDGYV695G2H3H/services"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex w-full items-center justify-center px-7 py-4 rounded-full bg-brand text-brand-foreground text-xs tracking-[0.25em] uppercase hover:bg-brand-deep transition"
          >
            Book an appointment
          </a>
        </div>
      </div>
    </div>
  </section>
);
