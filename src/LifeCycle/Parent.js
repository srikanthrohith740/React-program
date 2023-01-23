import React from "react";
import Child from "./Child"

class Parent extends React.Component{
    constructor(){
        console.log("construntor in parent")
        super()
        this.state={
            count:0
        }

    }
    getDeriveStateFromProps(){
        console.log("getDeriveStateFromprops")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
    increment(){
        this.setState({count:this.state.count+1})
    }

        render(){
            console.log("Am Render in Parent")
        return(
            <div>
                <h1>Hello Am Parent Component</h1>
              
                <h1>counter : {this.state.count}</h1>
                <button onClick={()=>this.increment()} className="btn btn-success">increment</button>
                <Child count={this.state.count}/>

            </div>
        )
    }
}

export default Parent;