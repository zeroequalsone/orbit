import Image from "next/image";
import { getNasaData } from "./data/lib/nasaData";

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
