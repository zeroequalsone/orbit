import ToolButton from "@/components/tools/ToolButton";

const tools = [
  { name: "Distanz-Rechner", href: "distance-calculator" },
  { name: "Gewicht-Rechner", href: "weight-calculator" },
  { name: "Größen-Rechner", href: "size-calculator" },
  { name: "Landsat Name Generator", href: "landsat-name-generator" },
];

export default function Tools() {
  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto items-center px-4 pb-24 pt-40">
      <div className="flex flex-col items-center gap-16">
        {/* Eyebrow + Heading */}
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
            Werkzeuge · {tools.length} verfügbar
          </span>
          <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
            Tools
          </h1>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 text-center sm:grid-cols-2">
          {tools.map((tools) => (
            <ToolButton key={tools.name} href={tools.href} name={tools.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
