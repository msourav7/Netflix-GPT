import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch=useDispatch()

  // normal single search movie in TMDB
  const searchMovieTMDB = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        searchText.current.value +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json=await data.json()
    dispatch(addGptMovieResult(json.results))
    console.log("searchMovieTMDB",json.results)
    console.log("searchMovieTMDB",json.results?.original_title)   //first get multiple movie name just like its result
    
    // return json.results
  };

//  from gpt 
  //  const searchMovieTMDB = async (movie) => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //     movie +
  //       "&include_adult=false&language=en-US&page=1",
  //     API_OPTIONS
  //   );
  //   const json=await data.json()
  //   console.log("json.resultsjson.resultssdrfvsfvsfvsfvsvfs",json.results[0])
  //   // return json.results
  // };

  // const handleGptSearchClick = async () => {
  //   console.log(searchText.current.value);
  //   // make an api call to GPT API and get Movie Results

  //   const gptQuery =
  //     "Act as a Movie Recommendation system and suggest some movies for the query : " +
  //     searchText.current.value +
  //     "only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Harry Poter, Godzilla";

  //   const gptResults = await openai.chat.completions.create({
  //     messages: [{ role: "user", content: gptQuery }],
  //     model: "gpt-3.5-turbo",
  //   });
  //   console.log(gptResults.choices?.[0]?.message.content);
  //   //"real steel,god,spartan,spiderman,batman" to -> ['real steel', 'god', 'spartan', 'spiderman', 'batman']
  //   const gptMovies = gptResults.choices?.[0]?.message.content.split(","); // this split will give array of movies instead of movies with comma as a string cuz our result is comming as a string

  //   // now for each movie i will search TMDB API
  //    const promiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie))
  //    // [Promise, Promise, Promise, Promise, Promise, ]
  //   //  now my Promise.all will only finish once my all 5 promise will resolve and show it eksath

  //    const tmdbResults =await Promise.all(promiseArray)
  //    console.log("dfthsdrtyhdr6yhryhdryh",tmdbResults)

  // };

  return (
    <div className="pt-[10%]  flex justify-center ">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          //   placeholder={lang.hindi.gptSearchplaceholder}  earlier we were using these two  {lang.hindi.search} for placeholder and for button
          //in langKey we will get en,hindi,sanaskrit etc dynamically
          placeholder={lang[langKey].gptSearchplaceholder}
        />
        <button
          className="col-span-3 py-2 px-4 m-4 text-white bg-red-700 rounded-lg "
          // onClick={handleGptSearchClick}
          onClick={searchMovieTMDB}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

// Another goodpractice method by Chatgpt
// const GptSearchBar = () => {
//     const langKey = useSelector((store) => store.config.lang);
//     const searchText = useRef(null);
//     const [isLoading, setIsLoading] = useState(false); // Add state to track loading state

//     const handleGptSearchClick = async () => {
//       // Disable the button to prevent multiple clicks
//       setIsLoading(true);

//       try {
//         console.log(searchText.current.value);

//         // make an API call to GPT API and get Movie Results
//         const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Harry Poter, Godzilla";

//         const gptResults = await openai.chat.completions.create({
//           messages: [{ role: "user", content: gptQuery }],
//           model: "gpt-3.5-turbo",
//         });

//         console.log(gptResults.choices?.[0]?.message.content);
//       } catch (error) {
//         console.error("Error occurred:", error);
//       } finally {
//         // Re-enable the button after the API request is completed
//         setIsLoading(false);
//       }
//     };

//     return (
//       <div className="pt-[10%]  flex justify-center ">
//         <form
//           className="w-1/2 bg-black grid grid-cols-12"
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             ref={searchText}
//             type="text"
//             className="p-4 m-4 col-span-9"
//             placeholder={lang[langKey].gptSearchplaceholder}
//           />
//           <button
//             className="col-span-3 py-2 px-4 m-4 text-white bg-red-700 rounded-lg"
//             onClick={handleGptSearchClick}
//             disabled={isLoading} // Disable button when loading
//           >
//             {isLoading ? 'Loading...' : lang[langKey].search}
//           </button>
//         </form>
//       </div>
//     );
//   };

export default GptSearchBar;
