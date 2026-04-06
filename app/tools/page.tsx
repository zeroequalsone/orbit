import Link from "next/link";

export default function Tools() {
  return (
    <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
      <div className="flex justify-center items-center flex-col gap-10 w-4/5">
        <h1 className="text-4xl font-bold uppercase tracking-[0.3em]">Tools</h1>
        <div className="flex gap-10">
          <Link
            href="/tools/weight-calculator"
            className="border-2 border-white rounded-full px-8 py-4 text-xl font-light"
          >
            Distance calculator
          </Link>
          <Link
            href="/tools/size-calculator"
            className="border-2 border-white rounded-full px-8 py-4 text-xl font-light"
          >
            Weight calculator
          </Link>
          <Link
            href="/tools/distance-calculator"
            className="border-2 border-white rounded-full px-8 py-4 text-xl font-light"
          >
            Size calculator
          </Link>
        </div>
      </div>
    </div>
  );
}
