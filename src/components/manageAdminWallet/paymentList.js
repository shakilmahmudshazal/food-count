import React from 'react';
import { connect } from 'react-redux';
import PaymentListItem from './paymentListItem';
import { Link } from 'react-router-dom';

export const PaymentList = (props) => (
  <div className="content-container">
    <div className="list-item" >

      <h5 className="list-item__data"> Date</h5>
      <h5 className="list-item__data">Amount</h5>



    </div>

    <div className="list-body scrollable">
      {

        props.adminHistory.length === 0 ? (
          <div className="list-item-user list-item--message">
            <span>No History</span>
          </div>
        ) : (
            props.adminHistory.map((user) => {
              return <PaymentListItem key={user.id} {...user} />;
            })
          )
      }
    </div>
    <button className="button-red" onClick={() => { props.history.goBack(); }}>Back</button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    adminHistory: state.adminHistory,
    // name:state
  };
};

export default connect(mapStateToProps)(PaymentList);
