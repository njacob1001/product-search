import { FC, FormEventHandler, useMemo, useRef } from 'react'
import styles from './styles.module.scss'

export interface SearchBarProps {
  icon: string[]
  placeholder: string
  searchIcon: string[]
  onSearch: (value: string) => void
  defaultValue?: string
}

export const SearchBar: FC<SearchBarProps> = ({ icon, searchIcon, onSearch, placeholder, defaultValue }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { iconSrc, searchIconSrc } = useMemo(() => {
    return {
      iconSrc: icon.map((image, index) => `${image} ${index + 1}x`).join(', '),
      searchIconSrc: searchIcon.map((image, index) => `${image} ${index + 1}x`).join(', '),
    }
  }, [icon, searchIcon])

  const handleSearch: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSearch(inputRef.current?.value || '')
  }
  return (
    <header className={styles.Header}>
      <div className={styles.ContentWrapper}>
        <img src={icon[0]} alt="Mercado Libre" srcSet={iconSrc} />
        <form onSubmit={handleSearch} className={styles.Form}>
          <input
            className={styles.Input}
            ref={inputRef}
            maxLength={100}
            type="text"
            placeholder={placeholder}
            autoFocus
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
