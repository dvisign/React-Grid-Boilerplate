import { all, call } from 'redux-saga/effects';
import axios from 'axios';

import user from './user';
import work from './work';
import board from './board';
import customer from './customer';

axios.defaults.baseURL = '/';

export default function* rootSaga() {
  yield all([
    call(user),
    call(work),
    call(board),
    call(customer)
  ])
};