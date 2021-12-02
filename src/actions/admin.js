import uuid from 'uuid';
import database from '../firebase/firebase';
import { dynamicSort } from '../components/helper/utility'


//ADD_PAY
export const payAdmin = (updates) => ({
  type: 'PAY_ADMIN',
  updates
});

export const startAdminPay = (updates) => {
  return (dispatch, getState) => {
    return database.ref(`admin/`).update(updates).then(() => {
      dispatch(payAdmin(updates));
    });
  };
};


// ADD_AMOUNT
export const addAmount = (updates) => ({
  type: 'ADD_AMOUNT_ADMIN',
  updates
});

export const startAdminAddAmount = (updates) => {
  return (dispatch, getState) => {
    return database.ref(`admin/`).update(updates).then(() => {
      dispatch(addAmount(updates));
    });
  };
};


// SET_ADMIN
export const setAdmin = (admin) => ({
  type: 'SET_ADMIN',
  admin
});

export const startSetAdmin = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`admin`).once('value').then((snapshot) => {
     

      
       
      
      dispatch(setAdmin(snapshot.val()));

    });
  };
};