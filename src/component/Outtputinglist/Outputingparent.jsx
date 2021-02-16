import React, { useState } from 'react';
import OutputingChild from './OutputingChild';

const Outputingparent = () => {
 const CarData=[
     {CarComapny:"mercedez", CarName:"Benz"},
     {CarComapny:"BMW", CarName:"X1"},
     {CarComapny:"Tesla", CarName:"Cybertrack"},
     {CarComapny:"Toyota", CarName:"Fortuner"},
     {CarComapny:"Hyndai", CarName:"Verna"},
];
const [PersonDetails,setPersonDetails] = useState(CarData);
    return (
        <div>
            {CarData.map((FreshData)=>{
            return <OutputingChild 
            CompanyName={FreshData.CarComapny}
            Car={FreshData.CarName}
            />
        })}
            
        </div>
    );
};

export default Outputingparent; 