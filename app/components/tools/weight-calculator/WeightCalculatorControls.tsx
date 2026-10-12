import { planets } from "@/data/planets";
import { IoChevronDown } from "react-icons/io5";

type WeightCalculatorControlsProps = {
  earthWeight: number;
  onEarthWeightChange: (weight: number) => void;
  onPlanetChange: (selectedPlanetId: number) => void;
};

export default function WeightCalculatorControls({
  earthWeight,
  onEarthWeightChange,
  onPlanetChange,
}: WeightCalculatorControlsProps) {
  return (
    <div className="flex w-full max-w-2xl flex-col items-stretch gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-10">
      <div className="flex items-center justify-between gap-3 sm:justify-start">
        <label
          htmlFor="earthWeight"
          className="text-xs font-medium uppercase tracking-widest text-white/50"
        >
          Dein Erd-Gewicht:
        </label>
        <div className="flex items-center gap-2">
          <input
            className="w-20 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-right text-sm tracking-widest text-white transition-colors hover:border-white/20 focus-visible:border-white/40 focus-visible:bg-white/10 focus-visible:outline-none"
            type="number"
            id="earthWeight"
            value={earthWeight}
            onChange={(e) => {
              const value = Math.max(0, Math.min(Number(e.target.value), 999));
              onEarthWeightChange(value);
            }}
            min={0}
            max={3}
            step={0.5}
            autoFocus
          />
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            KG
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3 sm:justify-start">
        <label
          htmlFor="compareWith"
          className="text-xs font-medium uppercase tracking-widest text-white/50"
        >
          Vergleichen mit:
        </label>
        <div className="relative inline-block">
          <select
            className="appearance-none cursor-pointer rounded-full border border-white/10 bg-white/5 pl-4 pr-10 py-2 text-sm uppercase tracking-widest text-white transition-colors hover:border-white/20 hover:bg-white/10 focus-visible:border-white/40 focus-visible:outline-none"
            id="compareWith"
            onChange={(e) => onPlanetChange(Number(e.target.value))}
          >
            {planets.map(
              (planet) =>
                planet.id !== 0 && (
                  <option
                    key={planet.id}
                    value={planet.id}
                    className="bg-black"
                  >
                    {planet.name}
                  </option>
                ),
            )}
          </select>

          <IoChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-white" />
        </div>
      </div>
    </div>
  );
}
