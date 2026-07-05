import { createContext } from "react";
import { useState } from "react";
import api from "../services/api"
const notesContext=createContext()

function NotesProvider({children}){
const [notes,setNotes]=useState([])


function fetchNotes(){

}
return(
    <notesContext.Provider value={{notes}}>{children}</notesContext.Provider>
)
    }

export default notesContext
export {NotesProvider}