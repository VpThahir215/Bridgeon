import React from "react";
import { useState } from "react";

function useCount(){
    const [count,setCount]=useState(0);
    function add(){
        setCount((val)=>val+1)
    }
    return {count,add}
}
export default useCount