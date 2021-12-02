import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../styles/plugins/fontawesome/font-awesome.min.css';
import { startLogout } from '../../actions/auth';

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
        <h2 className="text-white h2 mb-0">Food Count</h2>
        </Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);
