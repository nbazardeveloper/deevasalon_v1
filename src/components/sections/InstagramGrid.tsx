import ig1 from "@/assets/ig-1.jpg";
import ig2 from "@/assets/ig-2.jpg";
import ig3 from "@/assets/ig-3.jpg";
import ig4 from "@/assets/ig-4.jpg";
import ig5 from "@/assets/ig-5.jpg";
import ig6 from "@/assets/ig-6.jpg";

const imgs = [ig1, ig2, ig3, ig4, ig5, ig6];

export const InstagramGrid = () => (
  <section id="gallery" className="py-20 lg:py-28 px-6 lg:px-12">
    <div className="mx-auto max-w-[1600px]">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-[0.25em] text-brand-deep mb-3">Follow our work</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary tracking-tight">
          <a
            href="https://instagram.com/deeva.nailboutique"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-baseline gap-1 hover:text-brand-deep transition"
          >
            <span className="text-brand">@</span>deeva<span className="text-muted-foreground">.</span>nailboutique
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