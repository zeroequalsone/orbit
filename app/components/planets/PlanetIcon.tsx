import { Planet } from "@/data/planets";
import { getPlanetDisplaySize } from "@/lib/planets";
import Image from "next/image";

export default function PlanetIcon({ planet }: { planet: Planet }) {
  const size = getPlanetDisplaySize(planet);

  return (
    <Image
      alt={planet.name}
      src={planet.iconUrl}
      width={300}
      height={300}
      className="rounded-full lg:max-h-full lg:max-w-full max-h-24 max-w-24 object-contain"
      style={{
        height: size,
        width: size,
      }}
    />
  );
}
