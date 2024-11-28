import NavBar from './components/NavBar';
import MovieCarousel from './components/MovieCarrousel';
import "./App.css"


function App() {
  return (
    <div className='bg-gray-900 min-h-screen'>
    <NavBar />
    <div style={{ padding: '50px' }}>
    <MovieCarousel 
      title="Films en salle"
      apiEndpoint="https://api.themoviedb.org/3/movie/now_playing?language=fr-FR&page=1"
    />
    <MovieCarousel 
      title="Films populaires"
      apiEndpoint="https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=2"
    />
    <MovieCarousel 
      title="Films les mieux nôtés"
      apiEndpoint="https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1"
    />
    <MovieCarousel 
      title="Films favoris"
     isFavorites={true}
    />
    </div>
    </div>
  );
}

export default App;
