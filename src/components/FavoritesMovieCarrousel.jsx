import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import MovieCard from './MovieCard';

const FavoritesMoviesCarousel = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(storedFavorites);
  }, []);

  return (
    <div>
      <h2 className="text-white text-2xl font-bold mb-5">Films favoris</h2>
      {favoriteMovies.length > 0 ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={6}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination]}
        >
          {favoriteMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard
                title={movie.title}
                posterPath={movie.posterPath}
                releaseDate={movie.releaseDate}
                movieId={movie.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-white">Aucun film ajouté aux favoris.</p>
      )}
    </div>
  );
};

export default FavoritesMoviesCarousel;
