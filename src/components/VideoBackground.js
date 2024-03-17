import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = ({ movieId }) => {

  const dispatch=useDispatch()
  const trailerVideo=useSelector((store)=>store.movie?.trailerVideo)

  //Fetch trailer video via movie id
  //Fetch trailer video via movie id

  // const getMovieVideos = async () => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/movie/763215/videos?language=en-US",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   // console.log(json.results[0].type)
  //   // bcoz we only need trailer of the video
  //   const filterData = json.results.filter((video) => video.type === "Trailer");
  //   //we did this this because suppose we have multiple trailers then
  //   const trailer = filterData.length ? filterData[0] : json.results[0];
  //   console.log(trailer);
  //   dispatch(addTrailerVideo(trailer))
  // };
  // useEffect(() => {
  //   getMovieVideos();
  // }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/iM150ZWovZM?si="+trailerVideo?.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
