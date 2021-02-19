import React, { useState } from 'react'
import { useSelector} from  "react-redux";
import { getAllGroups, getAllUsers } from '../../State/Selector/groupSelector';
import FetchingDetailsFromReduxChild from './FetchingDetailsFromReduxChild';


function FetchingDataFromReduxParent() {
    const selector = useSelector(getAllGroups,getAllUsers);
    const selector1 = useSelector(getAllUsers);
const [groupData, setGroupData] = useState(selector);
const [userData , setUserData] = useState(selector);


console.log(groupData ,userData);

    return (
        
        <div>
           {groupData&&groupData.map((item,data)=>{
               return<FetchingDetailsFromReduxChild currentitem={item,data}/>
           })}

           {/* {userData&&userData.map((data)=>{
               return <FetchingDetailsFromReduxChild freshData={data}/>
           })} */}
           
        </div>
    );
}

export default FetchingDataFromReduxParent
