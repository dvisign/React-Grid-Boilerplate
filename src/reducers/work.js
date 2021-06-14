import produce from 'utils/produce';

export const initialState = {
  // 작업 지지서 리스트
  workList : null,
  // 수주 현황 리스트
  orderData : null
};

// 작업 지지서 리스트
export const WORK_LIST_REQUEST = 'WORK_LIST_REQUEST'; 
export const WORK_LIST_SUCCESS = 'WORK_LIST_SUCCESS'; 
export const WORK_LIST_FAILURE = 'WORK_LIST_FAILURE';
// 수주 현황 리스트
export const ORDER_LIST_REQUEST = 'ORDER_LIST_REQUEST';
export const ORDER_LIST_SUCCESS = 'ORDER_LIST_SUCCESS';
export const ORDER_LIST_FAILURE = 'ORDER_LIST_FAILURE';


const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case WORK_LIST_REQUEST :
      draft.workList = []
      break;
    case WORK_LIST_SUCCESS :
      draft.workList = action.data;
      break;
    case WORK_LIST_FAILURE :
      draft.workList = []
      break;
    case ORDER_LIST_REQUEST :
      break; 
    case ORDER_LIST_SUCCESS :
      draft.orderData = action.data;
      break; 
    case ORDER_LIST_FAILURE :
      break; 
    default:
      break;
  }
});

export default reducer;