import React, { useState } from "react";

import WorkList from 'containers/WorkList';
import BoardList from 'containers/BoardList';
import OrderChart from 'containers/OrderChart';

import { Container, Row, Col } from 'react-bootstrap';
const AgGrid = React.memo((props) => {
  const {modalController, modalState} = props;  
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <WorkList />
          </Col>
          <Col sm={12} md={6}>
            <BoardList 
              modalController={modalController}
              modalState={modalState}
            />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6}>
            <OrderChart />
          </Col>
        </Row>
      </Container>
    </div>
  );
})

export default AgGrid;