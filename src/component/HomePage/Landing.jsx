import React from 'react';
import FetchDataFromParent from '../FetchingDataFromJSON/FetchDataFromParent';
import PropsWithParents from '../HeaderSection/MainBodySection/ClassWithClassComponent/PropsWithParents';
import { Parents } from '../HeaderSection/MainBodySection/ClassWithFuntionalComponent/Parents';
import { MainHeader } from '../HeaderSection/MainBodySection/MainHeader';
import UseStateparent from '../HeaderSection/MainBodySection/UseStateparent';
import Outputingparent from '../Outtputinglist/Outputingparent';
import FetchingDataFromReduxParent from '../practice/FetchingDetailsFromRedux/FetchingDataFromReduxParent';
export const Landing = () => {
    return (
        <div>
            {/* <Parents/> */}
             <PropsWithParents/>
            {/* <MainHeader/>
            
            <UseStateparent/>
            <Outputingparent/>
            <FetchDataFromParent/>
            <FetchingDataFromReduxParent/> */}
        </div>
    );
};
