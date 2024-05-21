import Image from 'next/image'

export default function Frame({
  src,
  alt,
  color,
}: {
  src: string
  alt: string
  color: string
}) {
  return (
    <div
      className="frame"
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: color,
      }}
    >
      <Image
        {...{ src, alt }}
        sizes="100%"
        fill
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  )
}
