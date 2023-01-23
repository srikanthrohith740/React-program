import React from "react";
class Counterdemo extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incriment(){
        console.log("hello")
        this.setState({count:this.state.count+1})
    }
    decriment(){
        console.log("good")
        this.setState({count:this.state.count-1})
    }


    render(){
        return(
            <div>
                <h1>couter Demo</h1>
                <h1 >COUNT {this.state.count}</h1>
                <button onClick={()=>this.incriment()}className="btn btn-primary" >incriment</button>
                <button onClick={()=>this.decriment()}className="btn btn-danger">decrement</button>
            </div>
        )
    }
}
export default Counterdemo;