const Modal = ({ data, img, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 backdrop-blur-sm px-4">
      
      <div className="bg-slate-900 text-white rounded-xl shadow-2xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        
        <div className="md:w-1/3 w-full">
          <img
            src={`${img}${data.poster_path}`}
            alt={data.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-2/3 w-full p-6">
          
          <h3 className="font-bold text-3xl mb-4">{data.title}</h3>

          <p className="text-gray-300 text-sm leading-6 mb-4">
            {data.overview}
          </p>

          <p className="bg-yellow-500/20 text-yellow-400 p-2 rounded font-semibold inline-block mb-3">
            ⭐ Rating: {data.vote_average?.toFixed(1)}
          </p>

          <p className="bg-green-500/20 text-green-400 p-2 rounded font-semibold inline-block ml-2">
            📅 {data.release_date}
          </p>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            
            <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-2 rounded-lg shadow-lg hover:scale-105 transition">
              ▶ Watch Now
            </button>

            <button
              className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600 transition"
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