import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AgGridComponents from 'components/grid/AgGridComponents';

import { BOARD_LIST_REQUEST, BOARD_VIEW_REQUEST } from 'reducers/board';
import CustomModals from 'components/board/CustomModals';

const BoardList = React.memo((props) => {
  const { modalController, modalState } = props;
  const { boardList } = useSelector((state => state.board));
  const dispatch = useDispatch();
  useEffect(() => {
    if (boardList === null) {
      onLoadData();
    }
  }, [boardList]);
  const onLoadData = useCallback(() => {
    dispatch({
      type : BOARD_LIST_REQUEST
    });
  });
  const setModalControll = useCallback(() => {
    modalController({
      open:true, 
      component:CustomModals
    });
  }, [modalController]);
  const gridOption = {
    columnDefs : [
      { 
        field : 'wrId', 
        headerName: '번호', 
        width:100, 
        headerClass : 'labelCenter' 
      },
      { 
        field : 'wrSubject', 
        headerName: '제목', 
        cellRenderer: 'link',
        cellRendererParams: {
          clicked: () => {
            setModalControll();
          }
        }, 
        width:175 
      },
      { 
        field : 'wrName', 
        headerName: '작성자', 
        width:130 
      },
      { 
        field : 'wrDateTime',
        headerName: '작성일시', 
        width:130 
      },
    ],
    rowData : boardList,
    defaultColDef : {
      editable: false,
      autoHeight: true,
      sortable: true,
      resizable: true,
    },
    exportSet : {
      used : false
    },
    frameworkComponents : {
      link : Links
    }
  };
  return (
    <>
      <AgGridComponents 
        columnDefs={gridOption.columnDefs}
        defaultColDef={gridOption.defaultColDef}
        rowData={gridOption.rowData}
        reflash={onLoadData}
        frameworkComponents={gridOption.frameworkComponents}
      />
    </>
  )
});

const Links = React.memo((props) => {
  const { clicked, value, data } = props;
  const dispatch = useDispatch();
  const viewContents = useCallback(() => {
    dispatch({
      type : BOARD_VIEW_REQUEST,
      data : data.wrId,
    });
    clicked();
  });
  return (
    <a className='boardViewLink' onClick={viewContents}>{value}</a>
  )
});

export default BoardList;