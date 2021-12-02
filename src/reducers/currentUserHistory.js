// users Reducer

const currentUserPaymentHistoryReducerDefaultState = [];

export default (state = currentUserPaymentHistoryReducerDefaultState, action) => {
  switch (action.type) {



    case 'SET_CURRENT_USER_PAYMENT_HISTORY':

      return action.payment;
    default:
      return state;
  }
};
