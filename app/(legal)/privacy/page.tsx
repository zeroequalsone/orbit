import CopyEmailLink from "@/components/ui/ContactButton";

export const metadata = {
  title: "Datenschutz — Orbit",
};

export default function Datenschutz() {
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
          Datenschutz
        </h1>
        <p className="text-sm text-white/50">
          Spoiler: Hier wird nichts gespeichert, was dich nachts wachhält.
        </p>
      </div>

      <div className="flex w-full flex-col gap-10 text-left">
        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Angaben nicht gemäß Art. 13 DSGVO
          </h2>
          <p className="text-sm text-white/80">
            Das hier ist keine offizielle, rechtsverbindliche
            Datenschutzerklärung - nur eine ehrliche Zusammenfassung, weil Orbit
            ein privates Portfolio-Projekt ist und kein Unternehmen.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Was passiert mit deinen Daten?
          </h2>
          <p className="text-sm text-white/80">
            Nichts Dramatisches. Keine Cookie-Banner, kein Tracking, keine
            Analytics-Tools, die dir durchs Internet hinterherlaufen.
          </p>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-xs font-medium uppercase tracking-widest text-white/50">
            Hosting
          </h2>
          <p className="text-sm text-white/80">
            Die Seite läuft auf Vercel. Wie bei jedem Hosting-Anbieter werden
            dabei technisch bedingt kurzzeitig Server-Logs verarbeitet (z. B.
            IP-Adresse, Zeitstempel) - das passiert automatisch im Hintergrund,
            nicht durch mich persönlich.
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
