import CopyEmailLink from "@/components/ui/ContactButton";

export const metadata = {
  title: "Kontakt — Orbit",
};

export default function Contact() {
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
          Kontakt
        </h1>
        <p className="text-sm text-white/50">
          Kein Funkloch hier - meld dich einfach.
        </p>
      </div>

      <CopyEmailLink />

      <p className="max-w-sm text-sm text-white/60">
        Fragen zu Orbit, Feedback oder einfach Hallo sagen? Ich freu mich über
        jede Nachricht.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/zeroequalsone"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 transition-colors hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/sgoetze"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-widest text-white/70 transition-colors hover:bg-white/10 hover:text-white active:bg-white/10 active:text-white"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
