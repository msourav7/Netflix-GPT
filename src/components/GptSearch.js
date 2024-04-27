import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSearchSuggestions from './GptMovieSearchSuggestions'
import { BG_URL } from '../utils/constants'
// this is gpt search page dont confuse it with gptsearchBar
const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
        <img
          src={BG_URL} alt="login image"
        />
      </div>  
       <GptSearchBar/>
       <GptMovieSearchSuggestions/>
    </div>
  )
}

export default GptSearch