import { all } from 'redux-saga/effects';
import moment from 'moment';
import axios from 'axios';
import 'moment/locale/ko';

import taker from './taker';

import { WORK_LIST_REQUEST, ORDER_LIST_REQUEST } from 'reducers/work';

const dummyData = process.env.NODE_ENV === 'development' ? {
  data : [
    {
      id : 1,
      workNum : 20200911003,
      orderNum : 20200911003,
      userIdNum : 10000004,
      workerName : '강남길',
      workStartDate : '20200911',
      workEndDate : '20200911',
      etc : '슬림링'
    },
    {
      id : 2,
      workNum : 20200911004,
      orderNum : 20200911004,
      userIdNum : 10000006,
      workerName : '강하늘',
      workStartDate : '20200911',
      workEndDate : '20200911',
      etc : '브라켓'
    }
  ]
} : null;
const orderDummyData = {
  data : [
    {
      'date':'20200901',
      'order':140
    },
    {
      'date':'20200908',
      'order':124
    },
    {
      'date':'20200909',
      'order':112
    },
    {
      'date':'20200910',
      'order':118
    },
    {
      'date':'20200917',
      'order':124
    },
    {
      'date':'20200924',
      'order':108
    },
    {
      'date':'20200925',
      'order':96
    },
    {
      'date':'20200928',
      'order':104
    },
    {
      'date':'20200929',
      'order':104
    },
    {
      'date':'20201012',
      'order':104
    },
    {
      'date':'20201013',
      'order':104
    },
    {
      'date':'20201014',
      'order':104
    },
    {
      'date':'20201015',
      'order':104
    },
    {
      'date':'20201016',
      'order':104
    }
  ]
}

function* workAPI() {
  if (process.env.NODE_ENV === 'development') {
    dummyData.data.map((v) => {
      v.workStartDate = moment(v.workStartDate).format('YYYY-DD-MM');
      v.workEndDate = moment(v.workEndDate).format('YYYY-DD-MM');
    });
    return dummyData;
  } else {
    return null;
  }
};

function* orderAPI() {
  if (process.env.NODE_ENV === 'development') {
    orderDummyData.data.map((v) => {
      v.date = moment(v.date).format('YYYY-DD-MM')
    })
    return orderDummyData;
  } else {
    return null;
  }
}

export default function* workSaga() {
  yield all([
    taker(WORK_LIST_REQUEST, 'WORK_LIST', workAPI),
    taker(ORDER_LIST_REQUEST, 'ORDER_LIST', orderAPI)
  ])
}

