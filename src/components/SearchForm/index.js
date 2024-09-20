import React, { useState } from 'react'

export default function SearhForm({ onSubmit }) {
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
    <form onSubmit={handleSubmit}>
      <button>Search</button>
      <input
        placeholder='Search a gif here...'
        onChange={handleChange}
        type='text'
        value={keyword}
      />
    </form>
  )
}
