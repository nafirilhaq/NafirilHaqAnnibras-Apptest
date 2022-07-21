import Axios from 'axios';
import {API_HOST} from '../../config';

export const getContactData = () => dispatch => {
  Axios.get(`${API_HOST}/contact`)
    .then(res => {
      dispatch({type: 'SET_CONTACT', values: res.data.data});
    })
    .catch(err => {
      console.log('Failed fetch contact', err.message);
    });
};

export const saveContact = (form, navigate) => dispatch => {
  Axios.post(`${API_HOST}/contact`, form)
    .then(res => {
      console.log('save contact', res);
    })
    .catch(err => {
      console.log('not save', err.message);
    });
};
