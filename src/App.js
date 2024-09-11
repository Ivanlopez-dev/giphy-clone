import React from 'react'
import './App.css'

import { Link, Route } from 'wouter'

export default function App() {
  return (
    <div className='App'>
      <section className='App-content'>
        <Link to='/'>
          <p>Giffy Clone</p>
        </Link>
        <Route
          component={Home}
          path='/'
        />
        <Route
          component={SearchResults}
          path='/search/:keyword'
        />
        <Route
          component={Detail}
          path='/gif/:id'
        />
      </section>
    </div>
  )
}
