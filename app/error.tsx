"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  const retry = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };

  return (
    <div className="flex flex-col items-center px-4 pb-24 pt-40">
      <div className="flex w-full max-w-7xl flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-8 text-center md:gap-10">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-widest text-white/60">
            Verbindung unterbrochen
          </span>
          <h1 className="text-5xl font-extrabold uppercase tracking-[0.3em] text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] md:text-7xl">
            Error
          </h1>
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <p className="max-w-2xl text-xl font-semibold italic text-white/80 md:text-3xl">
              Das Signal wurde von einem schwarzen Loch verschluckt.
            </p>
            <p className="max-w-2xs text-sm tracking-wider text-white/60 md:max-w-xl md:text-lg">
              Wir konnten deine Anfrage leider nicht verarbeiten.
              <br />
              Bitte versuche es erneut oder gehe zurück zur Startseite.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <button
              type="button"
              onClick={retry}
              className="cursor-pointer rounded-full border border-white/20 bg-white/10 px-6 py-2 text-xs font-medium uppercase tracking-widest text-white transition-colors hover:bg-white/20 active:bg-white/20"
            >
              Erneut versuchen
            </button>
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-xs font-medium uppercase tracking-widest text-white/70 transition-colors hover:border-white/20 hover:bg-white/10 hover:text-white active:border-white/20 active:bg-white/10 active:text-white"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
