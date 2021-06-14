import React from 'react';
import CustomerContainer from 'containers/CustomerContainer';

import { Container, Row, Col } from 'react-bootstrap';
const Customer = React.memo(() => {
  return (
    <div>
      <Container>
        <CustomerContainer />
      </Container>
    </div>
  )
})

export default Customer;