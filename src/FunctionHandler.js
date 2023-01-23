import { useState } from "react";
function FunctionHandler(props){
    const[name,setName]=useState("srikanth")
    const[address,setAddress]=useState("hyd")

return(
   <div>
    <h1>my name is :{name}</h1>
    <h2>my address is :{address}</h2>
    <h2>my age is :{props.age}</h2>


      
   </div> 
)
}
export default FunctionHandler;
