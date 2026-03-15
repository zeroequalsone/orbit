import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex justify-center items-center min-h-screen bg-center bg-cover bg-[url("/planets/BG.png")] text-white'>
            <div className="flex flex-col items-center gap-10">
                <h2 className="text-2xl lg:text-3xl font-semibold uppercase tracking-wide text-center">”Houston, we've had a problem here!”</h2>
                <p className="lg:text-xl max-w-xs lg:max-w-xl text-center">Die angeforderte Seite scheint in einem anderen Orbit zu sein.</p>
                <Link href={"/"} className='italic'>Zurück zur Startseite?</Link>
            </div>
        </div>
    )
}