import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const PaymentListItem = ({ id, amount, date, name, quantity }) => (


    <tbody>
        <tr>
            <td > {date}</td>
            <td> {name}</td>
            <td> {quantity}</td>
            <td> {amount}</td>
            <td> {parseInt(amount)* parseInt(quantity)}</td>
        </tr>
    </tbody>


);

export default PaymentListItem;
