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
    <div className="flex flex-col items-center gap-8">
      <div className="flex items-center flex-col gap-2 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold uppercase tracking-[0.3em]">
          {header}
        </h1>
        <div className="flex gap-2">
          <h2 className="text-lg">({desc})</h2>
          {toolTip && (
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={0}>
                <Tooltip.Trigger asChild>
                  <InfoIcon className="cursor-help" />
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    className="text-white text-sm bg-black/75 p-3 rounded-md max-w-64"
                    sideOffset={5}
                    side="right"
                  >
                    {toolTip}
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          )}
        </div>
      </div>
      <ToolBackButton />
    </div>
  );
}
