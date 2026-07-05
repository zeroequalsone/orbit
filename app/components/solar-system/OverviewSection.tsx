import { Planet } from "@/data/planets";

export default function OverviewSection({ planet }: { planet: Planet }) {
  return (
    <section
      className="min-h-screen bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url('${planet.section[0]}')` }}
    >
      <div className="flex w-4/5 gap-14">
        <p
          className="text-[15rem] font-semibold leading-44 bg-clip-text text-transparent bg-position-[left_40rem_top_40rem]"
          style={{
            backgroundImage: `url('${planet.section[0]}')`,
          }}
        >
          01
        </p>
        <div className="flex flex-col gap-6">
          <p className="text-7xl font-bold uppercase tracking-[0.3em] border-t-2 w-28 pt-14 mb-8">
            Übersicht
          </p>
          <p className="w-2/5 text-neutral-300 tracking-wider">
            {planet.descriptionLong}
          </p>
          <p className="w-2/5 text-neutral-300 tracking-wider">
            {planet.descriptionShort}
          </p>
        </div>
      </div>
    </section>
  );
}
