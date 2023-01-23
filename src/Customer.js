import React from "react";
import Employee from "./Employee";

class Customer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"Ettagoni Srinivas"
        }
        
    }
    render(){
        return(
            <div>
                <h1>My Name Is{this.state.name}</h1>
                <Employee/>
            </div>
        )
    }

}
 export default Customer