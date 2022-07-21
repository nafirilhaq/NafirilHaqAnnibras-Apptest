initStateContact = {
  contact: [],
};

export const contactReducer = (state = initStateContact, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      contact: action.values,
    };
  }
  return state;
};
