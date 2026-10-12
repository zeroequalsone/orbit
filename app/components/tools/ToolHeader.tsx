import { Tooltip } from "radix-ui";
import { InfoIcon } from "@phosphor-icons/react";
import ToolBackButton from "./ToolBackButton";

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
        {toolTip && (
          <Tooltip.Provider>
            <Tooltip.Root delayDuration={0}>
              <Tooltip.Trigger asChild>
                <InfoIcon
                  size={16}
                  className="shrink-0 cursor-help text-white/50 transition-colors hover:text-white active:text-white"
                />
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="z-10 max-w-64 rounded-xl border border-white/10 bg-black/80 p-3 text-sm normal-case leading-relaxed tracking-normal text-white/80 backdrop-blur-md"
                  sideOffset={5}
                  side="top"
                >
                  {toolTip}
                  <Tooltip.Arrow className="fill-white/10" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        )}
      </div>
    </div>
  );
}
