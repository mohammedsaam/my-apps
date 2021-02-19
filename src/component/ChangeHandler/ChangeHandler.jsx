import React from 'react';
import ChangeChild from './ChangeChild';

const ChangeHandler = (setState,changeNameHandler) => {
    changeNameHandler = (newname, Name) => {
        setState({
            person: [
                {name: newname, age:Name},
                {name:"clark", age:30},
                {name:"steve rogres", age:40}
            ],
        });

    };
    return (
        <div>
            <ChangeChild />
            
        </div>
    );
};

export default ChangeHandler;