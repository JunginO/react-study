import { combineReducers } from '@reduxjs/toolkit';
import login from './reducer';
import { Login } from './types';

export type RootState = {
    login: Login;
};
const rootReducer = combineReducers({
    login,
});
export default rootReducer;
