const press = ["TIME OUT CHICAGO", "CHICAGO MAG", "EATER", "REFINERY29", "THRILLIST", "ALLURE"];

export const PressBar = () => (
  <section className="bg-accent py-8 lg:py-10 overflow-hidden">
    <div className="mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center justify-around gap-8 flex-wrap">
      {press.map((p) => (
        <span key={p} className="font-serif italic text-2xl lg:text-3xl text-accent-foreground/90 tracking-wide">
          {p}
        </span>
      ))}
    </div>
  </section>
);