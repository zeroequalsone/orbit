import { Planet } from "@/data/planets";
import PlanetPreview from "./PlanetPreview";

type SizeDisplayProps = {
  planetFrom: Planet;
  planetTo: Planet;
};

export default function SizeDisplay({
  planetFrom,
  planetTo,
}: SizeDisplayProps) {
  const isBiggest = planetFrom.diameter > planetTo.diameter;
  const bigger = isBiggest ? planetFrom : planetTo;
  const smaller = isBiggest ? planetTo : planetFrom;
  const fitsIntoPlanet = Math.pow(bigger.diameter / smaller.diameter, 3);

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <div className="flex w-full max-w-4xl items-end justify-between gap-12 rounded-2xl p-6 md:p-10">
        <PlanetPreview planet={planetFrom} />
        <PlanetPreview planet={planetTo} />
      </div>
      <p className="max-w-2xl text-center text-sm leading-relaxed text-white/70 md:text-base">
        {smaller.name} passt in {bigger.name}{" "}
        <b className="text-white">
          {fitsIntoPlanet.toLocaleString("de", {
            maximumFractionDigits: 0,
          })}
        </b>{" "}
        mal rein.
      </p>
    </div>
  );
}
