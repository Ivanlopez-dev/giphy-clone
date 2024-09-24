import React, { useState } from 'react'
import css from './SearchForm.module.css'
import Button from 'components/Button'

function SearhForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    // navigate to other route
    onSubmit({ keyword })
  }

  const handleChange = evt => {
    setKeyword(evt.target.value)
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
