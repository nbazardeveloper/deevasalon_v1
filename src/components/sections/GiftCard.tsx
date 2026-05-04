import giftCardImage from "@/assets/deeva-giftcard.webp";

const GIFT_CARD_URL = "https://www.vagaro.com/deevanailboutique";

export const GiftCard = () => (
  <section className="px-6 py-20 lg:px-12 lg:py-28 bg-secondary/20">
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-12 text-center lg:mb-14">
        <p className="mb-3 text-xs uppercase tracking-[0.25em] text-brand-deep">Gift card</p>
        <h2 className="font-serif text-4xl tracking-tight text-primary md:text-5xl lg:text-6xl">
          A little extra for every gift.
        </h2>
        <div className="mt-5 flex flex-col items-center gap-1">
          <div className="mt-2 text-xs md:text-sm text-muted-foreground font-normal">
            <span className="block">Choose your gift card and get up to <span className="text-brand-deep font-semibold">15% bonus</span> for your loved ones.</span>
          </div>
        </div>
      </div>

      <a
        href={GIFT_CARD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mx-auto block max-w-2xl overflow-hidden rounded-xl bg-background shadow-xl transition-transform duration-300 hover:-translate-y-1"
        aria-label="Open DeeVa gift card page on Vagaro"
      >
        <img
          src={giftCardImage}
          alt="DeeVa Nail Boutique gift card"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
          loading="lazy"
        />
      </a>
    </div>
  </section>
);