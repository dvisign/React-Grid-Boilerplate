import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Modal } from 'react-bootstrap';

const ModalCotainer = React.memo(({size, state, controller, component:Component}) => {
  const { boardViewContent } = useSelector((state => state.board));
  const modalClose = useCallback(() => {
    controller({...state, open:false});
  });
  return (
    <Modal
      show={state.open} 
      size={size}
      onHide={modalClose}
      centered
    >
      <Component 
        content={boardViewContent}
      />
    </Modal>
  );
});

export default ModalCotainer;