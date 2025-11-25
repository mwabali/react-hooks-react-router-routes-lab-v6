// src/pages/Home.js
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";
import movies from "../data/movies"; // make sure you have a movies array

function Home() {
  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <div>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Home;
