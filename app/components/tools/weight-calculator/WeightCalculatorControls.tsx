import { planets } from "@/data/planets";
import PlanetSelect from "../PlanetSelect";

type WeightCalculatorControlsProps = {
  earthWeight: number;
  onEarthWeightChange: (weight: number) => void;
  onPlanetChange: (selectedPlanetId: number) => void;
  selectedPlanetId: number;
};

const selectablePlanets = planets.filter(
  (planet) => planet.id !== 0 && planet.id !== 3,
);

export default function WeightCalculatorControls({
  earthWeight,
  onEarthWeightChange,
  onPlanetChange,
  selectedPlanetId,
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
            max={999}
            step={0.5}
            autoFocus
          />
          <span className="text-xs font-medium uppercase tracking-widest text-white/50">
            KG
          </span>
        </div>
      </div>
      <PlanetSelect
        id="compareWith"
        label="Vergleichen mit:"
        value={selectedPlanetId}
        onChange={onPlanetChange}
        options={selectablePlanets}
      />
    </div>
  );
}
