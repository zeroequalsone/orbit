import NasaMedia from "./components/homepage/NasaMedia";
import { getNasaData } from "./lib/nasaData";

export default async function Home() {
  const data = await getNasaData();

  return (
    <div className={`min-h-screen flex flex-col justify-center items-center`}>
      <div className="flex flex-col justify-center items-center p-8 mt-20 gap-10 lg:max-w-384">
        <h1 className="text-3xl lg:text-5xl font-extrabold uppercase tracking-widest text-center lg:w-full w-xs">
          Astronomy Picture of the Day
        </h1>
        <div className="flex lg:flex-row flex-col items-center gap-16">
          <div className="flex flex-col gap-4 lg:items-start items-center">
            <div className="relative lg:size-96 size-80">
              <NasaMedia data={data} />
            </div>
            <p className="text-xl font-semibold italic text-center">”{data.title}”</p>
          </div>
          <p className="lg:w-lg w-xs text-justify">{data.explanation}</p>
        </div>
      </div>
    </div>
  );
}
