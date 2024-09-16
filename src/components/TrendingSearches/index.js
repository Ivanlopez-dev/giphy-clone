import React, { useEffect, useState } from 'react'
import Category from 'components/Category'
import getTrendingTerms from 'services/getTrendingTermsService'
import useNearScreen from 'hooks/useNearScreen'

function TrendingSearches() {
  const [trends, setTrends] = useState([])

  useEffect(function () {
    getTrendingTerms().then(setTrends)
  }, [])

  return (
    <Category
      name='Tendencias'
      options={trends}
    />
  )
}

export default function LazyTrending() {
  const { isNearScreen, fromRef } = useNearScreen({ distance: '100px' })

  return <div ref={fromRef}>{isNearScreen ? <TrendingSearches /> : null}</div>
}
