import { Planet } from "@/data/planets";

export default function PlanetPreview({ planet }: { planet: Planet }) {
  return (
    <div className={`flex flex-col gap-6 text-center items-center`}>
      <div
        className={`rounded-full lg:max-w-full max-w-24 lg:max-h-full max-h-28`}
        style={{
          height: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
          width: `${planet.id === 6 ? Math.sqrt(planet.diameter / 5) : Math.sqrt(planet.diameter / 20)}px`,
          backgroundImage: `url('${planet.iconUrl}')`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p className="font-bold">{planet.name}</p>
      <p className="font-bold">
        {planet.diameter.toLocaleString("de", {
          maximumFractionDigits: 0,
        })}{" "}
        km
      </p>
    </div>
  );
}
