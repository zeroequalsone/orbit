import { Planet } from "@/data/planets";
import Image from "next/image";

export default function PlanetPreview({ planet }: { planet: Planet }) {
  return (
    <div className={`flex flex-col gap-6 text-center items-center`}>
      <Image
        alt={planet.name}
        src={planet.iconUrl}
        width={300}
        height={300}
        className={`rounded-full lg:max-h-full lg:max-w-full max-h-24 max-w-24 object-contain`}
        style={{
          height: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
          width: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
        }}
      />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-medium uppercase tracking-widest text-white">
          {planet.name}
        </p>
        <p className="text-xs font-medium uppercase tracking-widest text-white/50">
          {planet.diameter.toLocaleString("de", {
            maximumFractionDigits: 0,
          })}{" "}
          km
        </p>
      </div>
    </div>
  );
}
