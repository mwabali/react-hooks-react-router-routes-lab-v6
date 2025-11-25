import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const { id } = useParams(); // get /movie/:id
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <h1>Loading...</h1>; // simple loading state

  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>

        {/* One <span> per genre */}
        {movie.genres.map((genre, index) => (
          <span key={index}>{genre} </span>
        ))}
      </main>
    </>
  );
}

export default Movie;
