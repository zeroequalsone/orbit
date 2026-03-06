import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
            <div className="flex flex-col items-center gap-10">
                <h2 className="text-3xl font-semibold uppercase tracking-wide">Keinen Orbit gefunden.</h2>
                <p className="text-xl max-w-xl text-center">Oh nein! Die angeforderte Seite scheint auf einem anderen Planeten zu sein.</p>
                <Link href={"/"}>Zurück zur Startseite?</Link>
            </div>
        </div>
    )
}