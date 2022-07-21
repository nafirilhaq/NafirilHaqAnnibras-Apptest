initStateContact = {
  contact: [],
  searchContact: {},
};

export const contactReducer = (state = initStateContact, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      contact: action.values,
    };
  }
  if (action.type === 'SET_SEARCH') {
    return {
      ...state,
      searchContact: action.values,
    };
  }
  if (action.type === 'RESET_SEARCH') {
    return state;
  }
  return state;
};
