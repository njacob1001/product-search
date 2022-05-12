import { FC, PropsWithChildren } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import smallIcon from 'assets/Logo_ML.png'
import icon from 'assets/Logo_ML@2x.png.png.png'
import smallSearchIcon from 'assets/ic_Search.png'
import mediumSearchIcon from 'assets/ic_Search@2x.png.png.png'
import { useTranslation } from 'react-i18next'
import { SearchableLayout } from 'presentation/layouts/Searchable'

const iconSrc = [smallIcon, icon]
const searchIcon = [smallSearchIcon, mediumSearchIcon]

interface Props {
  autofocus?: boolean
}

export const SearchProductWrapper: FC<PropsWithChildren<Props>> = ({ children, autofocus }) => {
  const { t } = useTranslation()
  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('search') ?? ''
  const navigate = useNavigate()

  const handleSearch = (value: string) => {
    navigate(`/items?search=${value}`)
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <SearchableLayout
      icon={iconSrc}
      placeholder={t('page.search.input.placeholder')}
      searchIcon={searchIcon}
      onSearch={handleSearch}
      defaultValue={keyword}
      autofocus={autofocus}
      onClickLogo={handleLogoClick}
    >
      {children}
    </SearchableLayout>
  )
}
