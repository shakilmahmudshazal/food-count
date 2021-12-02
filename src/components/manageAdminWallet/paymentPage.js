import React from 'react';
import { connect } from 'react-redux';
import PayForm from './PayForm';
import {  startAdminPay } from '../../actions/admin';
import { startAdminAddHistoryAmount,startSetAdminHistory } from '../../actions/adminHistory';
import {normalDate} from '../helper/utility';
import {message} from 'antd'


export class PaymentPage extends React.Component {
  onSubmit = (payment, amount) => {
    let today = new Date;
    this.props.startAdminAddHistoryAmount({ date: normalDate(today), amount });
    this.props.startAdminPay(payment);
    this.props.startSetAdminHistory();
    message.success("Withdrawn Successful")
    this.props.history.push('/manageAdminWallet');
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
            admin={this.props.admin}
            onSubmit={this.onSubmit}
          />

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
//     startAdminAddHistoryAmount:(date,)
// });

export default connect(mapStateToProps, { startAdminAddHistoryAmount, startAdminPay ,startSetAdminHistory})(PaymentPage);
