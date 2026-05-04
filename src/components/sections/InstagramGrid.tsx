import ig1 from "@/assets/ig-1.webp";
import ig2 from "@/assets/ig-2.webp";
import ig3 from "@/assets/ig-3.webp";
import ig4 from "@/assets/ig-4.webp";
import ig5 from "@/assets/ig-5.webp";
import ig6 from "@/assets/ig-6.webp";

const imgs = [ig1, ig2, ig3, ig4, ig5, ig6];

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
            <span className="text-primary">@deeva_nailboutique</span>
          </a>
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-3">
        {imgs.map((src, i) => (
          <a key={i} href="#" className="block aspect-square overflow-hidden bg-secondary group">
            <img
              src={src}
              alt={`Instagram ${i + 1}`}
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