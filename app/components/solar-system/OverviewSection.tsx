import { Planet } from "@/data/planets";

export default function OverviewSection({ planet }: { planet: Planet }) {
  return (
    <section
      className="min-h-screen bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url('${planet.section[0]}')` }}
    >
      <div className="flex lg:flex-row flex-col gap-6 lg:gap-14 max-w-384 w-full p-8">
        <p
          className="text-9xl lg:text-[15rem] font-semibold bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]"
          style={{
            backgroundImage: `url('${planet.section[0]}')`,
          }}
        >
          01
        </p>
        <div className="flex flex-col gap-8 lg:gap-16">
          <div className="flex flex-col lg:gap-4 gap-8">
            <span className="border border-white w-14 lg:w-28 lg:mb-10"></span>
            <p className="text-3xl lg:text-7xl font-bold uppercase tracking-[0.3em]">
              Übersicht
            </p>
          </div>
          <div className="flex flex-col gap-8 w-xs lg:w-md">
            <p className="text-neutral-300 tracking-wider">
              {planet.descriptionLong}
            </p>
            <p className="text-neutral-300 tracking-wider">
              {planet.descriptionShort}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
