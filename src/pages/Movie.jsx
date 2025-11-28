import { useParams } from "react-router-dom";
import movies from "../data/movies";

function Movie() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  return (
    <main>
      <h1>{movie.title}</h1>
      <p>{movie.time}</p>
      {movie.genres.map(genre => (
        <span key={genre}>{genre} </span>
      ))}
    </main>
  );
}

export default Movie;