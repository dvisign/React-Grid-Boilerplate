import produce from 'utils/produce';

export const initialState = {
  customerLists : null,
  filterCustomerLists : null
};

export const CUSTOMER_LIST_REQUEST = 'CUSTOMER_LIST_REQUEST';
export const CUSTOMER_LIST_SUCCESS = 'CUSTOMER_LIST_SUCCESS';
export const CUSTOMER_LIST_FAILURE = 'CUSTOMER_LIST_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case CUSTOMER_LIST_REQUEST : 
      console.log('request')
      break;
    case CUSTOMER_LIST_SUCCESS : 
      break;
    case CUSTOMER_LIST_FAILURE : 
      break;
    default : 
      break;
  };
});

export default reducer;