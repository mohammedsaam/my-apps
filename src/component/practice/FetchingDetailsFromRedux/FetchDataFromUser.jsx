import React from 'react';

const FetchDataFromUser = ({freshData}) => {
    return (
        <div>
            <h3>{freshData.name}</h3>
            <hr/>
            <img src={freshData.image} width="200px" height="200px"  border="1px solid black"  alt="hello"/> 
            <h4>{freshData.desc}</h4>
        </div>
    );
};

export default FetchDataFromUser;