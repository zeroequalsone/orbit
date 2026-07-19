import NasaMedia from "./components/homepage/NasaMedia";
import { getNasaData } from "./lib/nasaData";

export default async function Home() {
  const data = await getNasaData();

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen`}>
      <div className="flex flex-col justify-center items-center w-4/5 text-white">
        <div className="flex flex-col">
          <p className="text-5xl mb-12 font-extrabold uppercase tracking-widest text-center">
            Astronomical Picture of the Day
          </p>
          <div className="flex flex-row gap-16 items-center justify-center">
            <div className="h-120 w-120 relative">
              <NasaMedia data={data} />
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
