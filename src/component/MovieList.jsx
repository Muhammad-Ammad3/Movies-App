import React from "react";

const MovieList = ({ data, img }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-12">
      <div className="card bg-white border border-gray-200 rounded-lg shadow shadow-white hover:scale-105 overflow-hidden">
        <img src="" alt="" />
        <div className="flex justify-between p-4 items-center">
          <h3 className="font-semibold"></h3>
          <p className="bg-orange p-2 rounded"></p>
        </div>
      </div>
    </div>
  );
};

export default MovieList;
