// src/pages/Home.js
import MovieCard from "../components/MovieCard";
import movies from "../data/movies";   // ← this import now works

function Home() {
  return (
    <>
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}          // ← pass the id
          title={movie.title}    // ← pass the title
        />
      ))}
    </>
  );
}

export default Home;