import React, { useState } from 'react';

export const Hiii = () => {
    const [addNumber, setAddNumber] = useState(0);


    const handleAddcounter = () => {
        setAddNumber(addNumber+1);
};
const handleDeletecounter = () => {
    setAddNumber(addNumber-1);
};
    return (
        <div>
            <h1> Number...</h1>
            <button>{addNumber}</button>
            <br />
            <button onClick={handleAddcounter}> 
                Add Number 
            </button>
            <button onClick={handleDeletecounter}>
                Delete Number

            </button>
            {/* <h2>
                decrease number...
            </h2> */}

        </div>
    );
};

