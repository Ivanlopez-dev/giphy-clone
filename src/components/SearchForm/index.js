import React, { useState } from 'react'
import { useLocation } from 'wouter'
import css from './SearchForm.module.css'
import Button from 'components/Button'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

export default function SearhForm() {
  const [keyword, setKeyword] = useState('')
  const [rating, setRating] = useState(RATINGS[0])

  const [_, pushLocation] = useLocation()

  const handleChange = evt => {
    setKeyword(evt.target.value)
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    // navigate to other route
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = evt => {
    setRating(evt.target.value)
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
      <select
        onChange={handleChangeRating}
        value={rating}
      >
        <option disabled>Rating type</option>
        {RATINGS.map(rating => (
          <option key={rating}>{rating}</option>
        ))}
      </select>
    </form>
  )
}
