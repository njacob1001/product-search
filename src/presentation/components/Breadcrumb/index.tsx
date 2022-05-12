import { Arrow } from 'presentation/atoms/icons/Arrow'
import { FC, useId } from 'react'
import styles from './styles.module.scss'
export interface BreadcrumbProps {
  slugs: string[]
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ slugs }) => {
  const id = useId()

  return (
    <ol className={styles.Container}>
      {slugs.map((item, index) => (
        <li className={styles.Slug} key={`${id}-${index}`}>
          <span>{item}</span>
          {index <= slugs.length - 2 && <Arrow size={12} color="var(--gray-light)" />}
        </li>
      ))}
    </ol>
  )
}
