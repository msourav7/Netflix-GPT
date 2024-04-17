import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMOvies from '../hooks/useNowPlayingMOvies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import VideoTitle from "./VideoTitle";

function Browse() {
useNowPlayingMOvies()
  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
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
