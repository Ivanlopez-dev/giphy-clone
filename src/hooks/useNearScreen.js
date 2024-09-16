import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({ distance = '100px' } = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(function () {
    let observer

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        observer.disconnect()
      }
    }
    // Using polyfill, because IE browser got no support compatibility with IntersectionObserver
    Promise.resolve(
      typeof IntersectionObserver !== 'undefined'
        ? IntersectionObserver
        : // Imports the support provider for IE browser dynamically
          import('intersection-observer')
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      })

      observer.observe(fromRef.current)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
