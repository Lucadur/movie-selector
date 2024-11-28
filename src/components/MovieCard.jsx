import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../redux/favoritesSlice';

/* eslint-disable react/prop-types */
const MovieCard = ({ title, posterPath, releaseDate, movieId, overview, voteaverage, votecount }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);  
  const [isFlipped, setIsFlipped] = useState(false);
  const isFavorite = favorites.some(movie => movie.id === movieId);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation();  
    if (isFavorite) {
      dispatch(removeFavorite({ id: movieId }));  
    } else {
      dispatch(addFavorite({ 
        id: movieId,
        title,
        posterPath,
        releaseDate,
        overview,
        voteaverage,
        votecount
      }));
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      {/* Front of the card */}
      <div
        className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-800 text-white relative flex-auto mb-10 cursor-pointer"
        onClick={handleFlip}
        style={{ width: '300px', height: '450px' }}
      >
        <img
          className="w-full"
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          style={{ height: '340px', width: '100%', objectFit: 'fill' }}
        />
        <div className="px-6 py-4">
          <h3 className="font-semibold text-xl">{title}</h3>
          <div className="flex flex-row justify-between align-middle">
            {releaseDate && <p className="text-gray-400">{releaseDate}</p>}
            <button
              className="text-2xl"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? <FaHeart className="text-emerald-200" /> : <FaRegHeart className="text-white" />}
            </button>
          </div>
        </div>
      </div>

      {/* Back of the card */}
      <div
        className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 text-white relative flex-auto mb-10 p-4 cursor-pointer border-2 border-teal-200"
        onClick={handleFlip}
        style={{ width: '300px', height: '450px' }}
      >
        <div>
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-300 text-base overflow-y-auto mb-12" style={{ maxHeight: '300px' }}>
            {overview || 'Résumé indisponible.'}
          </p>
          <p className="text-gray-300 text-sm overflow-y-auto font-bold" style={{ maxHeight: '300px' }}>
            Note globale : {voteaverage} / 10
          </p>
          <p className="text-gray-300 text-sm overflow-y-auto font-bold" style={{ maxHeight: '300px' }}>
            Nombre de votes : {votecount}
          </p>
        </div>
        <button
          className="mt-4 text-emerald-400 underline self-end"
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(false);
          }}
        >
          Retour
        </button>
      </div>
    </ReactCardFlip>
  );
};

export default MovieCard;
