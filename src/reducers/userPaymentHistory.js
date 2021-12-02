// users Reducer

const userPaymentHistoryReducerDefaultState = [];

export default (state = userPaymentHistoryReducerDefaultState, action) => {
  switch (action.type) {

    
    case 'ADD_USER_PAYMENT_HISTORY':
      return [
        ...state,
        action.payment
  ];
      case 'SET_USER_PAYMENT_HISTORY':

        return action.payment;
    default:
      return state;
  }
};
