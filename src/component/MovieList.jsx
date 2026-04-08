import React, {useState} from "react";
import Model from "./Model";

const MovieList = ({ data, img }) => {

  const [selectedMovies, setSelectedMovies] = useState()
  const handleMoviesClick = (movies) => {
    setSelectedMovies(movies)
  }

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-12">
      {data.map((movies) => {
        return (
          <div
            className="card bg-white border border-gray-200 rounded-lg shadow shadow-white hover:scale-105 overflow-hidden cursor-pointer transition easy-in-out delay-50"
            key={data.id} onClick={() => handleMoviesClick(movies)}
          >
            <img src={`${img + movies.poster_path}`} alt="" />
            <div className="flex justify-between p-4 items-center">
              <h3 className="font-semibold">{movies.title}</h3>
              <p className="bg-orange p-2 rounded">{movies.vote_average}</p>
            </div>
          </div>
        );
      })}
      {selectedMovies && <Model data={selectedMovies} img={img} />}
    </div>
  );
};

export default MovieList;
