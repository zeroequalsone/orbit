"use client"
import { ListIcon, XIcon } from "@phosphor-icons/react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className={"fixed w-full z-50 flex justify-center text-white bg-black/50"}>
            <div className="hidden lg:flex justify-between items-center pt-8 pb-8 lg:max-w-4/5 w-full uppercase">
                <Link href={"/"} className="text-2xl">
                    <p>Orbit</p>
                </Link>
                <div className="flex gap-8 tracking-widest font-extralight">
                    <Link href={"/explore"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Entdecken</Link>
                    <Link href={"/solar-system"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Sonnensystem</Link>
                    <Link href={"/live"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Live Tracker</Link>
                    <Link href={"/tools"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
                    <Link href={"https://github.com/zeroequalsone/orbit"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>GitHub</Link>
                </div>
            </div>
            <div className={`flex lg:hidden p-8 w-full uppercase`}>
                <div className="flex justify-between w-full z-50">
                    <Link href={"/"} className="text-2xl"><p>Orbit</p></Link>
                    {mobileMenuOpen ? <XIcon className="text-3xl" onClick={() => {
                        setMobileMenuOpen(false)
                    }} /> : <ListIcon className="text-3xl" onClick={() => {
                        setMobileMenuOpen(true)
                    }} />}
                </div>
                {mobileMenuOpen && (
                    <div className="fixed inset-0 bg-[url('/planets/BG.png')] bg-center bg-cover flex items-center justify-center">
                        <div className="flex flex-col justify-center items-center gap-16 p-8 text-xl uppercase">
                            <Link href={"/explore"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Entdecken</Link>
                            <Link href={"/solar-system"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Sonnensystem</Link>
                            <Link href={"/live"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Live Tracker</Link>
                            <Link href={"/tools"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>Tools</Link>
                            <Link href={"https://github.com/zeroequalsone/orbit"} className="hover:font-normal" onClick={() => setMobileMenuOpen(false)}>GitHub</Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}