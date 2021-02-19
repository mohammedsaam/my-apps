import React from 'react';

export const Child = (props) => {
    return (
        <div>
            <h1>my name is {props.item} my Age {props.age}</h1>
            <h1> my occupation {props.job}</h1>
            <p onClick={props.link}>
                my name is {props.name} my age is {props.Age} 
             </p>
             <input type="text" onChange={props.change} />
        </div>
    );
};
