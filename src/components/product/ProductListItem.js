import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ProductListItem = ({ id, name, amount }) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{name}</h3>
     </div>
    <h3 className="list-item__data">৳{numeral(amount).format('0,0.00')}</h3>
  </Link>
);

export default ProductListItem;
