// users Reducer

const adminHistoryReducerDefaultState = [];

export default (state = adminHistoryReducerDefaultState, action) => {
  switch (action.type) {

    
    case 'ADD_HISTORY':
      let payment=action.payment;
      return [
        ...state,
        action.payment
  ];
      case 'SET_ADMIN_HISTORY':

        return action.payment;
    default:
      return state;
  }
};
