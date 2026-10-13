import { Planet } from "@/data/planets";

export default function OverviewSection({ planet }: { planet: Planet }) {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${planet.section[0]}')` }}
    >
      <div className="flex w-full max-w-7xl px-4 py-24">
        <div className="flex w-full flex-col gap-6 rounded-2xl border border-white/10 bg-black/50 p-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] backdrop-blur-md md:p-10 lg:w-auto lg:flex-row lg:gap-14">
          <p
            className="bg-clip-text bg-position-[left_40rem_top_40rem] text-9xl font-semibold text-transparent drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] lg:text-[15rem]"
            style={{
              backgroundImage: `url('${planet.section[0]}')`,
            }}
          >
            01
          </p>
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="flex flex-col gap-4">
              <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
                Kapitel 01
              </span>
              <h2 className="text-3xl font-semibold uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-5xl">
                Übersicht
              </h2>
            </div>
            <div className="flex w-full flex-col gap-6 lg:max-w-md">
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                {planet.descriptionLong}
              </p>
              <p className="text-sm leading-relaxed text-white/70 md:text-base">
                {planet.descriptionShort}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
