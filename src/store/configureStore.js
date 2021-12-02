import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import productsReducer from '../reducers/products';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import usersReducer from '../reducers/users';
import adminReducer from '../reducers/admin';
import adminHistoryReducer from '../reducers/adminHistory';
import userPaymentHistoryReducer from '../reducers/userPaymentHistory';
import userPurchaseHistoryReducer from '../reducers/userPurchaseHistory';
import currentUserHistoryReducer from '../reducers/currentUserHistory';
import currentUserPurchaseHistoryReducer from '../reducers/currentUserPurchaseHistory';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =  compose;

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      filters: filtersReducer,
      auth: authReducer,
      users:usersReducer,
      admin:adminReducer,
      adminHistory:adminHistoryReducer,
      userPaymentHistory:userPaymentHistoryReducer,
      userPurchaseHistory:userPurchaseHistoryReducer,
      currentUserHistory:currentUserHistoryReducer,
      currentUserPurchaseHistory:currentUserPurchaseHistoryReducer,


    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
