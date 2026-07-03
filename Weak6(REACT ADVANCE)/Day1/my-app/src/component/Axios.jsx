import React, { useState } from "react";
import axios from "axios";

function Axios() {
  const [state, setState] = useState([]);

  const addUser = () => {
    axios
      .delete("http://localhost:3500/users/wQMRJRCVg0w")
      
      .then((response) => {
console.log("user delete");
        
// setState((prevState)=>[...prevState,response.data])
   
     
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(state);
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      {/* <button onClick={sessionStorage}>Show</button> */}

      {
        state.map((val)=>{
          return (
            <div key={val.id}>
              <h1>{val.id}</h1>
              <h1>{val.name}</h1>
                    <h1>{val.age}</h1>
            </div>
          )
        })
      }

    </div>
  );
}

export default Axios;


    {/* {
        state.map((obj)=>{
          return (
            <div key={obj.id}>

            <h1>{obj.id}</h1>
              <h1>{obj.name}</h1>
                <h1>{obj.age}</h1>
            </div>
          )
        })
      } */}