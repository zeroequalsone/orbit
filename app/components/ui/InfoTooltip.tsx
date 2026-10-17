import { Tooltip } from "radix-ui";
import { LuInfo } from "react-icons/lu";

export default function InfoTooltip({ tooltip }: { tooltip: string }) {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <LuInfo className="shrink-0 cursor-help text-white/50 transition-colors hover:text-white active:text-white" />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-10 max-w-64 rounded-xl border border-white/10 bg-black/80 p-3 text-sm leading-relaxed text-white/80 backdrop-blur-md"
            sideOffset={5}
            side="top"
          >
            {tooltip}
            <Tooltip.Arrow className="fill-white/10" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
