import { useState } from "react";

function useCounter(state){
 let [count,setCount]=useState(0)
 function addd(){
    setCount(count+1)
 }
 return {count,addd}
}
export  default useCounter