import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AgChartComponents from 'components/grid/AgChartComponents';
import { ORDER_LIST_REQUEST } from 'reducers/work';
import { CallAPi } from 'hooks';

const OrderChart = React.memo(() => {
  const { orderData } = useSelector((state => state.work));
  const dispatch = useDispatch();
  useEffect(() => {
    if (orderData === null) {
      dispatch({
        type : ORDER_LIST_REQUEST
      })
    }
  }, [orderData]);
  const options = {
    data : orderData,
    series: [
      {
        type: 'column',
        xKey: 'date',
        yKeys: ['order'],
      },
    ],
    navigator: {
      enabled: true,
      min: 0,
      max: 1
    },
    legend : {
      enabled : false
    }
  }
  return (
    <AgChartComponents 
      options={options}
    />
  );
});

export default OrderChart;