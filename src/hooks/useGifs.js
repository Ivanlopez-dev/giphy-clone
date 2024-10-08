import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const [loadingNextPage, setLoadingNextPage] = useState(false)

  const [page, setPage] = useState(INITIAL_PAGE)
  const { gifs, setGifs } = useContext(GifsContext)

  // recover keyword from localStorage
  const keywordToUse =
    keyword || localStorage.getItem('lastKeyword') || 'pulp fiction'

  useEffect(
    function () {
      setLoading(true)

      getGifs({ keyword: keywordToUse, rating }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // save keyword into localStorage
        gifs.length && localStorage.setItem('lastKeyword', keywordToUse)
      })
    },
    [keyword, keywordToUse, setGifs, rating]
  )

  useEffect(
    function () {
      if (page === INITIAL_PAGE) return

      setLoadingNextPage(true)

      getGifs({ keyword: keywordToUse, page, rating }).then(nextGifs => {
        setGifs(prevGifs => prevGifs.concat(nextGifs))
        setLoadingNextPage(false)
      })
    },
    [keywordToUse, page, setGifs, rating]
  )

  return { loading, loadingNextPage, gifs, setPage }
}
