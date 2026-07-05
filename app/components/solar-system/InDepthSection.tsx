import { Planet } from "@/data/planets";

export default function InDepthSection({ planet }: { planet: Planet }) {
  return (
    <section className="flex flex-col min-h-screen justify-center items-center gap-24 pt-48 pb-48">
      <div className="flex items-center justify-center gap-24 w-4/5">
        <p
          className="text-[15rem] font-semibold leading-44 bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]"
          style={{
            backgroundImage: `url('${planet.section[2]}')`,
          }}
        >
          03
        </p>
        <div className="flex flex-col gap-12">
          <span className="border-t-2 w-32"></span>
          <p className="text-7xl font-bold uppercase tracking-[0.3em]">
            In Depth
          </p>
          <p className="w-2xl text-neutral-300 font-semibold tracking-wider leading-loose">
            {planet.inDepthDescription}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-24">
        {planet.atmosphere
          .filter((atmosphere) => atmosphere.percentage > 0)
          .map((atmosphere) => (
            <div key={atmosphere.gas}>
              <div className="relative size-72 border-2 border-gray-700 rounded-full p-6">
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
                  <p className="text-4xl font-light">
                    {atmosphere.percentage.toLocaleString("de")}%
                  </p>
                  <p className="font-extralight">{atmosphere.gas}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
