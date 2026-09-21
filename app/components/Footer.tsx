export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#F5F3EE]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg text-[#17171A]">
              MILLA <span className="text-[#8B6F5C]">×</span> FELLI
            </p>
            <p className="mt-3 max-w-[28ch] text-sm leading-7 text-[#6B6963]">
              The Ambiente 2027 project — adaptive, everyday objects for how people live now,
              market by market, around the world.
            </p>
          </div>

          <div className="text-sm text-[#4A4944]">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-[#8B6F5C]">EXPLORE</p>
            <ul className="mt-4 space-y-3">
              <li><a href="/#trends" className="transition hover:text-[#17171A]">Trends</a></li>
              <li><a href="/#proposals" className="transition hover:text-[#17171A]">Proposals</a></li>
              <li><a href="/#markets" className="transition hover:text-[#17171A]">Markets</a></li>
              <li><a href="/#visit" className="transition hover:text-[#17171A]">Visit Us</a></li>
            </ul>
          </div>

          <div className="text-sm text-[#4A4944]">
            <p className="text-[11px] font-semibold tracking-[0.25em] text-[#8B6F5C]">CONTACT</p>
            <ul className="mt-4 space-y-3">
              <li>milla@felli-group.com</li>
              <li>Ambiente 2027 · Frankfurt am Main</li>
              <li>By appointment</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-2 border-t border-black/10 pt-6 text-xs text-[#8B6F5C] sm:flex-row sm:items-center">
          <p>© 2027 Milla × Felli. All rights reserved.</p>
          <p className="tracking-wide">Made for Ambiente 2027 — Frankfurt am Main</p>
        </div>
      </div>
    </footer>
  );
}
