import React, { useState,useEffect } from 'react'
import { useSelector} from  "react-redux";
import { getAllGroups, getAllUsers } from '../../State/Selector/groupSelector';
import FetchDataFromUser from './FetchDataFromUser';
import FetchingDetailsFromReduxChild from './FetchingDetailsFromReduxChild';
function FetchingDataFromReduxParent() {
    const selector = useSelector(getAllGroups,getAllUsers);
    const selector1 = useSelector(getAllUsers);
const [groupData, setGroupData] = useState(selector);
const [userData , setUserData] = useState(selector1);
useEffect(() => {
    setGroupData(selector);
}, [selector])

console.log(groupData ,userData);

    return (
        
        <div>
           {groupData&&groupData.map((item)=>{
               return<FetchingDetailsFromReduxChild currentitem={item}/>
           })}

           {userData&&userData.map((data)=>{
              return <FetchDataFromUser freshData={data}/>
           })}
           
        </div>
    );
}

export default FetchingDataFromReduxParent
