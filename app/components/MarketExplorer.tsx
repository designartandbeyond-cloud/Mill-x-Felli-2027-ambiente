"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import World from "@react-map/world";
import { markets, marketByMapName } from "../data/markets";

const INK = "#17171A";
const ACCENT = "#8B6F5C";
const STONE = "#D9CFBE";
const MUTED = "#E9E4D8";
const PAPER = "#F5F3EE";

export default function MarketExplorer() {
  const router = useRouter();

  const cityColors = Object.fromEntries(markets.map((m) => [m.mapName, STONE]));

  const handleSelect = (country: string | null) => {
    if (!country) return;
    const market = marketByMapName[country];
    if (market) {
      router.push(`/markets/${market.slug}`);
    }
  };

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
      <div className="mx-auto w-full max-w-lg [&_.map]:!w-full [&_svg]:!h-auto [&_svg]:!w-full">
        <World
          type="select-single"
          size={800}
          mapColor={MUTED}
          strokeColor={PAPER}
          strokeWidth={0.4}
          hoverColor={ACCENT}
          selectColor={INK}
          cityColors={cityColors}
          hints
          hintBackgroundColor={INK}
          hintTextColor={PAPER}
          hintPadding="6px 14px"
          hintBorderRadius={999}
          onSelect={handleSelect}
        />
        <p className="mt-6 text-center text-xs text-[#8B6F5C]">
          Click one of the six highlighted markets to open its profile.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {markets.map((m) => (
          <Link
            key={m.slug}
            href={`/markets/${m.slug}`}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-6 text-center transition hover:border-black/25 hover:bg-white"
          >
            <span className="text-3xl">{m.flag}</span>
            <span className="font-serif text-base text-[#17171A]">{m.name}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#8B6F5C]">
              {m.coreDriver}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
