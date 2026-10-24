import { constellationFacts } from "@/data/constellationFacts";
import { CONSTELLATIONS_PATH } from "@/lib/constellationMap";
import { getConstellationInfo } from "@/lib/constellationInfo";
import Link from "next/link";
import { notFound } from "next/navigation";
import ConstellationCanvas from "./ConstellationCanvas";

type Props = { params: Promise<{ constellationId: string }> };

export default async function ConstellationPage({ params }: Props) {
  const { constellationId } = await params;

  const properties = getConstellationInfo(constellationId);
  if (!properties) notFound();

  const { de, name: la, desig } = properties;
  const facts = constellationFacts[constellationId] ?? {};

  const rows: [string, string | undefined][] = [
    ["Kürzel", desig],
    ["Hellster Stern", facts.brightestStar],
    ["Beste Sichtbarkeit", facts.bestVisible],
    ["Himmelsregion", facts.hemisphere],
    ["Kultur", facts.mythology?.culture],
    ["Bedeutung", facts.mythology?.meaning],
  ];

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex w-full max-w-4xl flex-col items-center gap-12">
        {/* Zurück + Titel */}
        <div className="flex flex-col items-center gap-4 text-center">
          <Link
            href={CONSTELLATIONS_PATH}
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <span
              aria-hidden
              className="transition-transform group-hover:-translate-x-0.5"
            >
              ←
            </span>
            Zurück zu Sternbilder
          </Link>
          <h1 className="flex flex-wrap items-baseline justify-center gap-x-3 text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            {de}
            <span className="text-sm font-normal normal-case tracking-normal text-white/50 drop-shadow-none md:text-base">
              (lat. {la})
            </span>
          </h1>
        </div>

        {/* Sternbild */}
        <ConstellationCanvas id={constellationId} />

        {/* Daten */}
        <dl className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-white/20 hover:bg-white/10"
            >
              <dt className="text-xs font-medium uppercase tracking-widest text-white/50">
                {label}
              </dt>
              <dd className="mt-1 text-base text-white">{value ?? "-"}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
