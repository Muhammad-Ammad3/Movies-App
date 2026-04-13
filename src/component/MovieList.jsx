import React, { useState } from "react";
import Modal from "./Modal";

const MovieList = ({ data, img }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  if (!data) return null;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      
      {data.map((movie) => (
        <div
          key={movie.id}
          onClick={() => handleMovieClick(movie)}
          className="bg-slate-900 rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 hover:shadow-2xl transition duration-300"
        >
          <img
            src={`${img}${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-72 object-cover"
          />

          <div className="p-4 flex justify-between items-center">
            <h3 className="text-white text-sm font-semibold truncate w-32">
              {movie.title}
            </h3>

            <span className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded">
              ⭐ {movie.vote_average?.toFixed(1)}
            </span>
          </div>
        </div>
      ))}

      {selectedMovie && (
        <Modal
          data={selectedMovie}
          img={img}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieList;