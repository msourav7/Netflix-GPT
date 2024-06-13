import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

const GptMovieSearchSuggestions = () => {
  const gpt = useSelector((store) => store.gpt.gptMovies);
  // const searchMovieTMDB=gpt
  console.log("wrfwfwrfw4rfegwrfw4tfwfre", gpt);
  if (!gpt) return null;

  return (

  // to make background full black
  //   <div className="bg-cover bg-center bg-black text-white min-h-screen" style={{ backgroundImage: 'url(path/to/your/background/image.jpg)' }}>
  //   <div className="p-4 m-4">
  //     <div className="flex flex-wrap justify-center gap-16">
  //       {gpt.map((list) => {
  //         if (!list.poster_path) return null;
  //         return (
  //           <div key={list.id} className="flex flex-col items-center w-48 mb-0">
  //             <img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={list.title} className="w-full h-auto" />
  //             <h1 className="py-2 text-left text-lg font-bold">{list.title}</h1>
  //           </div>
  //         );
  //       })}
  //     </div>
  //   </div>
  // </div>


    <div className="p-4 m-4 bg-black text-white bg-opacity-85 min-h-screen overflow-x-hidden">
      <div className="flex flex-wrap justify-center gap-4 md:gap-16">
        {gpt.map((list) => {
          if (!list.poster_path) return null;
          return (
            <div key={list.id} className="flex flex-col items-center w-28 md:w-48 mb-0">
              <img
                src={`https://image.tmdb.org/t/p/w500${list.poster_path}`}
                alt={list.title}
                className="w-24 md:w-full md:h-auto"
              />
              <h1 className="py-2 text-center md:text-left text-sm md:text-lg font-semibold">
                {list.title}
              </h1>
            </div>
          );
        })}
      </div>
    </div>

    // ------By me
    // <div className="p-4 m-4 bg-black text-white">
    //   {gpt.map((list) => (
    //     <div key={list.id} className="movie-item">
    //        <MovieList title={list.title}/>
    //        <MovieCard  posterPath={`https://image.tmdb.org/t/p/w200${list.poster_path}`} alt={list.title}/>
    //        either use upper one one or downword one
    //       <img src={`https://image.tmdb.org/t/p/w200${list.poster_path}`} alt={list.title} />
    //       <h1 className="py-2  text-left">{list.title}</h1>
    //     </div>
    //   ))}
    // </div>
  );
};

export default GptMovieSearchSuggestions;
