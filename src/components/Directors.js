import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      {directors.map((index,director)=>(
        <div key={index}>
          <h3>Name: {director.name}</h3>
          <p>Movies:</p>
          <ul>
            {director.movies.map((movie,index)=>(
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Directors;
