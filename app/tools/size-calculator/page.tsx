"use client";

import SizeComparison from "@/components/tools/size-calculator/SizeComparison";
import SizeDisplay from "@/components/tools/size-calculator/SizeDisplay";
import ToolHeader from "@/components/tools/ToolHeader";
import { planets } from "@/data/planets";
import { useState } from "react";

export default function SizeCalculator() {
  const [sizeFrom, setSizeFrom] = useState(0);
  const [sizeTo, setSizeTo] = useState(3);

  const planetFrom = planets.find((p) => p.id === sizeFrom);
  const planetTo = planets.find((p) => p.id === sizeTo);

  if (!planetFrom || !planetTo)
    throw new Error("Fehler beim Auswählen eines Planeten.");

  return (
    <section className="max-w-7xl mx-auto px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        <ToolHeader
          header="Größen-Rechner"
          desc="Wie oft passen Planete ineinander?"
        />
        <div className="flex flex-col items-center gap-10">
          <SizeComparison
            setSizeFrom={setSizeFrom}
            setSizeTo={setSizeTo}
            sizeFrom={sizeFrom}
            sizeTo={sizeTo}
          />
          <SizeDisplay planetFrom={planetFrom} planetTo={planetTo} />
        </div>
      </div>
    </section>
  );
}
