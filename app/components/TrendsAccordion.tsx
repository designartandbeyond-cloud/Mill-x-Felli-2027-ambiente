import Image from "next/image";
import { trends } from "../data/trends";

export default function TrendsAccordion() {
  return (
    <div className="flex h-[760px] flex-col gap-2 overflow-hidden rounded-2xl sm:h-[560px] sm:flex-row">
      {trends.map((t) => (
        <div
          key={t.n}
          className="group relative flex flex-1 flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-[flex-grow] duration-500 ease-in-out hover:flex-[4]"
        >
          <div className="relative min-h-0 flex-1 bg-[#F5F3EE]">
            <Image
              src={t.image.src}
              alt={`${t.title} — ${t.quote}`}
              fill
              sizes="(min-width: 640px) 45vw, 100vw"
              className="object-contain p-2"
            />
          </div>

          <div className="shrink-0 border-t border-black/10 bg-white p-4 sm:p-5">
            <p className="text-xs font-serif text-[#8B6F5C] sm:text-sm">{t.n}</p>
            <h3 className="mt-1 font-serif text-xl sm:text-2xl">{t.title}</h3>
            <p className="mt-1 text-xs italic tracking-wide text-[#4A4944]">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover:mt-3 group-hover:grid-rows-[1fr] group-hover:opacity-100">
              <div className="overflow-hidden">
                <p className="max-w-sm text-sm leading-6 text-[#4A4944]">{t.body}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
