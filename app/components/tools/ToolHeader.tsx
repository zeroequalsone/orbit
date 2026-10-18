import ToolBackButton from "./ToolBackButton";
import InfoTooltip from "../ui/InfoTooltip";

type ToolHeaderProps = {
  header: string;
  desc: string;
  toolTip?: string;
};

export default function ToolHeader({ header, desc, toolTip }: ToolHeaderProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <ToolBackButton />
      <h1 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
        {header}
      </h1>
      <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
        <h2>{desc}</h2>
        {toolTip && <InfoTooltip tooltip={toolTip} />}
      </div>
    </div>
  );
}
