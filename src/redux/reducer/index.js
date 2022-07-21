import {combineReducers} from 'redux';
import {contactReducer} from './contact';
import {profileReducer} from './profile';

const reducer = combineReducers({contactReducer, profileReducer});

export default reducer;
