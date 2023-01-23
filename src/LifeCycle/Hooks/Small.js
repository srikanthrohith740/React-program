import { useEffect, useState } from "react";
function Small(){
    const[name,setName]=useState("")
    const[age,setAge]=useState("")
    const[post,setPost]=useState({id:"",title:"",userId:"",completed:""})

    async function repeat(){
        let data= await fetch('https://jsonplaceholder.typicode.com/todos/1')
        let post = await data.json()
        setPost(post)

    }

    useEffect(()=>{
        console.log("hello im useeffect")
    //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
    //    repeat(post)
      
    },[])

    function changeName(){
        setName("srikanth")
    }
     const changeAge=()=>{
        setAge(30)
     }


    return(
        <div>
            <h1>small useffect</h1>
            <h1> Name: {name}</h1>
            <h1>AGE: {age}</h1>
            <button className="btn btn-success" onClick={changeName}>changeName</button>
            <button className="btn btn-dark" onClick={changeAge}>changeAge</button>
        </div>
    )
}
export default Small;