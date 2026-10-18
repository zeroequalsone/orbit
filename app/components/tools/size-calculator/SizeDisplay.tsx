import { Planet } from "@/data/planets";
import PlanetPreview from "./PlanetPreview";
import { getVolumeRatio } from "@/lib/planets";

type SizeDisplayProps = {
  planetFrom: Planet;
  planetTo: Planet;
};

export default function SizeDisplay({
  planetFrom,
  planetTo,
}: SizeDisplayProps) {
  const isFromBigger = planetFrom.diameter > planetTo.diameter;
  const bigger = isFromBigger ? planetFrom : planetTo;
  const smaller = isFromBigger ? planetTo : planetFrom;
  const fitsIntoPlanet = getVolumeRatio(bigger, smaller);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="flex w-full max-w-4xl items-end justify-between gap-12 rounded-2xl p-6 md:p-10">
        <PlanetPreview planet={planetFrom} />
        <PlanetPreview planet={planetTo} />
      </div>
      <p className="max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
        <span className="text-white">{smaller.name}</span> passt dem Volumen
        nach{" "}
        <b className="text-white">
          {fitsIntoPlanet.toLocaleString("de", { maximumFractionDigits: 0 })}
        </b>{" "}
        mal in <span className="text-white">{bigger.name}</span>.
      </p>
    </div>
  );
}
