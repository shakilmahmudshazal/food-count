import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ProductDashboardPage from '../components/general/ProductDashboardPage';
import AddProductPage from '../components/product/AddProductPage';
import AddUserPage from '../components/user/AddUserPage';
import EditProductPage from '../components/product/EditProductPage';
import NotFoundPage from '../components/general/NotFoundPage';
import LoginPage from '../components/general/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AdminPage from '../components/admin/AdminPage'
import UserPage from '../components/user/UserPage'
import UserList from '../components/manageWallet/UserList'
import PaymentPage from '../components/manageWallet/PaymentPage'
import manageAdminWallet from '../components/manageAdminWallet'
import AdminPaymentPage from '../components/manageAdminWallet/paymentPage'
import CashOutList from '../components/manageAdminWallet/paymentList'
import UserPaymentList  from '../components/userPayment/userPaymentList'
import UserPurchaseList  from '../components/userPurchase/userPurchaseList'



export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/admin" component={AdminPage} />
        <PrivateRoute path="/dashboard" component={ProductDashboardPage} />
        <PrivateRoute path="/user" component={UserPage} />
        <PrivateRoute path="/create" component={AddProductPage} />
        <PrivateRoute path="/addUser" component={AddUserPage} />
        <PrivateRoute path="/manageWallet" component={UserList} />
        <PrivateRoute path="/manageAdminWallet" component={manageAdminWallet} />
        <PrivateRoute path="/payAdminWallet" component={AdminPaymentPage} />
        <PrivateRoute path="/adminCashOutHistory" component={CashOutList} />
        


        <PrivateRoute path="/userPaymentHistory/:id" component={UserPaymentList} />
        <PrivateRoute path="/userPurchaseHistory/:id" component={UserPurchaseList} />
        <PrivateRoute path="/pay/:id" component={PaymentPage} />
        <PrivateRoute path="/edit/:id" component={EditProductPage} />
    {/*  <PrivateRoute path="/addAmount/:id" component={EditProductPage} /> */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
