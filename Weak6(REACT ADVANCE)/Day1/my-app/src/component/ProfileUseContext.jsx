import { useState,useEffect } from "react";
import { UserContext } from "../userContext";
import React from 'react';
import { useContext } from "react";


function ProfileUseContext() {
    const user=useContext(UserContext);

    


  return (
    <div>
      <h1>Profile Component</h1>
      <p>Welcome {user}</p>
      <p>unique id is not possible so </p>
      <h1>The real world is not possible </h1>
      
     

    </div>
  )
}

export default ProfileUseContext
