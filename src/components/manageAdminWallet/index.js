import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export class AddUserPage extends React.Component {
  onSubmit = (user) => {
    
    this.props.startEditUser(user);
    this.props.startSetUsers();
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Profile</h1>
          </div>
        </div>


        <div className="list-item-wallet">
          <h2 className="list-item__data">Payment : ৳{numeral(this.props.admin.cash).format('0,0.00')}</h2>
          <h2 className="list-item__data">Withdrawal: ৳{numeral(this.props.admin.paid).format('0,0.00')}</h2>
          <h2 className="list-item__data">Cash: ৳{numeral(this.props.admin.cash - (this.props.admin.paid ? this.props.admin.paid : 0)).format('0,0.00')}</h2>
        </div>
        <div>
          <Link className="button" to="/payAdminWallet">Withdraw</Link>
          <Link className="button" to="/adminCashOutHistory">Withdrawal History</Link>
          <button className="button-red" onClick={()=>{this.props.history.goBack();}}>Back</button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  //  existingUser: state.users.find((user) => user.id === props.match.params.id)
  admin: state.admin
});

const mapDispatchToProps = (dispatch) => ({


});

export default connect(mapStateToProps, mapDispatchToProps)(AddUserPage);