import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { markets, marketBySlug } from "../../data/markets";

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata(
  props: PageProps<"/markets/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const market = marketBySlug[slug];

  if (!market) {
    return { title: "Market not found — Milla × Felli" };
  }

  return {
    title: `${market.name} Market Profile — Milla × Felli`,
    description: `Adaptive daily living product proposals for ${market.name}: ${market.healthyConvenience}, ${market.foodLifeExtension}, ${market.climateAdaptive}.`,
  };
}

export default async function MarketPage(props: PageProps<"/markets/[slug]">) {
  const { slug } = await props.params;
  const market = marketBySlug[slug];

  if (!market) {
    notFound();
  }

  const rows = [
    { label: "Healthy Convenience", value: market.healthyConvenience },
    { label: "Food Life Extension", value: market.foodLifeExtension },
    { label: "Climate-Adaptive", value: market.climateAdaptive },
  ];

  return (
    <div className="flex-1 w-full bg-[#F5F3EE] text-[#17171A]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
        <Link
          href="/#markets"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#8B6F5C] transition hover:text-[#17171A]"
        >
          <span className="transition group-hover:-translate-x-1">←</span>
          Back to markets
        </Link>

        <div className="mt-8 flex items-center gap-5">
          <span className="text-5xl">{market.flag}</span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
              Market Profile
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl">{market.name}</h1>
          </div>
        </div>

        <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-2 py-8 sm:grid-cols-[1fr_2fr] sm:items-baseline sm:gap-10"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
                {row.label}
              </p>
              <p className="font-serif text-2xl">{row.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#17171A] px-6 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D9CFBE]">
            Core Driver
          </span>
          <span className="font-serif text-lg text-[#F5F3EE]">{market.coreDriver}</span>
        </div>

        <div className="mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
            Other Markets
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {markets
              .filter((m) => m.slug !== market.slug)
              .map((m) => (
                <Link
                  key={m.slug}
                  href={`/markets/${m.slug}`}
                  className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm transition hover:border-black/25 hover:bg-white"
                >
                  <span>{m.flag}</span>
                  <span>{m.name}</span>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
