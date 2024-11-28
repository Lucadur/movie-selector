import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';

/* eslint-disable react/prop-types */
const MovieCarousel = ({ title, apiEndpoint, isFavorites }) => {
  const [movies, setMovies] = useState([]);
  const favorites = useSelector((state) => state.favorites); 
  

  const moviesToDisplay = isFavorites ? favorites : movies;

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY
    if (!isFavorites && apiEndpoint) {
      const fetchMovies = async () => {
        try {
          const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `Bearer ${apiKey}`,
            },
          };

          const response = await axios.get(apiEndpoint, options);
          setMovies(response.data.results);
        } catch (error) {
          console.error('Failed to fetch movies', error);
        }
      };

      fetchMovies();
    }
  }, [apiEndpoint, isFavorites]); 

  return (
    <div>
      <h2 className='text-white text-2xl font-bold mb-5'>{title}</h2>
      {moviesToDisplay.length > 0 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className='mb-10'
        >
          {moviesToDisplay.map((movie) => (
  <SwiperSlide key={`favorite-${movie.id}`}>
    <MovieCard
      title={movie.title}
      posterPath={movie.poster_path} 
      releaseDate={movie.release_date}
      overview={movie.overview}
      voteaverage={movie.vote_average}
      votecount={movie.vote_count}
      movieId={movie.id}
    />
  </SwiperSlide>
))}
        </Swiper>
      ) : (
        <p className="text-white">{isFavorites ? 'Aucun film ajouté aux favoris.' : 'Aucun film à afficher.'}</p>
      )}
    </div>
  );
};

export default MovieCarousel;
