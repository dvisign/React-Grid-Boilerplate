import { all } from 'redux-saga/effects';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/ko';

import taker from './taker';

const dummyData = process.env.NODE_ENV === 'development' ? {
  data : {}
} : null;

export default function* customerSaga() {
  yield all([

  ]);
};