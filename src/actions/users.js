import uuid from 'uuid';
import database from '../firebase/firebase';
import {dynamicSort} from '../components/helper/utility'

// ADD_USER
export const addUser = (user) => ({
  type: 'ADD_USER',
  user
});

export const startAddUser = (userData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      id = uid,
      name = '',

      amount = 0

    } = userData;
    const user = { id, name, amount };
    //return database.ref(`users/${uid}/products`).push(product).then((ref)
    return database.ref(`users`).push(user).then((ref) => {
      dispatch(addUser({
        id: ref.key,
        ...user
      }));
    });
  };
};


// SET_USERS
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

export const startSetUsers = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users`).once('value').then((snapshot) => {
      const users = [];


      snapshot.forEach((childSnapshot) => {
        users.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setUsers(users.sort(dynamicSort("name"))));

    });
  };
};

// EDIT_USER
export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});

export const startEditUser = (updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}`).update(updates).then(() => {
      dispatch(editUser(uid, updates));
    });
  };
};
//ADD_PAY
export const pay = (id, updates) => ({
  type: 'PAY',
  id,
  updates
});

export const startPay = (id,updates) => {
  return (dispatch, getState) => {
   return database.ref(`users/${id}`).update(updates).then(() => {
      dispatch(pay(id, updates));
    });
  };
};


// ADD_AMOUNT
export const addAmount = (id, updates) => ({
  type: 'ADD_AMOUNT',
  id,
  updates
});

export const startAddAmount = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${id}`).update(updates).then(() => {
      dispatch(addAmount(id, updates));
    });
  };
};
