import React from 'react';

import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import Header from './components/Header';

import './config/ReactotronConfig';

import store from './store';

import history from './services/history';

import { ToastContainer } from 'react-toastify';

function App() {
  return (

    <Provider store={store}>
      <Router history={history}>
        <Header></Header>
        <Routes></Routes>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>

  );
}

export default App;
