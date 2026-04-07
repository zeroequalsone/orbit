"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/nasa")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")]`}
    >
      <div className="flex flex-col justify-center items-center w-4/5 text-white">
        {data ? (
          <>
            <div className="flex flex-col">
              <p className="text-5xl mb-12 font-extrabold uppercase tracking-widest text-center">
                Astronomical Picture of the Day
              </p>
              <div className="flex flex-row gap-16 items-center justify-center">
                <div className="h-120 w-120">
                  <Image
                    src={data?.url}
                    alt={data?.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <p className="text-xl font-semibold italic mt-4">
                    ”{data?.title}”
                  </p>
                </div>
                <p className="w-1/3 text-justify">{data?.explanation}</p>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-4xl text-white">
            Houston, wir greifen gerade auf die Daten zu...
          </h1>
        )}
      </div>
    </div>
  );
}
