import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {

  //getting trailer video from movieslice 
  const trailerVideo=useSelector(store=>store.movies?.trailerVideo) // we used trailerVideo.key together in place of youtube's key to list the trailer with it's key or i can use state and pass setTrailer with (trailer.key) and use setTrailer below 

  //Fetch trailer video via custom hook
  // console.log("movieId----->",movieId)
  useMovieTrailer(movieId)

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
