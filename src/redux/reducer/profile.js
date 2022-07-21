import {ImgMyAvatar} from '../../assets';

const initStateProfile = {
  name: 'Nafiril Haq Annibras',
  job: 'Software Engineer',
  age: '27',
  phone: '0822 4080 5040',
  email: 'nafirilhaq@gmail.com',
  photo: ImgMyAvatar,
};

export const profileReducer = (state = initStateProfile, action) => {
  if (action.type === 'SET_PROFILE') {
    return {
      ...state,
      name: action.values.name,
      job: action.values.job,
      age: action.values.age,
      phone: action.values.phone,
      email: action.values.email,
    };
  }
  return state;
};
