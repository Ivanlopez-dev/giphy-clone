import { useGifs } from 'hooks/useGifs'
import { useEffect, useState } from 'react'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gifFromCache = gifs.find(singleGif => singleGif.id === id)

  const [gif, setGif] = useState(gifFromCache)

  useEffect(
    function () {
      if (!gif) {
        // call service if dont have Gif
        getSingleGif({ id }).then(setGif)
      }
    },
    [gif, id]
  )

  return { gif }
}
