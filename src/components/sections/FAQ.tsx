"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you accept walk-ins?",
    a: "Yes — walk-ins are always welcome, subject to availability. For a guaranteed time slot, we recommend booking online in advance, especially on weekends.",
  },
  {
    q: "How long does a Russian manicure take?",
    a: "A Russian manicure typically takes 60–90 minutes depending on nail length and add-ons. We never rush — your appointment is blocked out fully.",
  },
  {
    q: "How long will my gel nails last?",
    a: "With proper care, gel and builder gel manicures last 3–4 weeks without chipping or lifting. Russian manicure clients often go 4+ weeks between appointments.",
  },
  {
    q: "What products do you use?",
    a: "We work exclusively with non-toxic, clean-formula brands — Dazzle Dry, CND, and other professional lines. No MMA, no harsh odors. Safe for sensitive skin and available pregnancy-friendly options.",
  },
  {
    q: "Are your tools sterilized?",
    a: "Yes — every metal implement is autoclaved between every client. We open a fresh kit in front of you at the start of each appointment.",
  },
  {
    q: "Where can I park?",
    a: "Metered street parking is available on West Madison Street and surrounding blocks. Several paid lots are within a 2-minute walk. We're also accessible by CTA (Green & Pink lines, Morgan stop).",
  },
  {
    q: "What is your cancellation policy?",
    a: "We ask for at least 24 hours notice for cancellations or reschedules. Late cancellations and no-shows may be subject to a fee.",
  },
  {
    q: "Do you do nail art?",
    a: "Absolutely. From minimalist line work to custom designs — nail art starts from $15 depending on complexity. Just mention it when booking so we can allow extra time.",
  },
];

export const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 px-6 lg:px-12 bg-secondary/40">
      <div className="mx-auto max-w-[860px]">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.05]">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <span className="font-serif text-xl lg:text-2xl text-primary">{faq.q}</span>
                {open === i
                  ? <Minus className="w-5 h-5 text-brand shrink-0" />
                  : <Plus  className="w-5 h-5 text-brand shrink-0" />}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-64 pb-6" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
