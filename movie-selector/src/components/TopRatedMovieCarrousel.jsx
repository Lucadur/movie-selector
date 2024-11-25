// src/components/MovieCarousel.js
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const TopRatedMovieCarrousel = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZmJkMmY1ODcwNmY3ZTg2NDc0MDRhM2ZkZThhZTZiZCIsIm5iZiI6MTczMjUzMDY1NC44MzA4MjcyLCJzdWIiOiI2NzQ0NTEwMDlmNDBhN2FhZjZlYTU2YTciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.70dHYC1i8K1oaLjaos_dtHFHQu4IPJ-qp3FAo-44vKI', // Remplace avec ta clé API
          },
        }

        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1',
          options
        )
        setMovies(response.data.results)
      } catch (error) {
        console.error('Failed to fetch movies', error)
      }
    }

    fetchMovies()
  }, [])

  return (
    <div>
      <h2>Films les mieux notés</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={6}
        pagination={{ clickable: true }} 
        navigation={true}
        modules={[Navigation, Pagination]}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div style={{ textAlign: 'center' }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '200px', height: '300px', objectFit: 'cover' }}
              />
              <h3>{movie.title}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopRatedMovieCarrousel;
