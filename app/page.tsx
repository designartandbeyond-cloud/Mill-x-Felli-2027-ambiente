import ExhibitionMap from "./components/ExhibitionMap";
import MarketExplorer from "./components/MarketExplorer";
import ProposalsAccordion from "./components/ProposalsAccordion";
import TrendsAccordion from "./components/TrendsAccordion";

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
            Felli is an adaptive daily living brand, reading how people live now — smaller
            homes, busier schedules, and food and hydration habits that shift market by market
            — and answering with considered, modular objects. This is our proposal for
            Ambiente 2027, built for buyers around the world.
          </p>

          <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href="mailto:milla@felli-group.com?subject=Ambiente%202027%20Preview%20Request"
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
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#4A4944]">
            Hover any theme to open it up and see what&apos;s behind it.
          </p>

          <div className="mt-16">
            <TrendsAccordion />
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
          <p className="mt-5 max-w-xl text-[15px] leading-8 text-[#4A4944]">
            Hover any collection to open it up and see what makes it different.
          </p>

          <div className="mt-16">
            <ProposalsAccordion />
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
            href="mailto:milla@felli-group.com?subject=Ambiente%202027%20Meeting%20Request"
            className="mt-9 inline-block rounded-full bg-[#17171A] px-10 py-3 text-sm font-medium tracking-wide text-[#F5F3EE] transition hover:bg-[#3A3935]"
          >
            Schedule a Meeting
          </a>
        </div>
      </section>
    </div>
  );
}
