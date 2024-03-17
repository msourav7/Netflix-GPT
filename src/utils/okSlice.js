import { createSlice } from "@reduxjs/toolkit";

const okSlice=createSlice({
    name:'ok',
    initialState:null,
    reducers:{
        addUser:(state,action)=>{
           return action.payload
        },
        removeUser:(state,action)=>{
             return null;
        },
    }
})

export const {addUser,removeUser}=okSlice.actions;
export default okSlice.reducer;  