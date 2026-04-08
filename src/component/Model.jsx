import React from "react";

const Model = ({data , img}) => {
  return <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg shadow-lg flex items-center space-x-8 w-1/2">
        <div className="w-1/3">
            <img src={`${img + data.poster_path}`} alt={data.title} className="rounded-t-lg" />
        </div>
        <div className="w-1/2">

        </div>
    </div>
  </div>;
};

export default Model;
