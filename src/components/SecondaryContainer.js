import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      {/* moving only movies list to the top to match the lists with upper trailer clip "only the content inside the main div which which is Movielist in below div is only just going up"*/}
      <div className='-mt-52 pl-7 relative z-20'> 
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
      
    </div>
  ))
}

export default SecondaryContainer



// MovieList - Popular
//  - Movies*n
// MovieList - Now Playing 
// - Movies*n
// MovieList - Trending
// - Movies*n
// Movielist - Horror 
// - Movies*n