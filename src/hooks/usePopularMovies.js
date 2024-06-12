import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies=()=>{
    //Fetch data from TMDBI for popularMovies section
    const dispatch=useDispatch()

     //memoization
     const popularMovies=useSelector(store=>store.movies.popularMovies)
     //memoization ends and used in api call below
    
    const getPopularMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json =await data.json();
      console.log("duseNowPlayingMOvies(getNowPlayingMovies)",json.results);
      dispatch(addPopularMovies(json.results))
    };
    useEffect(() => {
       !popularMovies && getPopularMovies();
    }, []);
}
export default usePopularMovies