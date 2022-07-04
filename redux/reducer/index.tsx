import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import shoppingBagReducer from './shoppingBagReducer';

const rootReducer = combineReducers({ apiReducer, shoppingBagReducer});

export default rootReducer;
