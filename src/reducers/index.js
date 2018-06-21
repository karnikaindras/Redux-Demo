//this function takes all the reducers and combine them into one object.

import {combineReducers} from 'redux';
import UserReducer from './reducer-users';

const allReducers = combineReducers({
    users: UserReducer
});

export default allReducers;