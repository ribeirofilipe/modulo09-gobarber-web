import React from 'react';
import { Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from './styles/global';

import './config/ReactotronConfig';

import Routes from './routes/index';

import history from './services/history';

import { store, persistor } from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyled />
        </Router>
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}

export default App;
