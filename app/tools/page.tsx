import ToolButton from "@/components/tools/ToolButton";

const tools = [
  { name: "Distanz-Rechner", href: "distance-calculator" },
  { name: "Gewicht-Rechner", href: "weight-calculator" },
  { name: "Größen-Rechner", href: "size-calculator" },
  { name: "Landsat Name Generator", href: "landsat-name-generator" },
];

export default function Tools() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex items-center flex-col p-8 mt-20 gap-10 lg:max-w-384">
        <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">Tools</h1>
        <div className="grid lg:grid-cols-2 gap-10 text-center">
          {tools.map((tools) => (
            <ToolButton key={tools.name} href={tools.href} name={tools.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
