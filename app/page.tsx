import Image from "next/image";

async function getNasaData() {
  const apikey = process.env.NASA_APOD_API_KEY;

  // ERROR HANDLING
  if (!apikey) {
    throw new Error(
      "NASA_APOD_API_KEY ist nicht in den Umgebungsvariablen definiert.",
    );
  }

  const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "America/New_York",
  });

  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${today}`,
    { next: { revalidate: 3600 } },
  );

  // ERROR HANDLING
  if (!res.ok) {
    switch (res.status) {
      case 400:
        throw new Error(
          "Ungültige Anfrage (400) - diese Koordinaten existieren (noch) nicht im Universum.",
        );
      case 401:
        throw new Error(
          "Zugriff verweigert (401) - ohne gültige Berechtigung kein Zugang zum Kontrollzentrum.",
        );
      case 403:
        throw new Error(
          "Keine Berechtigung (403) - diese Sternenregion ist für deine Mission nicht freigegeben.",
        );
      case 404:
        throw new Error(
          "Nicht gefunden (404) - dieses Himmelsobjekt konnte im kosmischen Netz nicht lokalisiert werden.",
        );
      case 500:
        throw new Error(
          "Bordcomputer-Fehler (500) - ein unerwarteter Störimpuls hat das System beeinträchtigt.",
        );
      default:
        throw new Error(
          "Unbekannter Fehler - das Signal wurde von einem schwarzen Loch verschluckt.",
        );
    }
  }

  return res.json();
}

export default async function Home() {
  const data = await getNasaData();

  const isDirectVideo =
    data.media_type === "video" && data.url.endsWith(".mp4");

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen`}>
      <div className="flex flex-col justify-center items-center w-4/5 text-white">
        <div className="flex flex-col">
          <p className="text-5xl mb-12 font-extrabold uppercase tracking-widest text-center">
            Astronomical Picture of the Day
          </p>
          <div className="flex flex-row gap-16 items-center justify-center">
            <div className="h-120 w-120 relative">
              {data.media_type === "image" ? (
                <Image
                  src={data.url}
                  alt={data.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover select-none"
                  priority
                />
              ) : isDirectVideo ? (
                <video
                  src={data.url}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  muted
                  autoPlay
                  loop
                />
              ) : (
                <iframe
                  src={`${data.url}&autoplay=1&mute=1&loop=1&controls=0&playlist=${data.url.split("/").pop()?.split("?")[0]}`}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover pointer-events-none select-none"
                  allow="autoplay"
                />
              )}
              <p className="text-xl font-semibold italic mt-4">
                ”{data.title}”
              </p>
            </div>
            <p className="w-1/3 text-justify">{data.explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
