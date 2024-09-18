import { useEffect, useState, useRef } from 'react'

export default function useNearScreen({
  distance = '100px',
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false)
  const fromRef = useRef()

  useEffect(() => {
    let observer

    const element = externalRef ? externalRef.current : fromRef.current

    const onChange = (entries, observer) => {
      const el = entries[0]
      if (el.isIntersecting) {
        setShow(true)
        once && observer.disconnect()
      } else {
        !once && setShow(false)
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

      element && observer.observe(element)
    })

    return () => observer && observer.disconnect()
  })

  return { isNearScreen, fromRef }
}
