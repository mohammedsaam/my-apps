import React from 'react';
import FetchDataFromParent from '../FetchingDataFromJSON/FetchDataFromParent';
import PropsWithParents from '../HeaderSection/MainBodySection/ClassWithClassComponent/PropsWithParents';
import { MainHeader } from '../HeaderSection/MainBodySection/MainHeader';
import {Parents} from '../HeaderSection/MainBodySection/Parents';
import UseStateparent from '../HeaderSection/MainBodySection/UseStateparent';
import Outputingparent from '../Outtputinglist/Outputingparent';
export const Landing = () => {
    return (
        <div>
            <MainHeader/>
            <Parents />
            <PropsWithParents/>
            <UseStateparent/>
            <Outputingparent/>
            <FetchDataFromParent/>
        </div>
    );
};
