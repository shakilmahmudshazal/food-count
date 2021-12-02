import uuid from 'uuid';
import database from '../firebase/firebase';
import { dynamicSort } from '../components/helper/utility'



//ADD Payment History
export const addHistory = (payment) => ({
  type: 'ADD_HISTORY',
  payment
});

export const startAdminAddHistoryAmount = (paymentData = {}) => {
  return (dispatch, getState) => {
    const {
      date = '',

      amount = 0

    } = paymentData;
    const payment = { date, amount };
    return database.ref(`adminHistory`).push(payment).then((ref) => {
      dispatch(addHistory({
        ...payment
      }));
    });
  };
};


// SET_ADMIN
export const setAdminHistory = (payment) => ({
  type: 'SET_ADMIN_HISTORY',
  payment
});

export const startSetAdminHistory = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`adminHistory`).once('value').then((snapshot) => {
      const adminHistory = [];
     

      snapshot.forEach((childSnapshot) => {
        adminHistory.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });


      dispatch(setAdminHistory(adminHistory));
    });
  };
};