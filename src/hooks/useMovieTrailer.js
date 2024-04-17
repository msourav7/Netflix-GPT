import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //Fetch trailer video via movie id

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log("trailer",json.results[0].type)
    // bcoz we only need trailer of the video
    console.log("jsonDatauseMovieTrailer------->",json)
    // if (!json.results) return null;
    const filterData = json.results.filter((video) => video.type === "Trailer");
    //we did this this because suppose we have multiple trailers then
    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log("VideoBackground(useMovieTrailer)", trailer);
    console.log("trailer.KEY useMovieTrailer", trailer.key);
    //here we are sending trailer video to the movieslice and reteriving it in viedeobackground to show with trailer key
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

// const useMovieTrailer = (movieId) => {
//   const dispatch = useDispatch();

//   const getMovieVideos = async () => {
//     try {
//       const data = await fetch(
//         "https://api.themoviedb.org/3/movie/" +
//           movieId +
//           "/videos?language=en-US",
//         API_OPTIONS
//       );
//       const json = await data.json();

//       // Check if json.results exists and is an array
//       if (json.results && Array.isArray(json.results)) {
//         // Filter the videos to get only trailers
//         const filterData = json.results.filter((video) => video.type === "Trailer");
//         // Check if there are any trailers
//         const trailer = filterData.length ? filterData[0] : json.results[0];
//         // Dispatch the trailer to Redux store
//         dispatch(addTrailerVideo(trailer));
//       } else {
//         console.error("Invalid response format from API");
//       }
//     } catch (error) {
//       console.error("Error fetching movie videos:", error);
//     }
//   };

//   useEffect(() => {
//     getMovieVideos();
//   }, []);
// };

export default useMovieTrailer;
