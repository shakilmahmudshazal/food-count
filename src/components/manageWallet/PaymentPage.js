import React from 'react';
import { connect } from 'react-redux';
import PayForm from './PayForm';
import { startAdminAddAmount } from '../../actions/admin';
import { startPay } from '../../actions/users';
import {normalDate} from '../helper/utility'
import { Link } from 'react-router-dom';
import { startAddUserPaymentHistory,startSetUserPaymentHistory } from '../../actions/userPaymentHistory';
import { message } from 'antd';


export class PaymentPage extends React.Component {
  onSubmit = (user, paid) => {
    let today = new Date;

    this.props.startPay(this.props.user.id, user);
    this.props.startAdminAddAmount({ cash: parseInt(this.props.admin.cash ? this.props.admin.cash : 0) + parseInt(paid) })
    this.props.startAddUserPaymentHistory(this.props.user.id,{date: normalDate(today), amount:paid })
    this.props.startSetUserPaymentHistory();
    message.success("Payment successful");
    this.props.history.push('/manageWallet');
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Payment Page </h1>
          </div>
        </div>
        <div className="content-container">
          <PayForm
            user={this.props.user}
            onSubmit={this.onSubmit}
          />
           <Link className="button "  to={`/userPaymentHistory/${this.props.user.id}`} >Payment History</Link>
           <Link className="button "  to={`/userPurchaseHistory/${this.props.user.id}`} >Purchase History</Link>

          
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state, props) => ({
  user: state.users.find((user) => user.id === props.match.params.id),
  admin: state.admin
});

// const mapDispatchToProps = (dispatch, props) => ({
//     startPay: (id, user) => dispatch(startPay(id, user)),
//     startAdminAddAmount:(updates)=>dispatch(startAdminAddAmount(updates))
// });

export default connect(mapStateToProps, { startPay, startAdminAddAmount, startAddUserPaymentHistory ,startSetUserPaymentHistory})(PaymentPage);
