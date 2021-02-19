import React from 'react';

const ChangeChild = (props) => {
    return (
        <div>
              <p onClick={props.link}>
                my name is {props.name} my age is {props.Age} 
             </p>
        </div>
    );
};

export default ChangeChild;