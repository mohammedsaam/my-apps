import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNewGroup } from '../../State/Action/groupAction';

function FetchingDetailsFromReduxChild({currentitem,freshData}) {
    const dispatch= useDispatch();

   
    return (
        <div>
       <h1>{currentitem.name}</h1> 
         <img src="" alt="hii"/>
         <h2>{freshData.name} </h2>   
        </div>
    )
}

export default FetchingDetailsFromReduxChild
