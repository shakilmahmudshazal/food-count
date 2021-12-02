// users Reducer

const userPurchaseHistoryReducerDefaultState = [];

export default (state = userPurchaseHistoryReducerDefaultState, action) => {
  switch (action.type) {

    
    case 'ADD_USER_PURCHASE_HISTORY':
      return [
        ...state,
        action.purchase
  ];
      case 'SET_USER_PURCHASE_HISTORY':

        return action.purchase;
    default:
      return state;
  }
};
