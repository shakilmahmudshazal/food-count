import database from '../firebase/firebase';



// SET_ADMIN
export const setCurrentUserPaymentHistory = (payment) => ({
  type: 'SET_CURRENT_USER_PAYMENT_HISTORY',
  payment
});

export const startSetCurrentUserPaymentHistory = (id) => {
  return (dispatch, getState) => {
    return database.ref(`userPaymentHistory/${id}`).once('value').then((snapshot) => {
      const userPaymentHistory = [];

      snapshot.forEach((childSnapshot) => {
        userPaymentHistory.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });


      dispatch(setCurrentUserPaymentHistory(userPaymentHistory));
    });
  };
};