import React from 'react';
import { Modal } from 'react-bootstrap';

const CustomModals = React.memo(({ content }) => {
  return (
    <>
      <Modal.Header>
        <Modal.Title>
          {content.wrSubject}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {content.wrContent}
      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </>
  );
});

export default CustomModals;