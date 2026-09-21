import Image from "next/image";
import { proposals } from "../data/proposals";

export default function ProposalsAccordion() {
  return (
    <div className="flex h-[760px] flex-col gap-2 overflow-hidden rounded-2xl sm:h-[560px] sm:flex-row">
      {proposals.map((p) => (
        <div
          key={p.name}
          className="group relative flex flex-1 flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-[flex-grow] duration-500 ease-in-out hover:flex-[4]"
        >
          <div className="relative min-h-0 flex-1 bg-[#F5F3EE]">
            <Image
              src={p.image.src}
              alt={`${p.name} — ${p.tagline}`}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-contain object-top p-2"
            />
          </div>

          <div className="shrink-0 border-t border-black/10 bg-white p-4 sm:p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#8B6F5C]">
              {p.category}
            </p>
            <h3 className="mt-1 font-serif text-xl sm:text-2xl">{p.name}</h3>
            <p className="mt-1 text-xs font-medium tracking-wide text-[#4A4944]">{p.tagline}</p>

            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <div className="overflow-hidden">
                <p className="max-w-sm text-sm leading-6 text-[#4A4944]">{p.description}</p>
                <p className="mt-3 inline-block rounded-full border border-black/15 px-3 py-1 text-[10px] tracking-wide text-[#4A4944]">
                  {p.materials}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
