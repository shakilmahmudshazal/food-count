import database from '../firebase/firebase';



// SET_ADMIN
export const setCurrentUserPurchaseHistory = (purchase) => ({
  type: 'SET_CURRENT_USER_PURCHASE_HISTORY',
  purchase
});

export const startSetCurrentUserPurchaseHistory = (id) => {

  return (dispatch, getState) => {
    return database.ref(`userPurchaseHistory/${id}`).once('value').then((snapshot) => {
      const userPurchaseHistory = [];

      snapshot.forEach((childSnapshot) => {
        userPurchaseHistory.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });


      dispatch(setCurrentUserPurchaseHistory(userPurchaseHistory));
    });
  };
};