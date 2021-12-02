// users Reducer

const adminReducerDefaultState = [];

export default (state = adminReducerDefaultState, action) => {
  switch (action.type) {

    case 'PAY_ADMIN':
     
          return {
            ...state,
            ...action.updates
          };
       

    case 'ADD_AMOUNT_ADMIN':
      return {
        ...state,
        ...action.updates
      };
   
      case 'SET_ADMIN':

      return {
        ...state,
       ...action.admin

      };
    default:
      return state;
  }
};
