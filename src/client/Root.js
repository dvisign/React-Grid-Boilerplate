import React from 'react';
import { Router } from 'react-router-dom';

import { createBrowserHistory } from "history";

import dotenv from 'dotenv';
import App from 'shared/App';

const history = createBrowserHistory();
dotenv.config();

const Root = () => {
  return (
    <Router history={history}>
      <App />
    </Router>
  );
};

export default Root;