import { useState } from "react";
function Formrecap (){
    const[name,setName]=useState("")
    const[age,setAge]=useState()
    const[empinfo,setEmpInfo]=useState({name:"",age:"0"})
    function onChangeName(event){
        setName(event.target.value)

    }
    function onChangeAge(event){
        setAge(event.target.value)

    }
    const save=(e)=>{
        console.log("on clicked it saved")
        e.preventDefault()
        setEmpInfo((preState)=>({
            ...preState,
            name:name,
            age:age

        }))
    }



    
    


    
    return(
        <div>
            <form onSubmit={save}>
                <label>name : </label>
                <input type="text" value={name} onChange={onChangeName}/>
                <label>age : </label>
                <input type="text" value={age} onChange={onChangeAge} />
                <button className="btn btn-primary" type="submit" >submit</button>
            </form>
            <h1>Employee information</h1>
            <h3>{empinfo.name}</h3>
            <h3>{empinfo.age}</h3>



            
        </div>
    )
}
export default Formrecap;