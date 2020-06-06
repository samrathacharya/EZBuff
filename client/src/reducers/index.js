// Brings together all other reducers
import {combineReducers} from 'redux';
import exerciseReducer from './exerciseReducer';

export default combineReducers({
    exercise: exerciseReducer
});