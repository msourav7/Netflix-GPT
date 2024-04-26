import { useDispatch } from "react-redux";
import {  addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useUpcomingMovies=()=>{

    const dispatch=useDispatch()
    
    const getuseUpcomingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=1",
        API_OPTIONS
      );
      const json =await data.json();
      console.log("useUpcomingMovies(getuseUpcomingMovies)",json.results);
      dispatch(addUpcomingMovies(json.results))
    };
    useEffect(() => {
        getuseUpcomingMovies();
    }, []);
}
export default useUpcomingMovies