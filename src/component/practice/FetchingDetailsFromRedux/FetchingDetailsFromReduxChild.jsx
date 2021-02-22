import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNewGroup } from '../../State/Action/groupAction';

function FetchingDetailsFromReduxChild({currentitem}) {
    const dispatch= useDispatch();

   
    return (
        <div>
       <h3>{currentitem.name}</h3> 
       <hr/>
         <img src={currentitem.image} width="200px" height="150px" border="3px solid black"  alt="hii"/>
         
        </div>
    )
}

export default FetchingDetailsFromReduxChild
