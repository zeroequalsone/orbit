import CopyEmailLink from "@/components/ui/ContactButton";

export const metadata = {
  title: "Impressum — Orbit",
};

export default function Imprint() {
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
          Impressum
        </h1>
        <p className="text-sm text-white/50">
          Kein Unternehmen, kein Haftungsroman - nur ein GitHub-Projekt.
        </p>
      </div>

      <div className="flex w-full flex-col gap-10 text-left">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Angaben nicht gemäß § 5 TMG
          </h2>
          <p className="text-sm text-white/80">Sebastian Götze</p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Kontakt
          </h2>
          <CopyEmailLink />
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Worum geht&apos;s hier?
          </h2>
          <p className="text-sm text-white/80">
            Orbit ist ein privates, nicht-kommerzielles Portfolio-Projekt. Kein
            Unternehmen, kein Geschäftszweck - nur Code, den ich zum Lernen und
            Zeigen öffentlich auf GitHub teile.
          </p>
          <a
            href="https://github.com/zeroequalsone/orbit"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 transition-colors hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white"
          >
            Quellcode auf GitHub
          </a>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Haftungsausschluss
          </h2>
          <p className="text-sm text-white/80">
            Für Inhalte externer Links übernehme ich keine Verantwortung -
            verlinkte Inhalte liegen außerhalb meines Einflussbereichs.
          </p>
        </section>
      </div>
    </div>
  );
}
