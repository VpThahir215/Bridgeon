import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import {useState} from "react";
import Counter from './components/Counter';
import Employ from './components/Employ';
import Disply from './components/Disply';
import Count2 from './components/Count2';
import Count3 from './components/Count3';
import Input from './components/Input';
import List from './components/List';
import Conditional from './components/Conditional';
import Form from './components/Form';
import Hoc from './components/Hoc';
import Class from './components/Class'
import Count4 from './components/Count4';
import Input2 from './components/Input2';
import List2 from './components/List2';
import Fetch from './components/Fetch';
import SmartCounter from './components/SmartCounter';
import ReusubleComponent from './components/ReusubleComponent';
import List3 from './components/List3';
import Hi from './components/Hi';



function App() {
  const king="King";
    const FormWelcome=Hoc(Form);
    const CountWelcome=Hoc(Count3)
    const HeadeWelcome=Hoc(Header)
  const [count,setCount]=useState(0);
  const [state,setState]=useState(false)
    const [show,setShow]=useState(true)


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
    <HeadeWelcome/>
    <FormWelcome/>
   <h1 style={{color:"red"}}>HELLO WORLD</h1>
   <p className='how'>How are you {name}</p>
   <Header name={str} />
   <button onClick={addCount}>Add</button>
   <Counter {...obj}/>
      <Counter title='2nd' count={count}/>
     {
      dt.map((vl,index)=>{
        return (
          // <Employ key={index} name={obj.name} club={obj.club}/>
           <Employ  {...vl} key={index} />
        )
      })
     }
     <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
{state? <Disply /> :null}
<Count2/>
<Count3/>
<Input />
<List/>
<Conditional/>
<Form />
<CountWelcome/>
<Class king={king}/>
<Count4/>
<Input2/>
<List2/>
<Fetch/>
{/* 
<button onClick={()=>setShow(!show)}>Toogle</button>
{show && <SmartCounter/>} */}

 <SmartCounter/>
 <ReusubleComponent  name="Joa felix" Club="Alnasr" />
  <ReusubleComponent  name="Messi" Club="Alnasr" />
   <ReusubleComponent  name="Ney" Club="Alnasr" />
   <List3/>
   <Hi/>

   </>
  );
}



export default App;
