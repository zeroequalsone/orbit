import { Planet } from "@/data/planets";

export default function InDepthSection({ planet }: { planet: Planet }) {
  return (
    <section>
      <div className="flex flex-col gap-8 lg:gap-14 max-w-384 lg:p-40 p-8 mx-auto">
        <div className="flex lg:flex-row flex-col gap-6 lg:gap-14 justify-center">
          <p
            className="text-9xl lg:text-[15rem] font-semibold bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]"
            style={{
              backgroundImage: `url('${planet.section[2]}')`,
            }}
          >
            03
          </p>
          <div className="flex flex-col gap-8 lg:gap-16">
            <div className="flex flex-col lg:gap-4 gap-8">
              <span className="border border-white w-14 lg:w-28 lg:mb-10"></span>
              <p className="text-3xl lg:text-7xl font-bold uppercase tracking-[0.3em]">
                In Depth
              </p>
            </div>
            <p className="w-xs lg:w-md text-neutral-300 tracking-wider">
              {planet.inDepthDescription}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-2 self-center lg:gap-24 gap-6">
          {planet.atmosphere
            .filter((atmosphere) => atmosphere.percentage > 0)
            .map((atmosphere) => (
              <div
                key={atmosphere.gas}
                className="relative size-36 lg:size-72 border-2 border-gray-700 rounded-full lg:p-6 p-2"
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
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <p className="text-2xl lg:text-4xl font-light">
                    {atmosphere.percentage.toLocaleString("de")}%
                  </p>
                  <p className="lg:text-base text-sm font-extralight">
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
