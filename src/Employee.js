import React from 'react'
class Employee extends React.Component{
    constructor(){
        super()
        this.state={
            name:"Srikanth",
            age:"23"
        }
    }
        render(){
            return(
                <div>
                    <h1>my name is{this.state.name}</h1>
                    <h1>my age is{this.state.age}</h1>
                </div>
            )
        }
    
}
export default Employee;
