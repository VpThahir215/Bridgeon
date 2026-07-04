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
     

    </div>
  )
}

export default ProfileUseContext
