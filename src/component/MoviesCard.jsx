import React from "react";
import MovieList from "./MovieList";

const MoviesCard = ({ data, img }) => {
  return (
    <div>
      <h1 className="bg-zinc-200 p-4 text-3xl font-bold border-l-8 border-blue-500 mt-20 shadow-lg shadow-black rounded mb-10">
        Popular Movies
      </h1>
      <MovieList data={data} img={img} />
    </div>
  );
};

export default MoviesCard;
