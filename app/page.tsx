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
        <strong>
          Considered a pioneer of public library service in the United States,
          the Boston Public Library is among the three largest collections in
          the country and is committed to be ‘Free for All’.
        </strong>
      </p>
      <Carousel {...{ data }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </main>
  )
}
