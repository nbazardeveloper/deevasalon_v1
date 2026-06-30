// ─────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH FOR ALL SERVICE PRICES
//  Edit here — Pricing, Categories, and ProductGrid all read from this file.
// ─────────────────────────────────────────────

export type PriceItem = { name: string; desc?: string; price: string };
export type ServiceItem = { name: string; desc: string; price: string };

// ── MANICURES (used in Pricing tab) ──────────
export const manicures: PriceItem[] = [
  { name: "Classic Manicure + Pedicure",         desc: "Nail shaping, cuticle care, hand & foot massage, regular polish",                                          price: "$75"     },
  { name: "Classic Manicure",                    desc: "Nail shaping, cuticle care, hand massage, regular polish",                                                 price: "$35"     },
  { name: "Dazzle Dry Manicure",                 desc: "Classic manicure with quick-drying, long-lasting Dazzle Dry polish",                                       price: "$45"     },
  { name: "Elite Japanese Manicure",             desc: "Natural nail treatment — vitamin-rich paste, green tea extract, beeswax, candle massage",                  price: "$55"     },
  { name: "Gel Manicure (No Chip)",              desc: "Soak-off gel polish, high shine, chip-resistant, 2–3 weeks wear",                                          price: "$55"     },
  { name: "Dip Powder Manicure",                 desc: "Durable, lightweight, natural finish with nail shaping & cuticle care",                                    price: "$65"     },
  { name: "Russian Manicure (No Chip)",          desc: "E-file Russian manicure with gel polish for a flawless long-lasting finish",                               price: "$70"     },
  { name: "Russian Manicure (Builder / Hard Gel)", desc: "E-file manicure on natural nails with builder or hard gel overlay for added strength",                   price: "$85"     },
  { name: "Builder Gel / Hard Gel Overlay",      desc: "Gel applied over natural nail for strength, structure, and durability",                                    price: "$85"     },
  { name: "Gel-X Full Set",                      desc: "Lightweight soft gel extensions with natural shape and comfortable wear",                                   price: "$100"    },
  { name: "Gel-X Fill",                          desc: "Maintenance service for existing Gel-X extensions",                                                        price: "$85"     },
  { name: "Tips / Length Extensions",            desc: "Available with Russian Manicure, Dip Powder, Builder Gel, Gel-X",                                         price: "+$15"    },
];

// ── PEDICURES (used in Pricing tab) ──────────
export const pedicures: PriceItem[] = [
  { name: "Classic Pedicure",               desc: "Nail shaping, cuticle care, callus treatment, exfoliation, lotion, warm towel, regular polish",           price: "$45"  },
  { name: "Dazzle Dry Pedicure",            desc: "Classic pedicure finished with quick-drying Dazzle Dry polish",                                           price: "$60"  },
  { name: "No-Chip Pedicure (Gel)",         desc: "Classic pedicure with glossy, chip-resistant gel polish that lasts for weeks",                            price: "$65"  },
  { name: "Smart / Russian Pedicure",       desc: "Deep exfoliation, callus & heel repair, paraffin therapy, collagen socks, therapeutic massage",           price: "$85"  },
  { name: "DEEVA Signature Deep Clean Spa", desc: "Warm soak, intensive callus removal, heel smoothing, exfoliation, hydrating treatment, massage",          price: "$78"  },
  { name: "DEEVA Signature Luxury Spa",     desc: "Warm soak, exfoliating scrub, hydrating mask, collagen treatment, massage — leaves feet silky smooth",    price: "$85"  },
  { name: "DEEVA Signature Golden Spa",     desc: "Gold-infused experience: gold scrub, moisturizing mask, enhanced hydration therapy, massage",             price: "$110" },
  { name: "Dazzle Dry Upgrade",             desc: "Quick-drying, long-lasting polish — no UV light required",                                               price: "+$8"  },
  { name: "Gel Polish Upgrade",             desc: "Chip-resistant gel polish with extended wear and high-shine finish",                                      price: "+$20" },
];

// ── KIDS ─────────────────────────────────────
export const kids: PriceItem[] = [
  { name: "Kids Manicure",            desc: "Gentle manicure designed for our younger guests",                                    price: "$25" },
  { name: "Kids Pedicure",            desc: "Gentle pedicure designed for our younger guests",                                    price: "$30" },
  { name: "Kids Dazzle Dry Manicure", desc: "Kids manicure finished with Dazzle Dry for quick-drying, long-lasting results",     price: "$30" },
  { name: "Kids Dazzle Dry Pedicure", desc: "Kids pedicure finished with Dazzle Dry for quick-drying, long-lasting results",     price: "$35" },
];

// ── ADD-ONS ───────────────────────────────────
export const addons: PriceItem[] = [
  { name: "French Tips",        price: "$15"      },
  { name: "Chrome Finish",      price: "$15"      },
  { name: "Ombré",              price: "$25"      },
  { name: "Shiny Buff",         price: "$5"       },
  { name: "Nail Art",           desc: "Cost depending on design complexity", price: "from $15" },
  { name: "Nail Repair (each)", price: "$8"       },
  { name: "Dazzle Dry Upgrade", price: "$8"       },
  { name: "Gel Polish Upgrade", price: "$20"      },
];

// ── REMOVALS ─────────────────────────────────
export const removals: PriceItem[] = [
  { name: "Gel Polish Removal", desc: "Safe removal without damaging the natural nail", price: "$15" },
  { name: "Dip Powder Removal", desc: "Thorough removal of dip powder product",         price: "$20" },
  { name: "Gel-X Removal",      desc: "Careful removal of Gel-X extensions",            price: "$25" },
  { name: "Hard Gel Removal",   desc: "Safe removal of hard gel enhancements",          price: "$25" },
];

// ── CATEGORIES — Manicures (with duration) ───
export const manicureServices: ServiceItem[] = [
  { name: "Classic Manicure",                   desc: "30 min",                                  price: "$35"  },
  { name: "Dazzle Dry Manicure",                desc: "30 min",                                  price: "$45"  },
  { name: "No Chip Manicure",                   desc: "Removal & cuticle cleaning included",     price: "$55"  },
  { name: "Dip Powder",                         desc: "Removal & cuticle cleaning · 50 min",     price: "$65"  },
  { name: "Builder Gel / Overlay",              desc: "85 min",                                  price: "$85"  },
  { name: "Builder / Hard Gel Fill",            desc: "65 min",                                  price: "$80"  },
  { name: "Hard Gel",                           desc: "90 min",                                  price: "$85"  },
  { name: "Russian Manicure w/ Strengthening",  desc: "90 min",                                  price: "$85"  },
  { name: "Gel X Fill",                         desc: "80 min",                                  price: "$85"  },
  { name: "Gel X Set",                          desc: "90 min",                                  price: "$100" },
  { name: "Acrylic Fill",                       desc: "70 min",                                  price: "$80"  },
  { name: "Acrylic Full Set (with AcryGel)",    desc: "95 min",                                  price: "$95"  },
  { name: "Gel Full Set Extensions",            desc: "100 min",                                 price: "$110" },
];

// ── CATEGORIES — Pedicures (with duration) ───
export const pedicureServices: ServiceItem[] = [
  { name: "Classic Pedicure",           desc: "35 min",  price: "$45"  },
  { name: "Dazzle Dry Pedicure",        desc: "40 min",  price: "$60"  },
  { name: "SPA Deluxe Pedicure",        desc: "50 min",  price: "$60"  },
  { name: "No Chip Pedicure",           desc: "60 min",  price: "$65"  },
  { name: "Russian Dry Pedicure",       desc: "60 min",  price: "$85"  },
  { name: "Manicure & Pedicure Combo",  desc: "70 min",  price: "$75"  },
  { name: "Luxury Spa Pedicure",        desc: "70 min",  price: "$85"  },
  { name: "Golden Spa Pedicure",        desc: "90 min",  price: "$110" },
];

// ── SPOTLIGHT CARD PRICES (ProductGrid) ──────
export const spotlightPrices = {
  russianManicure:   "$70",   // Russian Manicure (No Chip)
  gelXFullSet:       "$100",  // Gel-X Full Set
  gelOverlay:        "$65",   // Dip Powder / Gel Overlay
  deluxePedicure:    "$85",   // DEEVA Signature Luxury Spa
  hardGelManicure:   "$85",   // Builder Gel / Hard Gel Overlay
  luxuryPedicure:    "$85",   // DEEVA Signature Luxury Spa
  goldenPedicure:    "$110",  // DEEVA Signature Golden Spa
  dipPowderSet:      "$65",   // Dip Powder Manicure
} as const;
