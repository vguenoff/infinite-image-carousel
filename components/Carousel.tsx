'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

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
  const [carouselData, setCarouselData] = useState(data)
  const frame = useRef(0)

  return (
    <section
      className={styles.slider}
      onScroll={e => {
        const { scrollLeft, clientWidth } = e.target as HTMLElement
        frame.current = Math.round(scrollLeft / clientWidth)

        if (frame.current + 1 >= carouselData.length) {
          setCarouselData(carouselData =>
            carouselData.concat(data.map(item => ({ ...item, id: nanoid() }))),
          )
        }
      }}
    >
      {carouselData.map(({ id, urls, description, color }, i) => (
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
