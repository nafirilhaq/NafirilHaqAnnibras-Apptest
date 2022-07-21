import {combineReducers} from 'redux';
import {contactReducer} from './contact';
import {profileReducer} from './profile';
import {globalReducer} from './global';

const reducer = combineReducers({
  contactReducer,
  profileReducer,
  globalReducer,
});

export default reducer;
