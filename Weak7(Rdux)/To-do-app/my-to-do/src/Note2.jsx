import React from 'react'
import {useQueryClient} from '@tanstack/react-query'


function Note2() {
    const query=useQueryClient()
    const note=query.getQueryData(['notes'])
    console.log(query.getQueriesData(['notes']));
    
  return (
    <div>
      <h1>Note 2</h1>
      {
        note?.map((val)=>
            (
              
                    <h1 key={val.id}>{val.text}</h1>
              
            )
        )
      }
    </div>
  )
}

export default Note2
