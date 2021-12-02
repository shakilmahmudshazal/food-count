import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import PurchaseListItem from './userPurchaseListItem';
import { startSetCurrentUserPurchaseHistory } from '../../actions/currentUserPurchaseHistory';
import { Link } from 'react-router-dom';
import {Table} from 'antd';

export const PurchaseList = (props) => {
  useEffect(() => {
    if (props.match.params.id) {
      props.startSetCurrentUserPurchaseHistory(props.match.params.id)
    }
  }, [props, props.match.params.id]);
  
  const columns=[
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Amount',
      key:data=>'data.amount' + data.quantity,
      render:data=>data.amount * data.quantity
    },
  ]

  const pagination={
    defaultPageSize:5
  }

  return (
    <div className="content-container">
      <div className="list-item" >

        <h5 className="list-item__data"> Purchase List: {props.user.name} </h5>



      </div>
      <Table className="table" dataSource={props.currentUserPurchaseHistory && props.currentUserPurchaseHistory.reverse()} columns={columns} pagination={pagination} />

      {/* 

        props.currentUserPurchaseHistory.length === 0 ? (
          <div className="list-item-user list-item--message">
            <span>No History</span>
          </div>
        ) : (
            <div className="scrollable">
              <table className="table" border='1' >
                <thead >
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Rate</th>
                    <th>Total</th>
                  </tr>
                </thead>

                {props.currentUserPurchaseHistory.map((user) => {
                  return <PurchaseListItem key={user.id} {...user} />;
                })}
              </table>
            </div>

          )
       */}
      <button className="button-red" onClick={() => { props.history.goBack(); }}>Back</button>


    </div>
  );
}
const mapStateToProps = (state, props) => {
  return {
    user: state.users.find((user) => user.id === props.match.params.id),
    currentUserPurchaseHistory: state.currentUserPurchaseHistory,
    id: props.match.params.id
  };
};

export default connect(mapStateToProps, { startSetCurrentUserPurchaseHistory })(PurchaseList);
