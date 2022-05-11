import { FC, useId } from 'react'

interface ImageItem {
  src: string
  type?: string
  media?: string
}

export interface ImageProps {
  images: ImageItem[]
  className?: string
  alt: string
}

export const Image: FC<ImageProps> = ({ images, alt, className }) => {
  const id = useId()
  return (
    <picture className={className}>
      {images.map(
        ({ src, media, type }, index) =>
          Boolean(media) && <source key={`${id}-${index}`} srcSet={src} media={media} type={type} />
      )}
      <img src={images[0].src} alt={alt} />
    </picture>
  )
}
