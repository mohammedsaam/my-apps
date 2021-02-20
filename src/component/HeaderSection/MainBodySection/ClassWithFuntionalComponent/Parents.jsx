import React from 'react';
import { Child } from './Child';
export  const Parents = ( changeNamehyper,setState) => {
    const PersonName="Rabey";
    const PersonAge="18";
    const personjob="pickupbiz"
    
    changeNamehyper = ( hibro2, hibro ) => {
        setState({
            person: [
                {name:hibro, age:25},
                {name:"asfaan", age:30},
                {name:hibro2, age:40}
            ],
        });

    };
    return (
        <div>
            <Child item={PersonName} age={PersonAge} job={personjob}/>
            <button onClick={() => changeNamehyper("waah", "waah2") }>On Click</button>
            
            
        </div>
    );
};

 