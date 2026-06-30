const offers = [
  {
    num: "01",
    title: "First Visit",
    perk: "10% off",
    desc: "Enjoy 10% off any service on your first appointment.",
  },
  {
    num: "02",
    title: "Services Over $100",
    perk: "10% off",
    desc: "Receive 10% off when your service total exceeds $100.",
  },
  {
    num: "03",
    title: "Bring a Friend",
    perk: "10% off",
    desc: "Visit with a friend and each of you receives 10% off.",
  },
  {
    num: "04",
    title: "Leave a Review",
    perk: "$5 credit",
    desc: "Share your experience with us and receive a $5 credit toward your next visit.",
  },
];

export const SpecialOffers = () => (
  <section id="offers" className="py-20 lg:py-28 px-6 lg:px-12">
    <div className="mx-auto max-w-[1400px]">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Promotions</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
            Special Offers
          </h2>
        </div>
        <p className="text-muted-foreground max-w-xs leading-relaxed md:text-right">
          Exclusive perks for new guests, loyal clients, and everyone in between.
        </p>
      </div>

      {/* Offer rows */}
      <div className="divide-y divide-border border-y border-border">
        {offers.map((o) => (
          <a
            key={o.num}
            href="https://book.squareup.com/appointments/ihz187drfo6900/location/LDGYV695G2H3H/services"
            target="_blank"
            rel="noopener noreferrer"
            className="group grid grid-cols-[3rem_1fr_auto] lg:grid-cols-[4rem_1fr_auto_auto] items-center gap-x-6 lg:gap-x-10 py-7 lg:py-8 transition-colors hover:bg-secondary/30"
          >
            {/* Index number */}
            <span className="font-serif text-2xl text-brand/25 group-hover:text-brand/50 transition-colors leading-none tabular-nums">
              {o.num}
            </span>

            {/* Title + desc */}
            <div>
              <h3 className="font-serif text-xl lg:text-2xl text-primary mb-1">{o.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{o.desc}</p>
            </div>

            {/* Perk value — desktop */}
            <div className="hidden lg:flex flex-col items-end">
              <span className="font-serif text-3xl text-brand leading-none">{o.perk}</span>
            </div>

            {/* Arrow */}
            <div className="text-brand/40 group-hover:text-brand group-hover:translate-x-1 transition-all duration-200 text-xl font-light">
              →
            </div>
          </a>
        ))}
      </div>

    </div>
  </section>
);
