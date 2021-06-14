import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

// component
import AuthRoute from 'components/common/AuthRoute'
import ModalContainer from 'containers/ModalContainer';

// router
import Main from 'pages/Main';
import Sub from 'pages/Sub';
import LogIn from 'pages/LogIn';
import Grid from 'pages/Grid';
import AgGrid from 'pages/AgGrid';
import Customer from 'pages/Customer';
import Notfound from 'pages/NotFound';

const App = () => {
  const { loggedIn, loggedOut } = useSelector((state => state.user));
  const [ modal, setModal ] = useState({
    open : false,
    component : ''
  });
  return (
    <div className='App'>
      <Switch>
        <AuthRoute 
          path='/'
          component={Main}
          exact={true}
          endPoint={loggedIn}
          redirect='/login'
        />
        <AuthRoute 
          path='/sub'
          component={Sub}
          exact={false}
          endPoint={loggedIn}
          redirect='/login'
        />
        <AuthRoute 
          path='/login'
          component={LogIn}
          exact={false}
          endPoint={loggedOut}
          redirect='/'
          propObject={{test:'test'}}
        />
        <AuthRoute 
          path='/test'
          component={AgGrid}
          exact={false}
          endPoint={loggedIn}
          redirect='/login'
          propObject={{modalController:setModal, modalState:modal}}
        />
        <Route 
          path='/grid'
          render={(props) => <Grid {...props} />}
        />
        <Route 
          path='/main'
          render={(props) => <AgGrid modalController={setModal} modalState={modal} {...props} />}
        />
        <Route 
          path='/customer'
          render={(props) => <Customer modalController={setModal} modalState={modal} {...props} />}
        />
        <Route render={(props) => <Notfound {...props} />} />
      </Switch>
      <ModalContainer 
        size='lg'
        state={modal}
        controller={setModal}
        component={modal.component}
      />
    </div>
  );
};

export default App;
