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
        }),
          doDelete:((state,action)=>{
            state.note=state.note.filter((_,index)=>index !==action.payload)
          }),
          doEdit:((state,action)=>{
            state.note[action.payload.index]=action.payload.text
          })
        
    }
})
export const {addNote,doDelete,doEdit}=noteSlice.actions;
export default noteSlice.reducer