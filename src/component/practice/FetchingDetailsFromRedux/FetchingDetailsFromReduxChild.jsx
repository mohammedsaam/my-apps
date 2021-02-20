import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNewGroup } from '../../State/Action/groupAction';

function FetchingDetailsFromReduxChild({currentitem}) {
    const dispatch= useDispatch();

   
    return (
        <div>
       <h1>{currentitem.name}</h1> 
         <img src={currentitem.image} width="200px" height="150px" alt="hii"/>
         
        </div>
    )
}

export default FetchingDetailsFromReduxChild
