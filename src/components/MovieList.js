import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log("moviess", movies);
  return (
    <div className="px-5 ">
       <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll " style={{ '-ms-overflow-style': 'none', 'scrollbar-width': 'none' }}>
        <div className="flex"> 
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
