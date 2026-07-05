import React from 'react'
import { useState, useEffect } from 'react'
import api from '../services/api'
import { useRef } from 'react'


function NoteList() {
    const [note, setNote] = useState("")
    const [message, setMessage] = useState("")
    const [showNotes, setShow] = useState([])
    const [editId,setEditId]=useState(null)
    const inpRef=useRef()


    useEffect(() => {
        fetchNotes()
    }, [])

    async function saveNot() {
        try {
            await api.post("/notes", { text: note })
            alert("Saved")
            setNote("")


         fetchNotes()
        } catch (error) {
            alert("Faild to save")

        }


    }
        async function fetchNotes() {
            api.get("/notes").then((res) => {
                setShow(res.data)
                
                

            })


        }
        async function deleteNote(id){
            await api.delete(`/notes/${id}`);
            fetchNotes()
        }
        function update(note){
            setNote(note.text)
            setEditId(note.id)
            inpRef.current.focus()
            
        }
        async function updateNote(){
            await api.put(`/notes/${editId}`,{
                text:note,
            })
            alert("Updated")
            setEditId(null)
            setNote("")
fetchNotes()
        }
    
    
    return (
        <div>
            <textarea ref={inpRef} value={note} onChange={(e) => setNote(e.target.value)}></textarea>
<button onClick={editId ? updateNote : saveNot}>
  {editId ? "Update" : "Save"}
</button>
           <div className="show">
            {
                showNotes.map((val)=>{
                    return(
                        <div key={val.id}>

                            <h4>{val.id}:{val.text}</h4>
                            <button onClick={()=>deleteNote(val.id)}>Dlete</button>
                            <button onClick={()=>update(val)}>Edit</button>
                        </div>
                    )
                })
            }
           </div>
        </div>
    )
}

export default NoteList
