import React from 'react';

const OutputingChild = (fresh) => {
    return (
        <div>
           <p>This is {fresh.CompanyName } and my product is {fresh.Car} </p>
        </div>
    );
};

export default OutputingChild;