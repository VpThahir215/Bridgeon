import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {useState} from "react";
import Counter from './components/Counter';

function App() {
  const [count,setCount]=useState(0);

  let name="Thahir"
  let str="GOAT"
  let addCount=()=>{
 setCount(count+1)
    console.log(count);
  }
  
    
  
  return (



    // fragment syntax <> </>


    <>
   <h1 style={{color:"red"}}>HELLO WORLD</h1>
   <p className='how'>How are you {name}</p>
   <Header name={str} />
   <button onClick={addCount}>Add</button>
   <Counter title='1st' count={count}/>
      <Counter title='2nd' count={count}/>
 
 

   </>
  );
}



export default App;
