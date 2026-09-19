export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-[#F5F3EE]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 sm:px-10">
        <a href="/" className="flex flex-col leading-none">
          <span className="font-serif text-lg tracking-wide text-[#17171A] sm:text-xl">
            MILLA <span className="text-[#8B6F5C]">×</span> FELLI
          </span>
          <span className="mt-1 text-[10px] font-medium tracking-[0.35em] text-[#8B6F5C]">
            DESIGN &amp; BEYOND
          </span>
        </a>

        <nav className="hidden gap-8 text-[13px] font-medium tracking-wide text-[#4A4944] lg:flex">
          <a href="/#manifesto" className="transition hover:text-[#17171A]">Studio</a>
          <a href="/#trends" className="transition hover:text-[#17171A]">Trends</a>
          <a href="/#proposals" className="transition hover:text-[#17171A]">Proposals</a>
          <a href="/#markets" className="transition hover:text-[#17171A]">Markets</a>
          <a href="/#visit" className="transition hover:text-[#17171A]">Visit Us</a>
        </nav>

        <a
          href="/#visit"
          className="shrink-0 rounded-full border border-[#17171A] px-5 py-2 text-[12px] font-medium tracking-wide text-[#17171A] transition hover:bg-[#17171A] hover:text-[#F5F3EE]"
        >
          Ambiente 2027
        </a>
      </div>
    </header>
  );
}
