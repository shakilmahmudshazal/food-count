export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        email: action.email,
        name:action.name
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
