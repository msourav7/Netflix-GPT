import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies=()=>{

    const dispatch=useDispatch()
    
    const getTopRatedgMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        API_OPTIONS
      );
      const json =await data.json();
      console.log("useTopRatedMovies(getTopRatedgMovies)",json.results);
      dispatch(addTopRatedMovies(json.results))
    };
    useEffect(() => {
      getTopRatedgMovies();
    }, []);
}
export default useTopRatedMovies