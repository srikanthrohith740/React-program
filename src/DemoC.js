import React from "react";
class DemoC extends React.Component{
    constructor(props){
        super()
        this.state={
            name:"srikanth",
            age:"23"
        }
    }
    render(){
        return(
            <div>
                <h1>hello class component</h1>
                <h1>my name is={this.props.name} frnd {this.state.name}</h1>
                <h1>my age is={this.props.age}{this.state.age}</h1>
            </div>
        )
    }
    
        
    
}
export default DemoC;