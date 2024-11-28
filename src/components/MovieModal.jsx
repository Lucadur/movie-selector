/* eslint-disable react/prop-types */

const MovieModal = ({ movie, closeModal }) => {

  // Fermer la modale si on clique à l'extérieur de celle-ci
  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Fermer la modale si on clique sur l'arrière-plan
    }
  };


  if (!movie) {
    return null; // Retourne null si `movie` est undefined
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={handleClickOutside} // Fermer la modale si on clique à l'extérieur
    >
      <div className="bg-white rounded-lg p-6 max-w-lg w-full relative">
        {/* Bouton retour */}
        <button 
          onClick={closeModal} 
          className="absolute top-4 left-4 text-gray-500 text-xl"
        >
          &#8592; Retour
        </button>
        
        <div className="flex justify-between items-center mb-4 align-middle">
          <h2 className="text-2xl font-bold">{movie.title}</h2>
          <button onClick={closeModal} className="text-gray-500 text-xl">X</button>
        </div>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-42 h-80 object-cover rounded mb-4 "
        />
        
        <p className="text-gray-700">{movie.overview}</p>

        <div className="mt-4">
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Vote Average:</strong> {movie.vote_average}</p>
          <p><strong>Popularity:</strong> {movie.popularity}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
