import  React from "react"
class EventHandler extends React.Component{
    constructor(){
        super()
        this.state={
            name:"srikanth",
            age:"23"
        }
        this.changename=this.changename.bind(this)
        this.handlerchange=this.handlerchange.bind(this)
    }
    changename(){
        console.log(this.state.name)
        this.setState({name:this.state.changename})
        
    }
    handlerchange(event){
        this.setState({changename:event.target.value})
    }


    render(){
        return(
            <div>
                <h1>my name is:{this.state.name}</h1>
                <input type="text" value={this.state.changename} onChange={this.handlerchange}/>
                <button onClick={this.changename}>changename</button>
                <h2>my age is:{this.state.age}</h2>
            </div>
        )
    }
}
export default EventHandler;