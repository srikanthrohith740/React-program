import React from "react";
class Inputhandler extends React.Component{
    constructor(){
        super()
        this.state={
            name:"srikanth",
            age:23,
            company:"carrerx",
            pin:""

    
        }
        this.changing=this.changing.bind(this)
        this.handler=this.handler.bind(this)
    }
        changing(){
            this.setState({company:this.state.pin})
        }
        handler(event){
            this.setState({company:event.target.value})
        }
        

    render(){
        return(
            <div>
                <h1>hello im event handler</h1>
                <h1>my name is ={this.state.name}</h1>
                <h1>my age is ={this.state.age}</h1>
                <h1>my company is ={this.state.company}</h1>
                <input type="text" value={this.state.company}onChange={this.handler}/>
                <button onClick={this.changing}>onchange</button>
                
                

                
            </div>
        )
    }
}
export default Inputhandler;