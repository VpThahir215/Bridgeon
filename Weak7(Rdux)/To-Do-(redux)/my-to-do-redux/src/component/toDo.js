import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
const initialState={
    note:[]

}
const noteSlice=createSlice({
    name:'note',
     initialState,
    reducers:{
        addNote:((state,action)=>{
            state.note.push(action.payload)
        })
    }
})
export const {addNote}=noteSlice.actions;
export default noteSlice.reducer