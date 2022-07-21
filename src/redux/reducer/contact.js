initStateContact = {
  id: '',
  firstName: '',
  lastName: '',
  age: 1,
  photo: '',
};

export const contactReducer = (state = initStateContact, action) => {
  if (action.type === 'SET_CONTACT') {
    return {
      ...state,
      id: action.values.id,
      firstName: action.values.firstName,
      lastName: action.values.lastName,
      age: action.values.age,
      photo: action.values.photo,
    };
  }
  return state;
};
