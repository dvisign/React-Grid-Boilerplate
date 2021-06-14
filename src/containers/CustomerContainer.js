import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AgGridComponents from 'components/grid/AgGridComponents';

import { CUSTOMER_LIST_REQUEST } from 'reducers/customer';

const CustomerContainer = React.memo((props) => {
  const { modalController, modalState } = props;
  const { customerLists } = useSelector((state => state.customer));
  const dispatch = useDispatch();
  useEffect(() => {
    if (customerLists === null) {
      onLoadData();
    }
  }, [customerLists]);
  const onLoadData = useCallback(() => {
    dispatch({
      type : CUSTOMER_LIST_REQUEST
    })
  });
  return (
    <div>
      <AgGridComponents 
      
      />
    </div>
  );
});

export default CustomerContainer;