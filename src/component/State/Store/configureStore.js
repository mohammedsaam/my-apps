import {createStore,combineReducers}from 'redux';
import {groupReducer} from '../Reducer/groupReducer';
import {UserReducer} from '../Reducer/UserReducer';

export const configureStore =()=>{
    const store = createStore(
combineReducers ({
    groupReducer,UserReducer
}),

window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};