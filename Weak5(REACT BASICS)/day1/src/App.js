import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {useState} from "react";
import Counter from './components/Counter';
import Employ from './components/Employ';
import Disply from './components/Disply';
import Count2 from './components/Count2';


function App() {
  const [count,setCount]=useState(0);
  const [state,setState]=useState(false)

  let name="Thahir"
  let str="GOAT"
  let addCount=()=>{
 setCount(count+1)
    console.log(count);
  }
  
  let obj={
    title:"1st",
    count
  }
    let dt=[
      {name:"Ronaldo", club:"Real Madrid"},
      {name:"Messi",club:"Barcalona"},
      {name:"Neymer",club:"Barcalona"}
    ]


  
  return (



    // fragment syntax <> </>


    <>
   <h1 style={{color:"red"}}>HELLO WORLD</h1>
   <p className='how'>How are you {name}</p>
   <Header name={str} />
   <button onClick={addCount}>Add</button>
   <Counter {...obj}/>
      <Counter title='2nd' count={count}/>
     {
      dt.map((dt,index)=>{
        return (
          // <Employ key={index} name={obj.name} club={obj.club}/>
           <Employ  {...dt} key={index} />
        )
      })
     }
     <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
{state? <Disply /> :null}
<Count2/>
   </>
  );
}



export default App;
