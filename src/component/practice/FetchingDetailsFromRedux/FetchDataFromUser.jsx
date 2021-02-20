import React from 'react';
import { useDispatch } from 'react-redux'

const FetchDataFromUser = ({freshData}) => {
    const dispatch= useDispatch();
    return (
        <div>
            <h1>{freshData.name}</h1>
        </div>
    );
};

export default FetchDataFromUser;