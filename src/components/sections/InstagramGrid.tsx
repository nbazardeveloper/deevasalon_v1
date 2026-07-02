
import img01 from "@/assets/ourwork/deeva-russian-manicure-west-loop-1.webp";
import img02 from "@/assets/ourwork/deeva-russian-manicure-west-loop-2.webp";
import img03 from "@/assets/ourwork/deeva-gel-x-extensions-chicago-1.webp";
import img04 from "@/assets/ourwork/deeva-gel-x-extensions-chicago-2.webp";
import img05 from "@/assets/ourwork/deeva-nail-design-boutique-chicago-1.webp";
import img06 from "@/assets/ourwork/deeva-nail-design-boutique-chicago-2.webp";
import img07 from "@/assets/ourwork/deeva-manicure-nail-boutique-chicago-1.webp";
import img08 from "@/assets/ourwork/deeva-manicure-nail-boutique-chicago-2.webp";
import img09 from "@/assets/ourwork/deeva-nail-art-west-loop-salon-1.webp";
import img10 from "@/assets/ourwork/deeva-nail-art-west-loop-salon-2.webp";
import img11 from "@/assets/ourwork/deeva-premium-nail-care-chicago.webp";

const imgs = [

  { src: img01, alt: "DEEVA Russian manicure West Loop" },
  { src: img02, alt: "DEEVA Russian manicure West Loop" },
  { src: img03, alt: "DEEVA Gel-X extensions Chicago" },
  { src: img04, alt: "DEEVA Gel-X extensions Chicago" },
  { src: img05, alt: "DEEVA nail design boutique Chicago" },
  { src: img06, alt: "DEEVA nail design boutique Chicago" },
  { src: img07, alt: "DEEVA manicure nail boutique Chicago" },
  { src: img08, alt: "DEEVA manicure nail boutique Chicago" },
  { src: img09, alt: "DEEVA nail art West Loop salon" },
  { src: img10, alt: "DEEVA nail art West Loop salon" },
  { src: img11, alt: "DEEVA premium nail care Chicago" },
];

export const InstagramGrid = () => (
  <section id="gallery" className="py-20 lg:py-28 px-6 lg:px-12">
    <div className="mx-auto max-w-[1600px]">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Follow our work</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
          <a
            href="https://www.instagram.com/deeva_nailboutique/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1 hover:text-brand-deep transition text-primary"
          >
            @deeva_nailboutique
          </a>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3">
        {imgs.map((img, i) => (
          <a
            key={i}
            href="https://www.instagram.com/deeva_nailboutique/"
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-square overflow-hidden bg-secondary group"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              width={800}
              height={800}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </a>
        ))}
      </div>
    </div>
  </section>
);
