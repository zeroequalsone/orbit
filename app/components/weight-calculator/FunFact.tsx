import { Planet } from "@/data/planets";

export default function FunFact({
  selectedPlanet,
}: {
  selectedPlanet: Planet;
}) {
  return (
    <p className="text-lg w-2/3">
      <b>Fun Fact:</b> {selectedPlanet.funFactWeight}
    </p>
  );
}
