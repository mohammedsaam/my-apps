import React from 'react';
import ChangeHandler from '../ChangeHandler/ChangeHandler';
import FetchDataFromParent from '../FetchingDataFromJSON/FetchDataFromParent';
import PropsWithParents from '../HeaderSection/MainBodySection/ClassWithClassComponent/PropsWithParents';
import { MainHeader } from '../HeaderSection/MainBodySection/MainHeader';
import {Parents} from '../HeaderSection/MainBodySection/Parents';
import UseStateparent from '../HeaderSection/MainBodySection/UseStateparent';
import Outputingparent from '../Outtputinglist/Outputingparent';
import FetchingDataFromReduxParent from '../practice/FetchingDetailsFromRedux/FetchingDataFromReduxParent';
export const Landing = () => {
    return (
        <div>
            <ChangeHandler/>
            {/* <MainHeader/>
            <Parents />
            <PropsWithParents/>
            <UseStateparent/>
            <Outputingparent/>
            <FetchDataFromParent/>
            <FetchingDataFromReduxParent/> */}
        </div>
    );
};
