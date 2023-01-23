import React from "react";
// life cycle is three types
// 1.mounting
// 2.update
// 3.unmounting

//  mounting 4methods                  update5methods                   unmounting
// 1.construntor                     1.getDeriveStateFromProps        (it is crushing the data)
// 2.get derivestatefrom props       2.shouldComponentUpdate
// 3.component did mount             3.render
// 4.render                          4.getSnapShotUpdate
//                                   5.componentUpdate
class Child extends React.Component{
    constructor(props){
        console.log("constructor")
        super(props)
        this.state={

        }

    }
    getDeriveStateFromProps(){ 
        console.log(" im child from getDeriveStateFromprops")
    }
    shouldComponentUpdate(){
        console.log(" im child from shouldComponentUpdate")
        return true
    }
    componentDidMount(){
        console.log("im child from componentDidMount")
    }
    getSnapshotBeforeUpdate(){
        console.log("im child from getSnapShotforUpdate")
    }
    componentDidUpdate(){
        console.log("im child from componentDidUpDate")
    }
    render(){
        console.log("im child from render")
        return(
            <div>
                <h1>Hello Am Child Component </h1>
                <h1>counter : {this.props.count}</h1>
            </div>
        )
    }
}
    
export default Child;