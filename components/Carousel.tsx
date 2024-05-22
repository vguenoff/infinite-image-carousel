import Image from 'next/image'
import styles from './Carousel.module.css'

export type Picture = {
  id: string
  color: string
  description: string
  urls: {
    regular: string
    thumb: string
  }
}

type Props = {
  data: Picture[]
}

export default function Carousel({ data }: Props) {
  return (
    <section className={styles.slider}>
      {data.map(({ id, urls, description, color }, i) => (
        <div
          className={styles.frame}
          style={{ backgroundColor: color }}
          key={id}
        >
          <Image src={urls.regular} alt={description} fill priority={!i} />
        </div>
      ))}
    </section>
  )
}
