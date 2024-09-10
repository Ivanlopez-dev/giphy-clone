import React from 'react'
import './App.css'
import ListOfGifs from './components/ListOfGifs'

import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <h1>App</h1>
        <Link to='/gif/simpsons'>Gifs de Los Simpsons</Link>
        <Link to='/gif/futurama'>Gifs de Futurama</Link>
        <Link to='/gif/rick'>Gifs de Rick y Morty</Link>
        <Route
          component={ListOfGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  )
}
