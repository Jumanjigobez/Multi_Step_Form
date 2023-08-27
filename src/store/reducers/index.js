import { combineReducers } from 'redux';

import { StepReducer } from './steps';
import { usersInfoReducer } from './usersInfoReducer';
import { usersPlanReducer } from './usersPlanReducer';
import { usersAddonReducer } from './usersAddonReducer';


const rootReducer = combineReducers({
    StepReducer,
    usersInfoReducer,
    usersPlanReducer,
    usersAddonReducer
})

export default rootReducer;