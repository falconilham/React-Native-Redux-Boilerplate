import { combineReducers } from 'redux';
import commonReducer from './Common';

export default combineReducers({
    common: commonReducer,
});