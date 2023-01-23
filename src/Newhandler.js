import React from "react";
class Newhandler extends React.Component{
    constructor(){
        super()
        this.state={
            name:"srikanth",
            age:"23",
            company:"carrerx",
            pin:"500036"
        }
        this.handleClick1=this.handleClick1.bind(this)

    }
    handleClick1(){
     console.log("first clicked")
     this.setState({name:"john"})
    }
    handleClick2(){
        console.log("second clicked")
        this.setState({age:"24"})
       }
       handleClick3(){
        console.log("third clicked")
        this.setState({company:"icici"})
       }
       handleClick4 = () => {
        console.log("forth clicked")
        this.setState({pin:"500070"})
       }
    
    render(){
        return(
            <div>
                <h1>hello im new handler</h1>
                <h1>my nameis={this.state.name}</h1>
                <h1>my age is={this.state.age}</h1> 
                <h1>my pin is={this.state.pin}</h1>
                <h1>my company is={this.state.company}</h1>
                <button onClick={this.handleClick1}>click1</button>
                <button onClick={this.handleClick2.bind(this)}>click2</button>
                <button onClick={()=>this.handleClick3()}>click3</button>
                <button onClick={this.handleClick4}>click4</button>
            </div>
        )
    }
}
export default Newhandler;