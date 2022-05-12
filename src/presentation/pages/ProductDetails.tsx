import { Factory } from 'platform/factory'
import { DetailedInformation } from 'presentation/layouts/DetailedInformation'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { SearchProductWrapper } from './SearchProductWrapper'

export const ProductDetailsPage: FC = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { data } = useQuery(['details', id], async () => Factory.productUseCases().findProductDetails(id || ''))

  const soldText = data?.item?.soldQuantity ? ` - ${t('sold', { count: data.item.soldQuantity })}` : ''

  return (
    <SearchProductWrapper autofocus={false}>
      <DetailedInformation
        breadcrumb={data?.category || []}
        description={data?.item.description || ''}
        descriptionTitle={t('product.description')}
        extraInfo={`${t(data?.item?.condition ?? ('' as any), { defaultValue: '' })}${soldText}`}
        onBuy={() => {}}
        picture={data?.item.picture || ''}
        price={`$ ${data?.item.price.amount}`}
        title={data?.item.title || ''}
        textButton={t('buy.now')}
      />
    </SearchProductWrapper>
  )
}
