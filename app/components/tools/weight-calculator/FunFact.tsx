import { Planet } from "@/data/planets";

export default function FunFact({
  selectedPlanet,
}: {
  selectedPlanet: Planet;
}) {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)]">
      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
        Fun Fact
      </span>
      <p className="text-sm leading-relaxed text-white/70 md:text-base">
        {selectedPlanet.funFactWeight}
      </p>
    </div>
  );
}
