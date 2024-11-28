import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import MovieModal from './MovieModal'; // Importer le composant de la modale

/* eslint-disable react/prop-types */
const MovieCard = ({ title, posterPath, releaseDate, movieId, movieDetails }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Ouvrir la modale
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleFavorite = () => {
    const favoriteMovies = JSON.parse(localStorage.getItem('favorites')) || [];
    const movie = { title, posterPath, releaseDate, id: movieId };

    if (isFavorite) {
      // Retirer des favoris
      const updatedFavorites = favoriteMovies.filter((movie) => movie.id !== movieId);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Ajouter aux favoris
      favoriteMovies.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favoriteMovies));
      setIsFavorite(true);
    }
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 max-h-xs text-white relative flex-auto h-5/6 mb-10">
      <img
        className="w-full cursor-pointer"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        style={{ height: '350px', width: '300px', objectFit: 'cover' }}
        onClick={openModal} // Ouvre la modale au clic
      />
      <div className="px-6 py-4 h-32">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="flex flex-row justify-between align-middle">
          {releaseDate && <p className="text-gray-400">{releaseDate}</p>}
          <button className="text-2xl" onClick={toggleFavorite}>
            {isFavorite ? <FaHeart className="text-emerald-200" /> : <FaRegHeart className="text-white" />}
          </button>
        </div>
      </div>

      {/* Afficher la modale quand isModalOpen est vrai */}
      {isModalOpen && movieDetails && (
        <MovieModal movie={movieDetails} closeModal={closeModal} />
      )}
    </div>
  );
};

export default MovieCard;
