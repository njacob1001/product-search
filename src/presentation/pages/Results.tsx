import { Factory } from 'platform/factory'
import { ListItemsLayout, ResultList } from 'presentation/layouts/ListItems'
import { FC, useMemo } from 'react'
import { useQuery } from 'react-query'
import { useNavigate, useSearchParams } from 'react-router-dom'
import freeShipingx1 from 'assets/ic_shipping.png'
import freeShipingx2 from 'assets/ic_shipping@2x.png.png.png'
import { SearchProductWrapper } from './SearchProductWrapper'

export const ResultsPage: FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('search') ?? ''
  const { data } = useQuery(['search', keyword], async () => Factory.productUseCases().findProducts(keyword))

  const result = useMemo(
    () =>
      data?.items?.map(
        (item): ResultList => ({
          id: item.id,
          aditionalInfo: item.city,
          description: item.title,
          image: item.picture,
          title: `$ ${item.price.amount ?? ''}`,
          titleDecoration: item.freeShiping ? [freeShipingx1, freeShipingx2] : [],
        })
      ) ?? [],
    [data]
  )

  const handleClick = (id: string) => {
    navigate(`/items/${id}`)
  }

  return (
    <SearchProductWrapper autofocus={false}>
      <ListItemsLayout breadcrumb={data?.categories || []} result={result} onClick={handleClick} />
    </SearchProductWrapper>
  )
}
