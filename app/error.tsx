"use client";

import Link from "next/link";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-center bg-cover bg-[url('/BG.png')]">
      <div className="flex flex-col justify-center items-center w-4/5 text-white">
        <div className="flex flex-col items-center gap-10">
          <p className="text-7xl font-extrabold uppercase text-center tracking-[0.3em]">
            Error
          </p>
          <div className="flex flex-col items-center gap-6">
            <p className="text-3xl font-semibold italic text-center max-w-2xl">
              {error.message}
            </p>
            <p className="text-lg text-neutral-300 text-center tracking-wider max-w-xl">
              Wir konnten deine Anfrage leider nicht verarbeiten.
              <br />
              Bitte versuche es später erneut oder gehe zurück zur Startseite.
            </p>
          </div>
          <Link href={`/`}>Zurück zur Startseite</Link>
        </div>
      </div>
    </div>
  );
}
