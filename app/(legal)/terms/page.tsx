import CopyEmailLink from "@/components/ui/ContactButton";

export const metadata = {
  title: "AGB — Orbit",
};

export default function AGB() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-16 px-4 py-32 text-center">
      <div className="relative h-16 w-16">
        <span className="absolute inset-0 rounded-full border border-white/20" />
        <span className="absolute inset-0 animate-[spin_6s_linear_infinite]">
          <span className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl uppercase tracking-tight text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          AGB
        </h1>
        <p className="text-sm text-white/50">
          Spoiler: Es gibt nichts zu kaufen, also auch keine Bedingungen dafür.
        </p>
      </div>

      <div className="flex w-full flex-col gap-10 text-left">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Angaben nicht gemäß § 305 BGB
          </h2>
          <p className="text-sm text-white/80">
            Hier wird nichts verkauft, abonniert oder vertraglich geregelt -
            also auch keine echten Geschäftsbedingungen. Orbit ist ein privates
            Portfolio-Projekt, kein Shop.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Nutzung
          </h2>
          <p className="text-sm text-white/80">
            Du darfst die Seite benutzen, erkunden und dich über
            Astronomie-Daten freuen. Mehr Bedingungen gibt es nicht.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Gewährleistung
          </h2>
          <p className="text-sm text-white/80">
            Die Seite funktioniert in der Regel wie gedacht. Falls doch mal
            nicht: Es ist ein Lernprojekt, kein SLA-pflichtiges Produkt.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Fragen?
          </h2>
          <CopyEmailLink />
        </section>
      </div>
    </div>
  );
}
