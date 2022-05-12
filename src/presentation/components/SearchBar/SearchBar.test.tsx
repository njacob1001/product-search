import { render, fireEvent, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { SearchBar } from './index'

describe('Search bar', () => {
  test('onSearch event should be called once with default value when button click', async () => {
    const onSearch = vi.fn()
    render(
      <SearchBar
        icon={[]}
        onClickLogo={() => {}}
        onSearch={onSearch}
        placeholder=""
        searchIcon={[]}
        autofocus
        defaultValue="test"
      />
    )

    fireEvent.click(screen.getByRole('button'))

    expect(onSearch.mock.calls.length).toBe(1)
    expect(onSearch.mock.calls[0][0]).toBe('test')
  })
})
