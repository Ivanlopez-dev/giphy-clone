import React, { useReducer } from 'react'
import { useLocation } from 'wouter'
import css from './SearchForm.module.css'
import Button from 'components/Button'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const ACTIONS = {
  UPDATE_KEYWORD: 'update_keyword',
  UPDATE_RATING: 'update_rating',
}

const ACTIONS_REDUCERS = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export default function SearchForm({
  initialKeyword = '',
  initialRating = 'g',
}) {
  const [state, dispatch] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  })

  const { keyword, rating, times } = state

  const [_, pushLocation] = useLocation()

  const handleChange = evt => {
    dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    // navigate to other route
    pushLocation(`/search/${keyword}/${rating}`)
  }

  const handleChangeRating = evt => {
    dispatch({ type: ACTIONS.UPDATE_RATING, payload: evt.target.value })
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
