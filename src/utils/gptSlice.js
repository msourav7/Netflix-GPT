import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGptSearch:false,
        gptMovies:null,
    },
    reducers:{
        // toggleGptSearchView:(state,action)=>{       // action is not here cuz we are not passing any action here
        //   state.showGptSearch=action.payload;    // toggle mechanism for click on gpt search, we can use action also if we dispatch an action form onclick dispatch(toggleGptSearchView(true)) 11
        // }  
        toggleGptSearchView:(state)=>{       // action is not here cuz we are not passing any action here
          state.showGptSearch=!state.showGptSearch;    // toggle mechanism for click on gpt search
        },
        addGptMovieResult:(state,action)=>{
                state.gptMovies=action.payload
        }  
        
    }
})

export const {toggleGptSearchView,addGptMovieResult}=gptSlice.actions 
export default gptSlice.reducer;