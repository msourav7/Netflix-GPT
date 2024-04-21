import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMOvies from "../hooks/useNowPlayingMOvies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoTitle from "./VideoTitle";
import usePopularMovies from "../hooks/usePopularMovies";

function Browse() {
  //fetching the different types of movies and updating the store
  useNowPlayingMOvies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
