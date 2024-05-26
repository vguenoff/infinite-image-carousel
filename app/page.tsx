import Carousel from '@/components/Carousel'
import Carousel2 from '@/components/Carousel2'

export type Picture = {
  id: string
  color: string
  description: string
  urls: {
    regular: string
    thumb: string
  }
}

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
      <Carousel2 {...{ data }} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Sed ut perspiciatis
        unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
        veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
        enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
        nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate
        velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum
        fugiat quo voluptas nulla pariatur?
      </p>
    </main>
  )
}
