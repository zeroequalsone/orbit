import NasaMedia from "./components/homepage/NasaMedia";
import { getNasaData } from "./lib/nasaData";

export default async function Home() {
  const data = await getNasaData();

  return (
    <div className="flex flex-col items-center px-4 pb-24 pt-40">
      <div className="flex w-full max-w-7xl flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
            NASA · Täglich aktualisiert
          </span>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl max-w-136">
            Astronomy Picture of the Day
          </h1>
        </div>

        <div className="flex flex-col items-center gap-16 lg:flex-row lg:items-start">
          {/* Bild */}
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <div className="relative size-80 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] lg:size-96">
              <NasaMedia data={data} />
            </div>
            <p className="text-center text-lg font-medium italic text-white/80 lg:text-xl">
              „{data.title}“
            </p>
          </div>

          {/* Beschreibung */}
          <div className="flex flex-col gap-3 lg:max-w-2xl">
            <span className="text-xs font-medium uppercase tracking-widest text-white/50">
              Beschreibung
            </span>
            <div
              className="text-sm leading-relaxed text-white/70 [&_a]:text-white [&_a]:underline [&_a:hover]:text-white/80 md:text-base"
              dangerouslySetInnerHTML={{ __html: data.explanation }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
