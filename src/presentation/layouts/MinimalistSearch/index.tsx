import { FC, FormEventHandler, useMemo, useRef } from 'react'
import styles from './styled.module.scss'

interface Props {
  icon: string[]
  placeholder: string
  searchIcon: string[]
  onSearch: (value: string) => void
}

export const MinimalistSearch: FC<Props> = ({ icon = [], placeholder, searchIcon = [], onSearch }) => {
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
    <main className={styles.Container}>
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
            />
            <button className={styles.SearchButton} type="submit">
              <img src={searchIconSrc[0]} srcSet={searchIconSrc} alt="Buscar" />
            </button>
          </form>
        </div>
      </header>
    </main>
  )
}
