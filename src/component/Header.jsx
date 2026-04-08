import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import MoviesCard from './MoviesCard'

const API_KEY = "835779eab3e92b614fb56a2a2d43cb23"
const IMG_PATH = " https://image.tmdb.org/t/p/w1280";

const Header = () => {

    const [movies, setMovies] = useState([])

    const MoviesApp = async () => {
        try {
            const data = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`)
            const result = await data.json()
            // console.log(result)
            setMovies(result)
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        MoviesApp()
    }, [])

  return (<>
    <header>
    <div className='bg-blue-600 py-3 shadow-white my-12 rounded'>
      <div className='flex justify-between items-center px-4'>
        <div className='flex items-center mr-20'>
        <img src={Logo} alt="Logo" className='pr-5 h-10 w-16' />
        <h2 className='text-white font-bold text-2xl'>Movies</h2>
        </div>
        <div className='w-1/2'>
            <form action="">
                <input type="text" name="" id="" placeholder='Search Movies...' className='px-5 py-3 border rounded text-gray-900 w-full outline-none bg-white' />
            </form>
        </div>
      </div>
    </div>
    </header>
    <MoviesCard data={movies} img={IMG_PATH} />
    </>
  )
}

export default Header
