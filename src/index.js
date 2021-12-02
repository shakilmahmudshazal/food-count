import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetProducts } from './actions/products';
import {startSetUsers } from './actions/users';
import {startSetAdmin } from './actions/admin';
import {startSetAdminHistory } from './actions/adminHistory';
import {startSetUserPaymentHistory } from './actions/userPaymentHistory';
import { login, logout } from './actions/auth';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/general/LoadingPage';
import './styles/styles.scss';
import 'antd/dist/antd.css';

// ReactDOM.render(<App />, document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
const store = configureStore();
const jsx = (
  <Provider store={store}>
  
    <AppRouter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(startSetUsers());
    store.dispatch(startSetProducts());
    store.dispatch(startSetAdmin());
    store.dispatch(startSetAdminHistory());
    store.dispatch(startSetUserPaymentHistory());

    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetUsers());
    store.dispatch(startSetProducts()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
      history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});

serviceWorker.register();
