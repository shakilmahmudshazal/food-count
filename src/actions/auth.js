import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid , email=firebase.auth().currentUser.email , name=firebase.auth().currentUser.displayName) => ({
  type: 'LOGIN',
  uid,
  email,
  name
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
