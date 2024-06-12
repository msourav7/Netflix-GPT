import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMOvies=()=>{

    const dispatch=useDispatch()

    //memoization
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
    //memoization ends and used in api call below
    
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json =await data.json();
      console.log("duseNowPlayingMOvies(getNowPlayingMovies)",json.results);
      dispatch(addNowPlayingMovies(json.results))
    };
    useEffect(() => {
      if(!nowPlayingMovies) getNowPlayingMovies();
    }, []);
}
export default useNowPlayingMOvies