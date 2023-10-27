// store.js
import {  combineReducers, applyMiddleware, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import {authReducer} from "./Authreducer/reducer"
import {profileReducer} from './Profilereducer/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer
});

const store = legacy_createStore(rootReducer,applyMiddleware(thunk));

export  {store};
