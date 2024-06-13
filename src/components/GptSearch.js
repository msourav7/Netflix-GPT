import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSearchSuggestions from "./GptMovieSearchSuggestions";
import { BG_URL } from "../utils/constants";
// this is gpt search page dont confuse it with gptsearchBar
const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="h-screen object-cover md:h-auto" src={BG_URL} alt="login image" />
      </div>
      <div className="">
      <GptSearchBar />
      <GptMovieSearchSuggestions />
    </div>
    </>
    
  );
};

export default GptSearch;
