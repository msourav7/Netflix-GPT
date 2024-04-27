import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMOvies from "../hooks/useNowPlayingMOvies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoTitle from "./VideoTitle";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

function Browse() {
  //fetching the different types of movies and updating the store
  useNowPlayingMOvies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? ( //you can remove paranthesis from here it will also work
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
}

export default Browse;

// MainContainer
//  - VideoBaackground
//  - VideoTitle

// SecondaryContainer
//  - MovieList * n
//    - cards * n
