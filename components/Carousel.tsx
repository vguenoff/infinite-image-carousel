'use client'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import styles from './Carousel.module.css'

import type { Picture } from '@/app/page'

export default function Carousel({ data }: { data: Picture[] }) {
  const [carouselData, setCarouselData] = useState(data)
  const frame = useRef(0)

  const onScrollHandler = (target: HTMLElement) => {
    const { scrollLeft, clientWidth } = target
    frame.current = Math.round(scrollLeft / clientWidth)

    if (frame.current + 1 >= carouselData.length) {
      setCarouselData([
        ...carouselData,
        ...data.map(item => ({ ...item, id: nanoid() })),
      ])
    }
  }

  return (
    <section
      className={styles.slider}
      onScroll={e => onScrollHandler(e.target as HTMLElement)}
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
