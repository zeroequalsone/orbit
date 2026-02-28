const fetchData = async () => {
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" })
  const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=TwQHgVmEaLBdL2wF9ySGrkNs3qn2Cg4Tafv0t55A&date=${today}`, { next: { revalidate: 3600 } })

  if (!res.ok) {
    const text = await res.text()
    console.error("Fetch failed:", res.status, text)
    throw new Error(`Failed to fetch APOD: ${res.status}`)
  }

  return res.json()
}

export default async function Home() {
  const data = await fetchData()

  return (
    <div>
      <figure>
        <h1>{data.title}</h1>
        <img src={data.url} alt={data.title} />
        <p>{data.copyright}</p>
        <figcaption>{data.explanation}</figcaption>
      </figure>
    </div>
  )
}