import PlanetSelect from "../PlanetSelect";

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
      <PlanetSelect
        id="sizeFrom"
        label="Vergleiche:"
        value={sizeFrom}
        onChange={setSizeFrom}
        disabledId={sizeTo}
      />
      <PlanetSelect
        id="sizeTo"
        label="Mit:"
        value={sizeTo}
        onChange={setSizeTo}
        disabledId={sizeFrom}
      />
    </div>
  );
}
