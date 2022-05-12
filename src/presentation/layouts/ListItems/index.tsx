import { FC } from 'react'
import { Breadcrumb } from 'presentation/components/Breadcrumb'
import { CardResume, CardResumeProps } from 'presentation/components/CardResume'
import styles from './styles.module.scss'

export type ResultList = Omit<CardResumeProps, 'onClick'>
interface Props {
  result: ResultList[]
  breadcrumb: string[]
  onClick: (id: string) => void
}
export const ListItemsLayout: FC<Props> = ({ breadcrumb, result, onClick }) => {
  return (
    <section className={styles.Container}>
      <Breadcrumb slugs={breadcrumb} />
      <ol className={styles.List}>
        {result.map((item) => (
          <li className={styles.ListItem} key={item.id}>
            <CardResume
              aditionalInfo={item.aditionalInfo}
              description={item.description}
              image={item.image}
              title={item.title}
              titleDecoration={item.titleDecoration}
              id={item.id}
              onClick={onClick}
            />
          </li>
        ))}
      </ol>
    </section>
  )
}
