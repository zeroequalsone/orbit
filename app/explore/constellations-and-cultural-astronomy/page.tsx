import Link from "next/link";

export default function Constellations() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={`../explore`}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Zurück zu Entdecken
          </Link>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            Sternbilder & Kulturelle Astronomie
          </h1>
        </div>
      </div>
    </div>
  );
}
