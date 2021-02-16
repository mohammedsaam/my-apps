import React,{Component} from "react"

import PropsWithClassChild from "./PropsWithClassChild";
 class PropsWithParents extends Component{
     state={
         person:[
             {name:"Thor", age:25},
             {name:"superman", age:30},
             {name:"wonder woman", age:20},
         ],
     };
     changeNameHandler = (newname, Name) => {
        this.setState({
            person: [
                {name: newname, age:Name},
                {name:"clark", age:30},
                {name:"steve rogres", age:40}
            ],
        });

    };

    changeNamehyper = ( hibro2, hibro ) => {
        this.setState({
            person: [
                {name:hibro, age:25},
                {name:"asfaan", age:30},
                {name:hibro2, age:40}
            ],
        });

    };

     render() { 
         return (
             
             <div> 
                <h1>heloo</h1>
                 <PropsWithClassChild name={this.state.person[0].name} Age={this.state.person[0].age} />
                 <PropsWithClassChild name={this.state.person[1].name} Age={this.state.person[1].age} occupation="pickupbiz" />
                 <PropsWithClassChild name={this.state.person[2].name} Age={this.state.person[2].age} occupation="pickupbiz" 
                   link={this.changeNameHandler}
                 />

                 <PropsWithClassChild name="mazhar khan" Age="27" occupation="pickupbiz" />
                 <PropsWithClassChild name="asfaan khan" Age="27" occupation="pickupbiz" />            
                 <button onClick={this.changeNameHandler.bind(this,"Rabay",35)}>
                     On Click Event 
                 </button>
                 <button onClick={() => this.changeNamehyper("waah", "waah2") }>On Click</button>
           
                 </div>
         );
     }
    }
     export default PropsWithParents;