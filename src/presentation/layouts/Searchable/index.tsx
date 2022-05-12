import { SearchBar, SearchBarProps } from 'presentation/components/SearchBar'
import { FC, PropsWithChildren } from 'react'
import styles from './styled.module.scss'

type Props = PropsWithChildren<SearchBarProps>

export const SearchableLayout: FC<Props> = ({
  icon = [],
  placeholder,
  searchIcon = [],
  onSearch,
  defaultValue,
  autofocus,
  children,
}) => {
  return (
    <main className={styles.Container}>
      <SearchBar
        autofocus={autofocus}
        defaultValue={defaultValue}
        icon={icon}
        searchIcon={searchIcon}
        onSearch={onSearch}
        placeholder={placeholder}
      />
      {children}
    </main>
  )
}
