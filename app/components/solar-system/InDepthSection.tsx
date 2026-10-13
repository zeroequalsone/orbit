import { Planet } from "@/data/planets";

export default function InDepthSection({ planet }: { planet: Planet }) {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-4 py-24">
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md md:p-10 lg:mx-auto lg:w-auto lg:flex-row lg:items-center lg:gap-14">
          <p
            className="bg-clip-text bg-position-[left_40rem_top_40rem] text-9xl font-semibold text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] lg:text-[15rem]"
            style={{
              backgroundImage: `url('${planet.section[2]}')`,
            }}
          >
            03
          </p>
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
                Kapitel 03
              </span>
              <h2 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
                In Depth
              </h2>
            </div>
            <p className="w-full text-sm leading-relaxed text-white/70 md:text-base lg:max-w-md">
              {planet.inDepthDescription}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 self-center lg:grid-cols-3 lg:gap-8">
          {planet.atmosphere
            .filter((atmosphere) => atmosphere.percentage > 0)
            .map((atmosphere) => (
              <div
                key={atmosphere.gas}
                className="relative size-36 rounded-full border border-white/10 bg-white/5 p-2 shadow-[0_0_30px_rgba(255,255,255,0.05)] lg:size-72 lg:p-6"
              >
                <svg
                  className="-rotate-90 drop-shadow-[0_0_12px_rgba(43,127,255,1)]"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-white/10"
                    strokeWidth="1.5"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-blue-500"
                    strokeWidth="1.5"
                    strokeDasharray={100}
                    strokeDashoffset={100 - atmosphere.percentage}
                    strokeLinecap="round"
                  ></circle>
                </svg>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                  <p className="text-2xl font-light text-white lg:text-4xl">
                    {atmosphere.percentage.toLocaleString("de")}%
                  </p>
                  <p className="text-xs font-medium uppercase tracking-widest text-white/50 lg:text-sm">
                    {atmosphere.gas}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
