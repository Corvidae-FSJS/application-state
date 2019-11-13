import { combineReducers } from 'redux';
import actionReducer from './actionReducer';
import saveGameReducer from './saveGameReducer';

export default combineReducers({
  actionReducer,
  saveGameReducer
});