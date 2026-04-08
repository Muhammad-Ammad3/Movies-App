import React from 'react'
import MovieList from './MovieList'

const MoviesCard = () => {
  return (
    <div>
      <h1 className='bg-zinc-200 p-4 text-3xl font-bold border-l-8 border-blue-500 mt-20 shadow-lg shadow-black rounded'>Popular Movies</h1>
      <MovieList/>
    </div>
  )
}

export default MoviesCard
