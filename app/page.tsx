import Carousel from '@/components/Carousel'
import type { Picture } from '@/components/Carousel'

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/content`)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data: Picture[] = await getData()

  return (
    <main>
      <h1>Boston Public Library</h1>
      <p>
        Considered a pioneer of public library service in the United States, the
        Boston Public Library is among the three largest collections in the
        country and is committed to be ‘Free for All’.
      </p>
      <Carousel {...{ data }} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        illum deleniti explicabo quisquam corporis enim in, consectetur veniam
        adipisci quaerat nam modi voluptatum iure obcaecati magni repudiandae
        aliquam? Soluta, ad.
      </p>
    </main>
  )
}
