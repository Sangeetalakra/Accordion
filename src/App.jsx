import {useState}  from 'react';
import Accordion from './Accordion';
 import './App.css'

const App =()=>{
   const[selected,setSelectedState]= useState(null)
   const arr=[ 1,2,3]


   const handleClick=(i)=>{
      setSelectedState(i) 
      }
   
   return(
      <div>
         <h1>Accordion</h1>
          {arr.map((element,i) => 
          (<Accordion key={element} onClick={handleClick} index={i} selected={selected}/>)
         )} 
      </div>
   )
}

export default App