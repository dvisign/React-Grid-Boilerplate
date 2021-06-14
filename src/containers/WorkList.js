import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AgGridComponents from 'components/grid/AgGridComponents';

import { WORK_LIST_REQUEST } from 'reducers/work';

const WorkList = React.memo(() => {
  const { workList } = useSelector((state => state.work));
  const dispatch = useDispatch(); 
  const onLoadData = useCallback(() => {
    dispatch({
      type : WORK_LIST_REQUEST
    });
  });
  useEffect(() => {
    if (workList === null) {
      onLoadData();
    }
  }, [workList]);
  const gridOption = {
    columnDefs : [
      { field : 'id', headerName: 'NO', width:100, headerClass : 'labelCenter' },
      { field : 'workNum', headerName: '작업번호', width:130 },
      { field : 'orderNum', headerName: '수주번호', width:130 },
      { field : 'userIdNum', headerName: '사용자ID', width:130 },
      { field : 'workerName', headerName: '작업자', width:130 },
      { field : 'workStartDate', headerName: '작업시작일자', width:150 },
      { field : 'workEndDate', headerName: '작업종료일자', width:150 },
      { field : 'etc', headerName: '비고', width:150 },
    ],
    rowData : workList,
    defaultColDef : {
      editable: false,
      autoHeight: true,
      sortable: true,
      resizable: true,
    },
    exportSet : {
      used : true,
      type : 'CSV'
    }
  };
  
  return (
    <AgGridComponents 
      columnDefs={gridOption.columnDefs}
      defaultColDef={gridOption.defaultColDef}
      rowData={gridOption.rowData}
      exportFiles={gridOption.exportSet}
      reflash={onLoadData}
    />
  );
})

export default WorkList;