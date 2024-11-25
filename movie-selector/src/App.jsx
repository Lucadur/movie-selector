// src/App.js
import CurrentMovieCarrousel from './components/CurrentMovieCarrousel';
import NavBar from './components/NavBar';
import PopularMovieCarrousel from './components/PopularMovieCarrousel';
import TopRatedMovieCarrousel from './components/TopRatedMovieCarrousel';

function App() {
  return (
    <div>
    <NavBar />
    <div style={{ padding: '20px' }}>
      <CurrentMovieCarrousel />
      <PopularMovieCarrousel />
      <TopRatedMovieCarrousel />
    </div>
    </div>
  );
}

export default App;
