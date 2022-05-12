import { FC, FormEventHandler, useMemo, useRef } from 'react'
import { convertToSrcSet } from 'utils/parseSrcset'
import styles from './styles.module.scss'

export interface SearchBarProps {
  icon: string[]
  placeholder: string
  searchIcon: string[]
  onSearch: (value: string) => void
  onClickLogo: () => void
  defaultValue?: string
  autofocus?: boolean
}

export const SearchBar: FC<SearchBarProps> = ({
  icon,
  searchIcon,
  onSearch,
  placeholder,
  defaultValue,
  autofocus = true,
  onClickLogo,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { iconSrc, searchIconSrc } = useMemo(() => {
    return {
      iconSrc: convertToSrcSet(icon),
      searchIconSrc: convertToSrcSet(searchIcon),
    }
  }, [icon, searchIcon])

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSearch(inputRef.current?.value || '')
  }
  return (
    <header className={styles.Header}>
      <div className={styles.ContentWrapper}>
        <div className={styles.Logo} onClick={onClickLogo}>
          <img src={icon[0]} alt="Mercado Libre" srcSet={iconSrc} />
        </div>

        <form onSubmit={handleSearch} className={styles.Form}>
          <input
            className={styles.Input}
            ref={inputRef}
            maxLength={100}
            type="text"
            placeholder={placeholder}
            autoFocus={autofocus}
            defaultValue={defaultValue}
          />
          <button className={styles.SearchButton} type="submit">
            <img src={searchIconSrc[0]} srcSet={searchIconSrc} alt="Buscar" />
          </button>
        </form>
      </div>
    </header>
  )
}
