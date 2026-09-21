import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exhibitionZones } from "../../data/exhibition";
import { exhibitionProducts } from "../../data/exhibitionProducts";

export function generateStaticParams() {
  return exhibitionZones.map((z) => ({ slug: z.id }));
}

export async function generateMetadata(
  props: PageProps<"/exhibition/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const zone = exhibitionZones.find((z) => z.id === slug);

  if (!zone) {
    return { title: "Zone not found — Milla × Felli" };
  }

  return {
    title: `${zone.title} — Ambiente 2027 Booth — Milla × Felli`,
    description: zone.tagline,
  };
}

export default async function ExhibitionZonePage(props: PageProps<"/exhibition/[slug]">) {
  const { slug } = await props.params;
  const zoneIndex = exhibitionZones.findIndex((z) => z.id === slug);
  const zone = exhibitionZones[zoneIndex];

  if (!zone) {
    notFound();
  }

  const product = exhibitionProducts[slug];
  const otherZones = exhibitionZones.filter((z) => z.id !== zone.id);

  return (
    <div className="flex-1 w-full bg-[#F5F3EE] text-[#17171A]">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 sm:py-28">
        <Link
          href="/#manifesto"
          className="group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-[#8B6F5C] transition hover:text-[#17171A]"
        >
          <span className="transition group-hover:-translate-x-1">←</span>
          Back to the booth
        </Link>

        <div className="mt-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#8B6F5C]">
            Zone {String(zone.number).padStart(2, "0")} · Ambiente 2027
          </p>
          <h1 className="mt-3 max-w-2xl font-serif text-4xl sm:text-5xl">{zone.title}</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-8 text-[#4A4944]">{zone.tagline}</p>
        </div>

        {product ? (
          <>
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-black/10">
                <div className="relative aspect-[4/3] w-full bg-white">
                  <Image
                    src={product.heroRender.src}
                    alt={`${zone.title} product render`}
                    fill
                    sizes="(min-width: 640px) 448px, 100vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl border border-black/10">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={product.heroLifestyle.src}
                    alt={`${zone.title} lifestyle scene`}
                    fill
                    sizes="(min-width: 640px) 448px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-[15px] leading-8 text-[#4A4944]">{product.intro}</p>

            <div className="mt-16">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
                Variants
              </p>
              <div className="mt-6 grid gap-x-8 gap-y-14 sm:grid-cols-2">
                {product.variants.map((variant) => (
                  <div key={variant.letter} className="group">
                    <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={variant.image.src}
                          alt={`${variant.title} — Variant ${variant.letter}`}
                          fill
                          sizes="(min-width: 640px) 360px, 100vw"
                          className={
                            variant.status === "concept"
                              ? "object-contain"
                              : "object-cover transition duration-300 group-hover:scale-[1.03]"
                          }
                        />
                      </div>
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-3">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
                          Variant {variant.letter}
                        </p>
                        <h3 className="mt-1 font-serif text-xl">{variant.title}</h3>
                      </div>
                      <span className="mt-1 shrink-0 rounded-full border border-black/15 px-3 py-1 text-[10px] font-medium tracking-wide text-[#4A4944]">
                        {variant.materials}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-[#4A4944]">{variant.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <div className="mt-14 rounded-2xl border border-black/10 bg-white/70 p-10 text-center">
            <div className="relative mx-auto h-40 w-full max-w-sm overflow-hidden rounded-xl">
              <Image
                src={zone.thumb.src}
                alt={`${zone.title} preview`}
                fill
                sizes="360px"
                className="object-cover"
              />
            </div>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
              Coming Soon
            </p>
            <p className="mt-3 max-w-md mx-auto text-[15px] leading-8 text-[#4A4944]">
              Product content for this zone is still being finalized. Check back closer to
              Ambiente 2027 — or write to us for an early preview.
            </p>
            <a
              href="mailto:studio@millafelli.com?subject=Ambiente%202027%20Zone%20Preview%20Request"
              className="mt-6 inline-block rounded-full bg-[#17171A] px-8 py-3 text-sm font-medium tracking-wide text-[#F5F3EE] transition hover:bg-[#3A3935]"
            >
              Request a Preview
            </a>
          </div>
        )}

        <div className="mt-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#8B6F5C]">
            Other Zones
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {otherZones.map((z) => (
              <Link
                key={z.id}
                href={`/exhibition/${z.id}`}
                className="flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm transition hover:border-black/25 hover:bg-white"
              >
                <span className="text-[11px] font-semibold text-[#8B6F5C]">
                  {String(z.number).padStart(2, "0")}
                </span>
                <span>{z.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
