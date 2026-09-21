"use client";

import { useState } from "react";
import Image from "next/image";

export interface ShowcaseItem {
  key: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  tag?: string;
  image: { src: string; width: number; height: number };
}

export default function AccordionShowcase({ items }: { items: ShowcaseItem[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <>
      {/* Desktop / pointer devices: hover-expand row */}
      <div className="hidden h-[560px] gap-2 overflow-hidden rounded-2xl sm:flex">
        {items.map((item, i) => (
          <div
            key={item.key}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((a) => (a === i ? null : a))}
            onFocus={() => setActive(i)}
            onBlur={() => setActive((a) => (a === i ? null : a))}
            tabIndex={0}
            style={{ flexGrow: active === i ? 4 : 1 }}
            className="relative flex flex-1 flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-[flex-grow] duration-500 ease-in-out"
          >
            <div className="relative min-h-0 flex-1 bg-[#F5F3EE]">
              <Image
                src={item.image.src}
                alt={`${item.title} — ${item.subtitle}`}
                fill
                sizes="(min-width: 640px) 45vw, 100vw"
                className="object-contain p-2"
              />
            </div>

            <div className="shrink-0 border-t border-black/10 bg-white p-4 sm:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
                {item.eyebrow}
              </p>
              <h3 className="mt-1 font-serif text-xl sm:text-2xl">{item.title}</h3>
              <p className="mt-1 text-xs font-medium tracking-wide text-[#4A4944]">
                {item.subtitle}
              </p>

              <div
                className={`grid transition-all duration-500 ${
                  active === i ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-sm text-sm leading-6 text-[#4A4944]">{item.description}</p>
                  {item.tag && (
                    <p className="mt-3 inline-block rounded-full border border-black/15 px-3 py-1 text-[10px] tracking-wide text-[#4A4944]">
                      {item.tag}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Touch devices: tap-to-expand vertical list */}
      <div className="flex flex-col gap-3 sm:hidden">
        {items.map((item, i) => {
          const isOpen = active === i;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActive((a) => (a === i ? null : i))}
              aria-expanded={isOpen}
              className="w-full overflow-hidden rounded-xl border border-black/10 bg-white text-left"
            >
              <div className="p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
                  {item.eyebrow}
                </p>
                <h3 className="mt-1 font-serif text-xl">{item.title}</h3>
                <p className="mt-1 text-xs font-medium tracking-wide text-[#4A4944]">
                  {item.subtitle}
                </p>
              </div>

              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-hidden">
                  <div className="relative aspect-[4/3] w-full bg-[#F5F3EE]">
                    <Image
                      src={item.image.src}
                      alt={`${item.title} — ${item.subtitle}`}
                      fill
                      sizes="100vw"
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <p className="text-sm leading-6 text-[#4A4944]">{item.description}</p>
                    {item.tag && (
                      <p className="mt-3 inline-block rounded-full border border-black/15 px-3 py-1 text-[10px] tracking-wide text-[#4A4944]">
                        {item.tag}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
