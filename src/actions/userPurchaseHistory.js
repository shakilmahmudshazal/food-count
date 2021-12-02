import database from '../firebase/firebase';



//ADD Purchase History
export const addUserPurchaseHistory = (id, Purchase) => ({
  type: 'ADD_USER_PURCHASE_HISTORY',
  id,
  Purchase
});

export const startAddUserPurchaseHistory = (id, PurchaseData = {}) => {
  return (dispatch, getState) => {
    const {
      date = '',

      amount = 0,
      name = '',
      quantity = 0

    } = PurchaseData;
    const Purchase = {date, amount, name, quantity};
    return database.ref(`userPurchaseHistory/${id}`).push(Purchase).then((ref) => {
      dispatch(addUserPurchaseHistory({
        ...Purchase
      }));
    });
  };
};


// SET_ADMIN
export const setUserPurchaseHistory = (Purchase) => ({
  type: 'SET_USER_PURCHASE_HISTORY',
  Purchase
});

export const startSetUserPurchaseHistory = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`userPurchaseHistory`).once('value').then((snapshot) => {
      const userPurchaseHistory = [];
     

      snapshot.forEach((childSnapshot) => {
        userPurchaseHistory.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });


      dispatch(setUserPurchaseHistory(userPurchaseHistory));
    });
  };
};