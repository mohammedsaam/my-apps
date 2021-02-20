import React from 'react';
import FetchDataFromParent from '../FetchingDataFromJSON/FetchDataFromParent';
import PropsWithParents from '../HeaderSection/MainBodySection/ClassWithClassComponent/PropsWithParents';
import { Parents } from '../HeaderSection/MainBodySection/ClassWithFuntionalComponent/Parents';
import { MainHeader } from '../HeaderSection/UseState./MainHeader';
import UseStateparent from '../HeaderSection/UseState./UseStateparent';
import Outputingparent from '../Outtputinglist/Outputingparent';
import FetchingDataFromReduxParent from '../practice/FetchingDetailsFromRedux/FetchingDataFromReduxParent';
export const Landing = () => {
    return (
        <div>
            {/* <Parents/>
             <PropsWithParents/>
           
            
            
            <Outputingparent/>
            <FetchDataFromParent/>
            <UseStateparent/> */}
            {/* <MainHeader/> */}
             <FetchingDataFromReduxParent/>
        </div>
    );
};
