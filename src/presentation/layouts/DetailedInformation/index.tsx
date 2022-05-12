import { Breadcrumb } from 'presentation/components/Breadcrumb'
import { FC } from 'react'
import styles from './styles.module.scss'

interface Props {
  description: string
  descriptionTitle: string
  title: string
  price: string
  extraInfo: string
  picture: string
  breadcrumb: string[]
  textButton: string
  onBuy: () => void
}

export const DetailedInformation: FC<Props> = ({
  description,
  descriptionTitle,
  extraInfo,
  picture,
  price,
  title,
  breadcrumb,
  textButton,
  onBuy,
}) => {
  return (
    <section className={styles.Container}>
      <Breadcrumb slugs={breadcrumb} />
      <div className={styles.DetailsPaper}>
        <div className={styles.DescriptionRow}>
          <div className={styles.ImageContainer}>
            <img src={picture} alt={title} />
          </div>
          <div className={styles.DetailsColumn}>
            <div className={styles.ExtraInfo}>{extraInfo}</div>
            <h1 className={styles.Title}>{title}</h1>
            <div className={styles.Price}>{price}</div>
            <button className={styles.Button}>{textButton}</button>
          </div>
        </div>
        <div className={styles.DescriptionContainer}>
          <div className={styles.TitleDescription}>{descriptionTitle}</div>
          <p className={styles.Description}>{description}</p>
        </div>
      </div>
    </section>
  )
}
