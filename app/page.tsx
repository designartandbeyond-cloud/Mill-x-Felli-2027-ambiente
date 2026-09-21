import ExhibitionMap from "./components/ExhibitionMap";
import MarketExplorer from "./components/MarketExplorer";

const trends = [
  {
    n: "01",
    title: "Healthy Convenience",
    body: "Buyers everywhere want nutritious meals without the friction — portioned, ready-to-go solutions that fit into busier daily life instead of asking people to plan around it.",
  },
  {
    n: "02",
    title: "Food Life Extension",
    body: "Rising grocery costs and growing food-waste awareness are pushing households across every market toward smarter storage that keeps food fresher for longer.",
  },
  {
    n: "03",
    title: "Climate-Adaptive Living",
    body: "From humid coastlines to dry mountain air, how people hydrate and store food needs to adapt to local climate — not assume one condition fits all.",
  },
  {
    n: "04",
    title: "Design That Travels",
    body: "The best daily objects now need to work in a small city apartment and a family kitchen alike — modular, durable design built to adapt, not to assume.",
  },
];

const proposals = [
  {
    category: "Dining",
    name: "TERRA",
    swatch: "#C9BBA6",
    desc: "Matte stoneware dinnerware in three earth glazes, thrown for a soft, irregular hand-feel.",
    material: "Stoneware, iron-oxide glaze",
    trend: "Quiet Materials",
  },
  {
    category: "Living",
    name: "LOOP",
    swatch: "#B7A588",
    desc: "A mono-material beech shelving system that assembles without tools — and fully disassembles at end of life.",
    material: "Sustainably sourced beech",
    trend: "Circular by Design",
  },
  {
    category: "Living",
    name: "EMBER",
    swatch: "#8B6F5C",
    desc: "A warm-dimming ceramic table lamp with a hand-woven jute cord, designed for the hour after dinner.",
    material: "Ceramic, jute, brass",
    trend: "New Nordic Warmth",
  },
  {
    category: "Wellness",
    name: "PAUSE",
    swatch: "#D8CFC0",
    desc: "A soap dish, oil bottle and tray poured as one continuous stone form — a small ritual, held together.",
    material: "Cast jesmonite",
    trend: "Slow Rituals",
  },
  {
    category: "Giving",
    name: "FIELD",
    swatch: "#CBB89A",
    desc: "Undyed natural flax linen throws and napkins, garment-washed for softness straight out of the box.",
    material: "100% natural flax linen",
    trend: "Quiet Materials",
  },
  {
    category: "Working",
    name: "ATLAS",
    swatch: "#A9846B",
    desc: "A cork and recycled-aluminium desk system for hybrid home offices — quiet enough for a living room.",
    material: "Cork, recycled aluminium",
    trend: "Circular by Design",
  },
];

export default function Home() {
  return (
    <div className="flex-1 w-full bg-[#F5F3EE] text-[#17171A]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-28 lg:py-36">
          <p className="text-[11px] font-semibold uppercase tracking-[0.4em] text-[#8B6F5C]">
            Ambiente 2027 · Frankfurt am Main
          </p>
          <h1 className="mt-8 max-w-4xl font-serif text-[13vw] leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            Adaptive Living,
            <br />
            <span className="text-[#8B6F5C]">Reconsidered.</span>
          </h1>
          <p className="mt-10 max-w-xl text-[15px] leading-8 text-[#4A4944] sm:text-base">
            Felli reading the shifts in how Europe lives — smaller
            homes, slower rituals, circular expectations — and answering with objects. This is
            our proposal for Ambiente 2027.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:studio@millafelli.com?subject=Ambiente%202027%20Preview%20Request"
              className="inline-flex w-fit items-center justify-center rounded-full bg-[#17171A] px-8 py-3 text-sm font-medium tracking-wide text-[#F5F3EE] transition hover:bg-[#3A3935]"
            >
              Request the Preview
            </a>
            <a
              href="#manifesto"
              className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#17171A]"
            >
              Read the manifesto
              <span className="transition group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        <div className="border-t border-black/10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-black/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-10">
            {[
              { label: "Dates", value: "29 Jan – 2 Feb 2027" },
              { label: "Location", value: "Messe Frankfurt, Germany" },
              { label: "Hall / Booth", value: "To be confirmed" },
            ].map((item) => (
              <div key={item.label} className="py-6 sm:px-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
                  {item.label}
                </p>
                <p className="mt-2 font-serif text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booth Preview */}
      <section id="manifesto" className="scroll-mt-20 border-b border-black/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
            Ambiente 2027 Booth Preview
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Walk the Felli booth, zone by zone
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#4A4944]">
            Seven zones, one adaptive system. Hover over any area of the booth to zoom in and
            see its featured products.
          </p>

          <div className="mt-16">
            <ExhibitionMap />
          </div>
        </div>
      </section>

      {/* Trends */}
      <section id="trends" className="scroll-mt-20 border-b border-black/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
            Four Themes for 2027
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Reading the room: adaptive living in 2027
          </h2>

          <div className="mt-16 divide-y divide-black/10 border-t border-black/10">
            {trends.map((t) => (
              <div
                key={t.n}
                className="grid grid-cols-1 gap-4 py-10 sm:grid-cols-[auto_1fr_2fr] sm:items-baseline sm:gap-10"
              >
                <span className="font-serif text-3xl text-[#8B6F5C] sm:text-4xl">{t.n}</span>
                <h3 className="font-serif text-2xl">{t.title}</h3>
                <p className="max-w-xl text-[15px] leading-7 text-[#4A4944]">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposals */}
      <section id="proposals" className="scroll-mt-20 border-b border-black/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
            New for Ambiente 2027
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Six proposals for buyers worldwide
          </h2>

          <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {proposals.map((p) => (
              <div key={p.name} className="group">
                <div
                  className="h-40 w-full rounded-sm transition duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: p.swatch }}
                />
                <div className="mt-5 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
                      {p.category}
                    </p>
                    <h3 className="mt-1 font-serif text-xl">{p.name}</h3>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-black/15 px-3 py-1 text-[10px] font-medium tracking-wide text-[#4A4944]">
                    {p.trend}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-[#4A4944]">{p.desc}</p>
                <p className="mt-2 text-xs tracking-wide text-[#8B6F5C]">{p.material}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      {/* Market Explorer */}
      <section id="markets" className="scroll-mt-20 border-b border-black/10 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
            Explore by Market
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Select your target market
          </h2>
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#4A4944]">
            Click a country to open its market profile — the products, categories, and core
            purchasing driver we&apos;re proposing for buyers in that region.
          </p>

          <div className="mt-16">
            <MarketExplorer />
          </div>
        </div>
      </section>

      <section id="visit" className="scroll-mt-20 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-10">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
            Meet Us at Ambiente 2027
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl sm:text-4xl">
            Come see the collection in Frankfurt
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-8 text-[#4A4944]">
            29 January – 2 February 2027, Messe Frankfurt. Hall and booth details to follow —
            write to us and we&apos;ll send a personal invitation along with the full press kit.
          </p>
          <a
            href="mailto:studio@millafelli.com?subject=Ambiente%202027%20Meeting%20Request"
            className="mt-9 inline-block rounded-full bg-[#17171A] px-10 py-3 text-sm font-medium tracking-wide text-[#F5F3EE] transition hover:bg-[#3A3935]"
          >
            Schedule a Meeting
          </a>
        </div>
      </section>
    </div>
  );
}
