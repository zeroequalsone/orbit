import Link from "next/link"

export default function Navbar() {
    return (
        <div className="fixed w-full z-50 flex justify-center text-white">
            <div className="flex justify-between items-center p-8 max-w-4/5 w-full uppercase">
                <Link href={"/"} className="flex items-center gap-4 text-2xl">
                    <p>Orbit</p>
                </Link>
                <div className={`flex gap-8 tracking-widest font-extralight`}>
                    <Link href={"/explore"} className="hover:font-normal">Entdecken</Link>
                    <Link href={"/solar-system"} className="hover:font-normal">Sonnensystem</Link>
                    <Link href={"/live"} className="hover:font-normal">Live Tracker</Link>
                    <Link href={"/tools"} className="hover:font-normal">Tools</Link>
                    <Link href={"https://github.com/zeroequalsone/orbit"} className="hover:font-normal">GitHub</Link>
                </div>
            </div>
        </div>
    )
}