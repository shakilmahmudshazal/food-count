import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const UserListItem = ({ id, name, amount, paid }) => (
  <Link className="list-item-user" to={`/pay/${id}`}>
    <div>
      <h3 className="list-item-user__title">{name}</h3>
     </div>
    <h5 className="list-item-user__data">Total Cost: ৳{numeral(amount).format('0,0.00')}</h5>
    <h5 className="list-item-user__data">Total Paid: ৳{numeral(paid).format('0,0.00')}</h5>
    <h5 className="list-item-user__data">Total Due: ৳{numeral(amount-(paid?paid:0)).format('0,0.00')}</h5>
  </Link>
);

export default UserListItem;
