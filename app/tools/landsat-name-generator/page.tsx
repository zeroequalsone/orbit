"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";

export default function LandSatNameGenerator() {
  const ref = useRef<HTMLDivElement>(null);

  const [name, setName] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const letterDatabase = {
    a: [
      "/landsatLetters/a_0.jpg",
      "/landsatLetters/a_1.jpg",
      "/landsatLetters/a_2.jpg",
      "/landsatLetters/a_3.jpg",
      "/landsatLetters/a_4.jpg",
    ],
    b: ["/landsatLetters/b_0.jpg", "/landsatLetters/b_1.jpg"],
    c: [
      "/landsatLetters/c_0.jpg",
      "/landsatLetters/c_1.jpg",
      "/landsatLetters/c_2.jpg",
    ],
    d: ["/landsatLetters/d_0.jpg", "/landsatLetters/d_1.jpg"],
    e: [
      "/landsatLetters/e_0.jpg",
      "/landsatLetters/e_1.jpg",
      "/landsatLetters/e_2.jpg",
      "/landsatLetters/e_3.jpg",
    ],
    f: ["/landsatLetters/f_0.jpg", "/landsatLetters/f_1.jpg"],
    g: ["/landsatLetters/g_0.jpg"],
    h: ["/landsatLetters/h_0.jpg", "/landsatLetters/h_1.jpg"],
    i: [
      "/landsatLetters/i_0.jpg",
      "/landsatLetters/i_1.jpg",
      "/landsatLetters/i_2.jpg",
      "/landsatLetters/i_3.jpg",
      "/landsatLetters/i_4.jpg",
    ],
    j: [
      "/landsatLetters/j_0.jpg",
      "/landsatLetters/j_1.jpg",
      "/landsatLetters/j_2.jpg",
    ],
    k: ["/landsatLetters/k_0.jpg", "/landsatLetters/k_1.jpg"],
    l: [
      "/landsatLetters/l_0.jpg",
      "/landsatLetters/l_1.jpg",
      "/landsatLetters/l_2.jpg",
      "/landsatLetters/l_3.jpg",
    ],
    m: [
      "/landsatLetters/m_0.jpg",
      "/landsatLetters/m_1.jpg",
      "/landsatLetters/m_2.jpg",
    ],
    n: [
      "/landsatLetters/n_0.jpg",
      "/landsatLetters/n_1.jpg",
      "/landsatLetters/n_2.jpg",
    ],
    o: ["/landsatLetters/o_0.jpg", "/landsatLetters/o_1.jpg"],
    p: ["/landsatLetters/p_0.jpg", "/landsatLetters/p_1.jpg"],
    q: ["/landsatLetters/q_0.jpg", "/landsatLetters/q_1.jpg"],
    r: [
      "/landsatLetters/r_0.jpg",
      "/landsatLetters/r_1.jpg",
      "/landsatLetters/r_2.jpg",
      "/landsatLetters/r_3.jpg",
    ],
    s: [
      "/landsatLetters/s_0.jpg",
      "/landsatLetters/s_1.jpg",
      "/landsatLetters/s_2.jpg",
    ],
    t: ["/landsatLetters/t_0.jpg", "/landsatLetters/t_1.jpg"],
    u: ["/landsatLetters/u_0.jpg", "/landsatLetters/u_1.jpg"],
    v: [
      "/landsatLetters/v_0.jpg",
      "/landsatLetters/v_1.jpg",
      "/landsatLetters/v_2.jpg",
      "/landsatLetters/v_3.jpg",
    ],
    w: ["/landsatLetters/w_0.jpg", "/landsatLetters/w_1.jpg"],
    x: [
      "/landsatLetters/x_0.jpg",
      "/landsatLetters/x_1.jpg",
      "/landsatLetters/x_2.jpg",
    ],
    y: [
      "/landsatLetters/y_0.jpg",
      "/landsatLetters/y_1.jpg",
      "/landsatLetters/y_2.jpg",
    ],
    z: ["/landsatLetters/z_0.jpg", "/landsatLetters/z_1.jpg"],
  };

  const generateImages = (name: string) => {
    {
      const imageList: string[] = [];

      const letterArray = [...name];

      letterArray.forEach((letter) => {
        const imageLetterList =
          letterDatabase[letter.toLowerCase() as keyof typeof letterDatabase];

        const randomIndex = Math.floor(Math.random() * imageLetterList.length);

        const randomImage = imageLetterList[randomIndex];

        imageList.push(randomImage);
      });

      setImages(imageList);
    }
  };

  const onDownloadClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "orbit.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  useEffect(() => {
    generateImages("orbit");
  }, []);

  return (
    <div className="text-white min-h-screen">
      <section className='min-h-screen flex flex-col justify-center items-center bg-center bg-cover bg-[url("/planets/BG.png")]'>
        <div className="flex flex-col items-center gap-20 w-4/5">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-5xl font-bold uppercase tracking-[0.3em]">
              Landsat Name Generator
            </h1>
            <h2 className="text-lg">
              (Wie sieht dein Name in Landsat Bildern aus?)
            </h2>
          </div>
          <div ref={ref} className="flex flex-wrap gap-4 justify-center h-72">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Letter ${index + 1}`}
                className="h-full"
              />
            ))}
          </div>
          <div className="flex text-white bg-black/50 w-fit p-8 gap-4 rounded-xl">
            <input
              type="text"
              value={name}
              className="border-2 p-4 rounded-xl"
              onChange={(e) =>
                setName(e.target.value.replace(/[^A-Za-z]/g, ""))
              }
              onKeyDown={(e) =>
                e.key === "Enter" && name.length > 0 && generateImages(name)
              }
              maxLength={25}
              autoFocus
            />
            <button
              className="border-2 p-4 rounded-xl cursor-pointer"
              onClick={() => name.length > 0 && generateImages(name)}
            >
              Enter
            </button>
            {images.length > 0 && (
              <button
                onClick={onDownloadClick}
                className="border-2 p-4 rounded-xl cursor-pointer"
              >
                Download
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
