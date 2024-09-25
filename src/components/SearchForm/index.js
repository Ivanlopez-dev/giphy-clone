import React, { useState } from 'react'
import { useLocation } from 'wouter'
import css from './SearchForm.module.css'
import Button from 'components/Button'

function SearhForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')
  const [_, pushLocation] = useLocation()

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    // navigate to other route
    pushLocation(`/search/${keyword}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={css['c-search']}
    >
      <Button>Search</Button>
      <input
        className={css['c-search-input']}
        placeholder='Search a gif here...'
        onChange={handleChange}
        type='text'
        value={keyword}
      />
    </form>
  )
}

export default React.memo(SearhForm)
