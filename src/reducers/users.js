// users Reducer

const usersReducerDefaultState = [];

export default (state = usersReducerDefaultState, action) => {
  switch (action.type) {
   
    case 'ADD_USER':
      return [
        ...state,
        action.user
      ];
      case 'EDIT_USER':
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        };
      });
      case 'PAY':
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        };
      });
    case 'SET_USERS':
      return action.users;
    case 'ADD_AMOUNT':
      return state.map((user) => {
        if (user.id === action.id) {
          return {
            ...user,
            ...action.updates
          };
        } else {
          return user;
        };
      });
    default:
      return state;
  }
};
