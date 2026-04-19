const Modal = ({ data, img, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4">
      {/* Modal Container */}
      <div className="bg-slate-900 text-white rounded-xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Poster Section */}
        <div className="md:w-1/3 w-full h-64 md:h-auto shrink-0">
          <img
            src={`${img}${data.poster_path}`}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-2/3 w-full p-5 md:p-8 flex flex-col justify-center">
          <h3 className="font-bold text-2xl md:text-4xl mb-3 leading-tight">
            {data.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            <p className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded text-sm font-semibold">
              ⭐ {data.vote_average?.toFixed(1)}
            </p>
            <p className="bg-green-500/20 text-green-400 px-3 py-1 rounded text-sm font-semibold">
              📅 {data.release_date}
            </p>
          </div>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 overflow-y-auto">
            {data.overview}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-auto">
            <button className="bg-linear-to-r from-blue-500 to-purple-500 px-6 py-2.5 rounded-lg shadow-lg hover:scale-105 transition font-medium text-center">
              ▶ Watch Now
            </button>

            <button
              className="bg-gray-700 px-6 py-2.5 rounded-lg hover:bg-gray-600 transition font-medium text-center"
              onClick={onClose}
            >
              ✖ Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
