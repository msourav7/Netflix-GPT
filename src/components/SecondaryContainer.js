import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  //store.movies has all types of movies stored in it
  const movies = useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className=' bg-black'>
      {/* moving only movies list to the top to match the lists with upper trailer clip "only the content inside the main div which which is Movielist in below div is only just going up"*/}
      <div className='mt-0 md:-mt-40 pl-1 md:pl-7 relative z-20'> 
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
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