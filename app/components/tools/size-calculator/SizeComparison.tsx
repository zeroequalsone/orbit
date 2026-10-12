import { planets } from "@/data/planets";
import { IoChevronDown } from "react-icons/io5";

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
    <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:w-auto sm:flex-row sm:gap-10 sm:px-10">
      <div className="flex items-center justify-between gap-10 md:gap-4 w-full">
        <label
          htmlFor="sizeFrom"
          className="text-xs font-medium uppercase tracking-widest text-white/50"
        >
          Vergleiche:
        </label>
        <div className="relative inline-block">
          <select
            className="appearance-none cursor-pointer rounded-full border border-white/10 bg-white/5 pl-4 pr-10 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:border-white/40 focus-visible:outline-none"
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

          <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-white" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-10 md:gap-4 w-full">
        <label
          htmlFor="sizeTo"
          className="text-xs font-medium uppercase tracking-widest text-white/50"
        >
          Mit:
        </label>
        <div className="relative inline-block">
          <select
            className="appearance-none cursor-pointer rounded-full border border-white/10 bg-white/5 pl-4 pr-10 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:border-white/40 focus-visible:outline-none"
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

          <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-white" />
        </div>
      </div>
    </div>
  );
}
