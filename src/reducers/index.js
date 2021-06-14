import { combineReducers } from 'redux';
import common from './common';
import user from './user';
import work from './work';
import board from './board';
import customer from './customer';

export default combineReducers({
  common,
  user,
  work,
  board,
  customer
});