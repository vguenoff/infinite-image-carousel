'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { nanoid } from 'nanoid'

import styles from './Carousel.module.css'

import type { Picture } from '@/app/page'

export default function Carousel({ data }: { data: Picture[] }) {
  const [currentFrame, setCurrentFrame] = useState(0)
  const carouselRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const carouselRefCurrent = carouselRef.current as HTMLElement

    carouselRefCurrent.scrollTo({
      left: carouselRefCurrent.clientWidth * currentFrame,
      top: 0,
      behavior: 'smooth',
    })
  }, [currentFrame])

  const onScrollHandler = (target: HTMLElement) => {
    const { scrollLeft, clientWidth } = target
    const newFrame = Math.round(scrollLeft / clientWidth)

    if (currentFrame !== newFrame) {
      if (newFrame >= data.length) {
        target.scrollTo(0, 0)
        setCurrentFrame(0)
      } else {
        setCurrentFrame(newFrame)
      }
    }
  }

  const ghostFrames = Array.from({ length: data.length + 1 }).map(() => ({
    id: nanoid(),
  }))

  return (
    <div className={styles.wrapper}>
      <section className={styles.slider} ref={carouselRef}>
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
      <section
        className={styles.ghostSlider}
        onScroll={e => onScrollHandler(e.target as HTMLElement)}
      >
        {ghostFrames.map(({ id }) => (
          <div className={styles.frame} key={id} />
        ))}
      </section>
    </div>
  )
}
