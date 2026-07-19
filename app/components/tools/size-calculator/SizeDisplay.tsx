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
    <div className="flex flex-col gap-12 items-center">
      <div className="flex items-end gap-12">
        <PlanetPreview planet={planetFrom} />
        <PlanetPreview planet={planetTo} />
      </div>
      <p>
        {smaller.name} passt in {bigger.name}{" "}
        <b>
          {fitsIntoPlanet.toLocaleString("de", {
            maximumFractionDigits: 0,
          })}
        </b>{" "}
        mal rein.
      </p>
    </div>
  );
}
