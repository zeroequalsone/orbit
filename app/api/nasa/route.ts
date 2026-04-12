import { NextResponse } from "next/server"

export async function GET() {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${process.env.NASA_APOD_API_KEY}&date=${new Date().toISOString().split('T')[0]}`)
    const data = await res.json()

    return NextResponse.json(data)
}