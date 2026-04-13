import MovieList from "./MovieList";
import popularLogo from "../assets/popularLogo.jpg";


const MoviesCard = ({ data, img }) => {
  if (!data) return null;

  return (
 <div className="px-4 md:px-10 mt-10">
  
  <div className="flex items-center gap-3 mb-8 border-l-4 border-blue-500 pl-4">
    
    <img
      src={popularLogo}
      alt="Popular Movies"
      className="h-8 w-8 object-contain"
    />

    <h1 className="text-white text-2xl md:text-3xl font-bold">
      Popular Movies
    </h1>

  </div>

  <MovieList data={data} img={img} />
</div>
  );
};

export default MoviesCard;