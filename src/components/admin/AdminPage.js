import React from 'react';
import ProductList from '../product/ProductList';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';




const AdminPage = (props) => (
  <div>
    <div className="page-header__actions">
      <Link className="button" to="/create">Add Product</Link>
      <Link className="button" to="/manageWallet">Manage Wallet</Link>
      <Link className="button" to="/manageAdminWallet">Admin Wallet</Link>
    </div>
    <ProductList />
    <div className="content-container">
      <Button type={"danger"} onClick={() => { props.history.goBack(); }}><Icon type="left" />Back</Button>
    </div>

  </div>
);

export default AdminPage;