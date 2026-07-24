    import { createSlice } from "@reduxjs/toolkit"



    const initialState={
        note:[]
    }
    const toDoSlice=createSlice({
        name:'ToDo',
        initialState,
        reducers:{
            addNote:((state,action)=>{
                state.note.push(action.payload)
            }),
            doDelete:((state,action)=>{
                state.note=state.note.filter((_,index)=>index !== action.payload)
            }),
            doEdit:((state,action)=>{
                state.note[action.payload.index]=action.payload.text
            })
        }
    })
    export const {doDelete,addNote,doEdit}=toDoSlice.actions;
    export default toDoSlice.reducer