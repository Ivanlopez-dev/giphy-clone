import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'

export function useGifs({ keyword } = { keyword: null }) {
  const [loading, setLoading] = useState(false)
  const { gifs, setGifs } = useContext(GifsContext)

  useEffect(
    function () {
      setLoading(true)
      // recovering keyword from localStorage
      const keywordToUse =
        keyword || localStorage.getItem('lastKeyword') || 'pulp fiction'

      getGifs({ keyword: keywordToUse }).then(gifs => {
        setGifs(gifs)
        setLoading(false)
        // save keyword into localStorage
        localStorage.setItem('lastKeyword', keyword)
      })
    },
    [keyword, setGifs]
  )

  return { loading, gifs }
}
