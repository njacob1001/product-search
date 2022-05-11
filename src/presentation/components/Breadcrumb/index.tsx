import { FC, useId } from 'react'

export interface BreadcrumbProps {
  items: string[]
}

export const Breadcrumb: FC<BreadcrumbProps> = ({ items }) => {
  const id = useId()
  return (
    <ol>
      {items.map((item, index) => (
        <li key={`${id}-${index}`}>{item}</li>
      ))}
    </ol>
  )
}
