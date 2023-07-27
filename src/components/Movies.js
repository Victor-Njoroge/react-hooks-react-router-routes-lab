import React from "react";
import { movies } from "../data";

function Movies() {
  return (
  <>
    <h1>Movies Page</h1>
    {movies.map((movie, index)=>(
      <div key={index}>
        <h3>Name: {movie.title}</h3>
        <p>Time: {movie.time}</p>
        Genres:
        <ul>
          {movie.genres.map((genre,index)=>(
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    ))}
  </>
  );
}

export default Movies;
