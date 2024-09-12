import React from 'react'
import { Link } from 'wouter'
import './Gif.css'

export default function Gif({ title, url }) {
  return (
    <div className='Gif'>
      <Link>
        <h4>{title}</h4>
        <img
          alt={title}
          src={url}
          loading='lazy'
        />
      </Link>
    </div>
  )
}
