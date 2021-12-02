import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const PaymentListItem = ({ id, amount, date }) => (
  <div className="list-item" >
    <h5 className="list-item__data"> {date}</h5>
    <h5 className="list-item__data">৳{numeral(amount).format('0,0.00')}</h5>

  </div>
);

export default PaymentListItem;
