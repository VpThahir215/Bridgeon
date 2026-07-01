import React from 'react'

function List2() {

    const initialStudent=[
        {id:1,name:"jhon",course:"Java"},
          {id:2,name:"Arnold",course:"Java Script"},
            {id:3,name:"Felix",course:"Python"}
    ]
     const newStudent=initialStudent.filter((val) => {
          return (val.id !==2)
                  
        })   
  return (
    <div>
      {
        newStudent.map((val,index)=>{
        return  <h1>key={val.id} Name : {val.name}</h1>
        })
      }
       
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               )
      
    </div>
  )
}

export default List2
