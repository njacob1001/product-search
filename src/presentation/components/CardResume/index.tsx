import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { convertToSrcSet } from 'utils/parseSrcset'
import styles from './styles.module.scss'

export interface CardResumeProps {
  image: string
  title: string
  titleDecoration: string[]
  description: string
  aditionalInfo: string
  id: string
  onClick: (id: string) => void
}

export const CardResume: FC<CardResumeProps> = ({
  aditionalInfo,
  description,
  image,
  title,
  titleDecoration,
  onClick,
  id,
}) => {
  const titleDecorationSrc = useMemo(() => convertToSrcSet(titleDecoration), [titleDecoration])

  const handleClick = () => {
    onClick(id)
  }

  return (
    <div className={styles.Container} onClick={handleClick}>
      <div className={styles.ImageContainer}>
        {Boolean(image) && <img className={styles.Image} src={image} alt={description} />}
      </div>
      <div className={styles.Column}>
        <div className={styles.TopContainer}>
          <div className={styles.TitleContainer}>
            <div className={styles.Title}>{title}</div>
            {Boolean(titleDecoration?.length) && (
              <div>
                <img className={styles.Decoration} src={titleDecoration[0]} alt={title} srcSet={titleDecorationSrc} />
              </div>
            )}
          </div>
          <span className={styles.AditionalInfo}>{aditionalInfo}</span>
        </div>
        <div className={styles.Description}>
          <h2>{description}</h2>
        </div>
      </div>
    </div>
  )
}

export const ShimmerCardResume: FC = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.ImageContainer}>
        <div className={clsx(styles.Image, styles.Animate)} />
      </div>
      <div className={styles.Column}>
        <div className={styles.TopContainer}>
          <div className={styles.TitleContainer}>
            <div className={clsx(styles.Title, styles.TitleBox, styles.Animate)}></div>
          </div>
          <span className={clsx(styles.AditionalInfo, styles.AditionalInfoBox, styles.Animate)}></span>
        </div>
        <div className={clsx(styles.Description, styles.DescriptionBox, styles.Animate)}></div>
      </div>
    </div>
  )
}
