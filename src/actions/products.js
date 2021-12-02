import uuid from 'uuid';
import database from '../firebase/firebase';
import { dynamicSort } from '../components/helper/utility'

// ADD_PRODUCT
export const addProduct = (product) => ({
  type: 'ADD_PRODUCT',
  product
});

export const startAddProduct = (productData = {}) => {
  debugger
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',

      amount = 0,
      image = ''

    } = productData;
    const product = { name, amount, image };
    debugger
    //return database.ref(`users/${uid}/products`).push(product).then((ref)
    return database.ref(`products`).push(product).then((ref) => {
      dispatch(addProduct({
        id: ref.key,
        ...product
      }));
    });
  };
};

// REMOVE_PRODUCT
export const removeProduct = ({ id } = {}) => ({
  type: 'REMOVE_PRODUCT',
  id
});

export const startRemoveProduct = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`products/${id}`).remove().then(() => {
      dispatch(removeProduct({ id }));
    });
  };
};

// EDIT_PRODUCT
export const editProduct = (id, updates) => ({
  type: 'EDIT_PRODUCT',
  id,
  updates
});

export const startEditProduct = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`products/${id}`).update(updates).then(() => {
      dispatch(editProduct(id, updates));
    });
  };
};

// SET_PRODUCTS
export const setProducts = (products) => ({
  type: 'SET_PRODUCTS',
  products
});

export const startSetProducts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`products`).once('value').then((snapshot) => {
      const products = [];


      snapshot.forEach((childSnapshot) => {
        products.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      dispatch(setProducts(products.sort(dynamicSort("name"))));
    });
  };
};

