import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMOvies from '../hooks/useNowPlayingMOvies'
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

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
