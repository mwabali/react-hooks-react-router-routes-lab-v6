import { Link } from "react-router-dom";
import React from "react";

function MovieCard({ id, title }) { // Accept `id` as a prop
  return (
    <article>
      <h2>{title}</h2>
      {/* Link to the movie's detail page using its id as a URL parameter */
      <Link
        to={`/movies/${id}`} 
        style={{
          color: "cyan",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        View Info
      </Link>}
    </article>
  );
}

export default MovieCard;
