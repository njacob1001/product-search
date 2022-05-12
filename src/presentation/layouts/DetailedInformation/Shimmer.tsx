import clsx from 'clsx'
import { FC } from 'react'
import styles from './styles.module.scss'

export const Shimmer: FC = () => (
  <section className={styles.Container}>
    <div className={styles.DetailsPaper}>
      <div className={styles.DescriptionRow}>
        <div className={styles.ImageContainer}>
          <div className={styles.ImageBox} />
        </div>
        <div className={styles.DetailsColumn}>
          <div className={clsx(styles.ExtraInfo, styles.ExtraInfoBox)} />
          <div className={clsx(styles.Title, styles.TitleBox)} />
          <div className={clsx(styles.Price, styles.PriceBox)} />
        </div>
      </div>
      <div className={styles.DescriptionContainer}>
        <div className={clsx(styles.TitleDescription, styles.TitleDescriptionBox)} />
        <div className={clsx(styles.Description, styles.DescriptionBox)} />
      </div>
    </div>
  </section>
)
