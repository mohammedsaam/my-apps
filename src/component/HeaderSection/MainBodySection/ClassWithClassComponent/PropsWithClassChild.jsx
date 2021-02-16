import React,{Component} from "react"
class PropsWithClassChild extends Component{
    render(){
        return(
            <div>
             <p onClick={this.props.link}>
                my name is {this.props.name} my age is {this.props.Age} 
             </p>
             <input type="text" onChange={this.props.change} />
            </div>
        )
    }
 
}
export default PropsWithClassChild
