import React, { useEffect, useState } from "react";
import movieLogo from "../assets/movieLogo.jpg";
import MoviesCard from "./MoviesCard";

const API_KEY = "835779eab3e92b614fb56a2a2d43cb23";
const IMG_PATH = " https://image.tmdb.org/t/p/w1280";

const Header = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  const MoviesApp = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`,
      );
      const result = await data.json();
      // console.log(result)
      setMovies(result.results);
    } catch (error) {
      console.log(error);
    }
  };
  const SearchMovie = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${input}`,
      );
      const result = await data.json();
      setMovies(result.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (input !== "") {
      SearchMovie();
    } else {
      MoviesApp();
    }
    
  }, [input]);

  return (
     <>
       <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
         <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 gap-4">

           <div className="flex items-center gap-3">
             <img src={movieLogo} alt="Logo" className="h-10 w-10 object-contain" />
             <h2 className="text-white font-bold text-xl md:text-2xl">
               Movies
             </h2>
           </div>

           <div className="w-full md:w-1/2">
             <form onSubmit={(e) => e.preventDefault()}>
               <input
                 type="text"
                 placeholder="Search Movies..."
                 className="w-full px-4 py-2 rounded-lg bg-slate-800 text-white outline-none border border-slate-700 focus:border-blue-500 transition"
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
               />
             </form>
           </div>
         </div>
       </header>

        <MoviesCard data={movies} img={IMG_PATH} />
     </>
  );
};

export default Header;
