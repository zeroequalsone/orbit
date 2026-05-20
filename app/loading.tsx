export default function Loading() {
  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen bg-center bg-cover bg-[url("/BG.png")]`}
    >
      <div className="flex flex-col justify-center items-center w-4/5 text-white">
        <h1 className="text-4xl text-white">
          Houston, wir greifen gerade auf die Daten zu...
        </h1>
      </div>
    </div>
  );
}
