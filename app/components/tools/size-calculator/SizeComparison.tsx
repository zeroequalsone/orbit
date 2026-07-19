import { planets } from "@/data/planets";

type SizeComparisonProps = {
  setSizeFrom: (id: number) => void;
  setSizeTo: (id: number) => void;
  sizeFrom: number;
  sizeTo: number;
};

export default function SizeComparison({
  setSizeFrom,
  setSizeTo,
  sizeFrom,
  sizeTo,
}: SizeComparisonProps) {
  return (
    <div className="flex lg:flex-row flex-col items-center lg:gap-10 gap-4 text-xl">
      <div className="flex gap-2">
        <label htmlFor="sizeFrom">Vergleiche:</label>
        <select
          className="bg-neutral-900 cursor-pointer"
          id="sizeFrom"
          onChange={(e) => setSizeFrom(Number(e.target.value))}
          value={sizeFrom}
        >
          {planets.map((planet) => (
            <option
              key={planet.id}
              value={planet.id}
              className="bg-black"
              disabled={sizeTo === planet.id}
            >
              {planet.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex w-full justify-between gap-2">
        <label htmlFor="sizeTo">Mit:</label>
        <select
          className="bg-neutral-900 cursor-pointer"
          id="sizeTo"
          onChange={(e) => setSizeTo(Number(e.target.value))}
          value={sizeTo}
        >
          {planets.map((planet) => (
            <option
              key={planet.id}
              value={planet.id}
              className="bg-black"
              disabled={sizeFrom === planet.id}
            >
              {planet.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
