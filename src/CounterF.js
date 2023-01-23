import { useState } from "react";
function CounterF (){
    const[count,setCount]=useState(0)

    const[name,setName]=useState("")
    function increment(){
        setCount(count+1)

     
    }
    function decrement(){
        setCount(count-1)

    }
   function  handler(e){
    setName(e.target.value)

    }
    
    
    return(
        <div>
            <h1> counter  = {count}</h1>
            <button className="btn btn-primary" onClick={()=>increment()}>Icrement</button>
            <button className="btn btn-dark" onClick={()=>decrement()}>Decrement</button>
            <h2>my name is : {name}</h2>
            <input type="text" value={name} onChange={handler}/>
        </div>
    )
}
export default CounterF;