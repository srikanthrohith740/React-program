import { useState } from "react";
function UsestateF(){
    const [name,setName] = useState("Srinivas")

    return(
        <div>
            <h1>my name is : {name}</h1>
        </div>
    )
}
export default UsestateF;