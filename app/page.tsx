import Frame from '@/components/Frame'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

type Picture = {
  id: string
  color: string
  description: string
  urls: {
    // full: string
    regular: string
    thumb: string
  }
}

export default async function Home() {
  const data: Picture[] = await getData()

  return (
    <main className="slider" style={{ width: '100vw', height: '100vh' }}>
      {data.map(({ id, urls, description, color }) => (
        <Frame key={id} src={urls.regular} alt={description} color={color} />
      ))}
    </main>
  )
}
