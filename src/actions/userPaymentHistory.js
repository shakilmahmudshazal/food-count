import database from '../firebase/firebase';



//ADD Payment History
export const addUserPaymentHistory = (payment) => ({
  type: 'ADD_USER_PAYMENT_HISTORY',
  payment
});

export const startAddUserPaymentHistory = (id, paymentData = {}) => {
  return (dispatch, getState) => {
    const {
      date = '',

      amount = 0

    } = paymentData;
    const payment = { date, amount };
    return database.ref(`userPaymentHistory/${id}`).push(payment).then((ref) => {
      dispatch(addUserPaymentHistory({
        ...payment
      }));
    });
  };
};


// SET_ADMIN
export const setUserPaymentHistory = (payment) => ({
  type: 'SET_USER_PAYMENT_HISTORY',
  payment
});

export const startSetUserPaymentHistory = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`userPaymentHistory`).once('value').then((snapshot) => {
      const userPaymentHistory = [];
     

      snapshot.forEach((childSnapshot) => {
        userPaymentHistory.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });


      dispatch(setUserPaymentHistory(userPaymentHistory));
    });
  };
};