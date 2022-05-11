import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { MinimalistSearch } from 'presentation/layouts/MinimalistSearch'
import smallIcon from 'assets/Logo_ML.png'
import icon from 'assets/Logo_ML@2x.png.png.png'
import smallSearchIcon from 'assets/ic_Search.png'
import mediumSearchIcon from 'assets/ic_Search@2x.png.png.png'
import { useTranslation } from 'react-i18next'

const iconSrc = [smallIcon, icon]
const searchIcon = [smallSearchIcon, mediumSearchIcon]

export const SearchProductPage: FC = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const handleSearch = (value: string) => {
    navigate(`/items?keyword=${value}`)
  }

  return (
    <MinimalistSearch
      icon={iconSrc}
      placeholder={t('page.search.input.placeholder')}
      searchIcon={searchIcon}
      onSearch={handleSearch}
    />
  )
}
