"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { exhibitionImage, exhibitionZones } from "../data/exhibition";

export default function ExhibitionMap() {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string | null>(null);
  const active = exhibitionZones.find((z) => z.id === activeId) ?? null;

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div
        className="relative overflow-hidden rounded-2xl border border-black/10 bg-black/5"
        style={{ aspectRatio: `${exhibitionImage.width} / ${exhibitionImage.height}` }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transform: active ? "scale(1.18)" : "scale(1)",
            transformOrigin: active ? `${active.origin.x}% ${active.origin.y}%` : "50% 50%",
          }}
        >
          <Image
            src={exhibitionImage.src}
            alt="Concept rendering of the Felli booth for Ambiente 2027"
            fill
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
            priority
          />
        </div>

        {exhibitionZones.map((zone) => (
          <button
            key={zone.id}
            type="button"
            aria-label={`${zone.title} — ${zone.tagline}`}
            className="absolute cursor-pointer"
            style={{
              left: `${zone.hotspot.left}%`,
              top: `${zone.hotspot.top}%`,
              width: `${zone.hotspot.width}%`,
              height: `${zone.hotspot.height}%`,
            }}
            onMouseEnter={() => setActiveId(zone.id)}
            onMouseLeave={() => setActiveId((id) => (id === zone.id ? null : id))}
            onFocus={() => setActiveId(zone.id)}
            onBlur={() => setActiveId((id) => (id === zone.id ? null : id))}
            onClick={() => router.push(`/exhibition/${zone.id}`)}
          >
            <span
              className={`absolute inset-0 rounded-lg border-2 transition ${
                activeId === zone.id ? "border-[#F5F3EE]" : "border-transparent"
              }`}
            />
          </button>
        ))}

        {active && (
          <div
            className="pointer-events-none absolute z-10 w-44 sm:w-60"
            style={{
              left: active.origin.x < 50 ? `${active.hotspot.left}%` : undefined,
              right:
                active.origin.x >= 50
                  ? `${100 - (active.hotspot.left + active.hotspot.width)}%`
                  : undefined,
              top:
                active.origin.y < 50
                  ? `${active.hotspot.top + active.hotspot.height}%`
                  : undefined,
              bottom: active.origin.y >= 50 ? `${100 - active.hotspot.top}%` : undefined,
              marginTop: active.origin.y < 50 ? 8 : undefined,
              marginBottom: active.origin.y >= 50 ? 8 : undefined,
            }}
          >
            <div className="overflow-hidden rounded-xl border border-black/10 bg-[#F5F3EE] shadow-xl">
              <div className="relative h-24 w-full sm:h-28">
                <Image
                  src={active.thumb.src}
                  alt={`${active.title} product detail`}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <div className="px-3 py-2.5 sm:px-4 sm:py-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
                  Zone {String(active.number).padStart(2, "0")}
                </p>
                <p className="mt-1 font-serif text-sm text-[#17171A] sm:text-base">
                  {active.title}
                </p>
                <p className="mt-1 text-[11px] leading-4 text-[#4A4944] sm:text-xs sm:leading-5">
                  {active.tagline}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#17171A]">
                  Click to open →
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-[#8B6F5C]">
        Hover any zone to zoom in and preview it — click to open its full product page.
      </p>
    </div>
  );
}
