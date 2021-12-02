// users Reducer

const currentUserPurchaseHistoryReducerDefaultState = [];

export default (state = currentUserPurchaseHistoryReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER_PURCHASE_HISTORY':
      return action.purchase;
    default:
      return state;
  }
};
