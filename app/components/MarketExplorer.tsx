"use client";

import { useState } from "react";
import Europe from "@react-map/europe";

const INK = "#17171A";
const ACCENT = "#8B6F5C";
const STONE = "#D9CFBE";
const BASE = "#EDE7DA";
const PAPER = "#F5F3EE";

type Trend = { trend: string; insight: string; product: string };

const markets: Record<string, Trend[]> = {
  Germany: [
    {
      trend: "Sustainability & Circularity",
      insight:
        "German buyers expect repairability and material transparency as standard, not a premium add-on.",
      product: "LOOP",
    },
    {
      trend: "Home-Office Culture",
      insight:
        "Hybrid work is entrenched — demand is rising for quiet, considered objects for the home desk.",
      product: "ATLAS",
    },
    {
      trend: "Considered Minimalism",
      insight:
        "A Bauhaus-rooted preference for function-led form over decoration continues to shape the category.",
      product: "TERRA",
    },
  ],
  France: [
    {
      trend: "Art de Vivre",
      insight: "Dining remains a daily ritual — elevated, everyday tableware sells on feel as much as form.",
      product: "TERRA",
    },
    {
      trend: "Heritage Materials, Modern Form",
      insight: "Strong appreciation for natural fibres and craft techniques presented without nostalgia.",
      product: "FIELD",
    },
    {
      trend: "Quiet Luxury at Home",
      insight: "Restrained, material-led interiors are outpacing branding-forward decor.",
      product: "EMBER",
    },
  ],
  Italy: [
    {
      trend: "Artisanal Revival",
      insight: "Renewed demand for hand-finished, small-batch objects over mass-produced perfection.",
      product: "TERRA",
    },
    {
      trend: "La Tavola as Ritual",
      insight: "The table remains central to daily life — generous, tactile table linen is essential, not optional.",
      product: "FIELD",
    },
    {
      trend: "Warm Minimalism",
      insight: "Sculptural but tactile living pieces are replacing cold, gallery-style minimalism.",
      product: "EMBER",
    },
  ],
  "United Kingdom": [
    {
      trend: "Collected Comfort",
      insight: "Layered, personal interiors are favoured over showroom perfection.",
      product: "EMBER",
    },
    {
      trend: "Wellness at Home",
      insight: "Self-care rituals are becoming their own design category, not an afterthought in the bathroom.",
      product: "PAUSE",
    },
    {
      trend: "Considered Consumption",
      insight: "Buyers reward durable, repairable goods that read as an alternative to fast furnishing.",
      product: "LOOP",
    },
  ],
  Netherlands: [
    {
      trend: "Design-Led Everyday",
      insight: "A strong industrial design culture means form and function are expected in equal measure.",
      product: "LOOP",
    },
    {
      trend: "Circularity Leadership",
      insight: "Among the EU's most advanced circular-economy markets — disassembly and materials matter.",
      product: "ATLAS",
    },
    {
      trend: "Small-Footprint Living",
      insight: "Compact urban homes reward objects that do more than one job, beautifully.",
      product: "PAUSE",
    },
  ],
  Spain: [
    {
      trend: "Indoor-Outdoor Living",
      insight: "Patios and terraces function as everyday living space for much of the year.",
      product: "FIELD",
    },
    {
      trend: "Warm Materiality",
      insight: "Terracotta and earth tones remain a defining thread of the Spanish home.",
      product: "TERRA",
    },
    {
      trend: "Evening Gatherings",
      insight: "Long, sociable evenings call for warm, low lighting rather than overhead brightness.",
      product: "EMBER",
    },
  ],
  Sweden: [
    {
      trend: "Lagom Minimalism",
      insight: "“Just enough” shapes the market — restraint in palette, generosity in comfort.",
      product: "LOOP",
    },
    {
      trend: "Natural Materials",
      insight: "Wood, ceramics and low-impact production are baseline expectations, not selling points.",
      product: "EMBER",
    },
    {
      trend: "Everyday Rituals",
      insight: "Small, dependable daily pauses are a cultural touchstone worth designing for.",
      product: "PAUSE",
    },
  ],
  Poland: [
    {
      trend: "Modern Renovation Boom",
      insight: "A wave of home upgrades is favouring considered, design-led purchases over volume retail.",
      product: "LOOP",
    },
    {
      trend: "Tradition Meets Contemporary",
      insight: "Craft heritage sits comfortably alongside new, simplified forms.",
      product: "TERRA",
    },
    {
      trend: "Emerging Premium Gifting",
      insight: "A fast-growing appetite for quality gifting is opening up a new retail category.",
      product: "FIELD",
    },
  ],
};

const productSwatch: Record<string, string> = {
  TERRA: "#C9BBA6",
  LOOP: "#B7A588",
  EMBER: "#8B6F5C",
  PAUSE: "#D8CFC0",
  FIELD: "#CBB89A",
  ATLAS: "#A9846B",
};

export default function MarketExplorer() {
  const [selected, setSelected] = useState<string | null>("Germany");

  const cityColors = Object.fromEntries(
    Object.keys(markets).map((country) => [country, STONE])
  );

  const trends = selected ? markets[selected] : undefined;

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="mx-auto w-full max-w-md [&_.map]:!w-full [&_svg]:!h-auto [&_svg]:!w-full">
        <Europe
          type="select-single"
          size={800}
          mapColor={BASE}
          strokeColor={PAPER}
          strokeWidth={0.6}
          hoverColor={ACCENT}
          selectColor={INK}
          cityColors={cityColors}
          hints
          hintBackgroundColor={INK}
          hintTextColor={PAPER}
          hintPadding="6px 14px"
          hintBorderRadius={999}
          onSelect={(country) => setSelected(country)}
        />
        <p className="mt-6 text-center text-xs text-[#8B6F5C]">
          Darker markets have a dedicated trend briefing below.
        </p>
      </div>

      <div className="rounded-2xl border border-black/10 bg-white/70 p-8 sm:p-10">
        {!selected && (
          <p className="text-sm leading-7 text-[#4A4944]">
            Select a country on the map to see its lifestyle trends.
          </p>
        )}

        {selected && (
          <>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
              Target Market
            </p>
            <h3 className="mt-2 font-serif text-3xl">{selected}</h3>

            {trends ? (
              <div className="mt-8 divide-y divide-black/10">
                {trends.map((t, i) => (
                  <div key={t.trend} className={i > 0 ? "pt-6" : "pb-6"}>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
                      {t.trend}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#4A4944]">{t.insight}</p>
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-black/15 px-3 py-1 text-xs font-medium tracking-wide text-[#17171A]">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: productSwatch[t.product] }}
                      />
                      {t.product}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mt-4 text-sm leading-7 text-[#4A4944]">
                We&apos;re still preparing a market briefing for {selected}. Get in touch and
                we&apos;ll put one together ahead of your visit.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
