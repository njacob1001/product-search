import { FC } from 'react'
import { Breadcrumb, BreadcrumbProps } from 'presentation/components/Breadcrumb'

interface Props extends BreadcrumbProps {
  result: any[]
}
export const ListItemsLayout: FC<Props> = ({ items }) => {
  return (
    <section>
      <Breadcrumb items={items} />
      <ol>
        <li>hello</li>
      </ol>
    </section>
  )
}
