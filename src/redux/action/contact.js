import Axios from 'axios';
import {API_HOST} from '../../config';

export const getContactData = () => dispatch => {
  Axios.get(`${API_HOST}/contact`)
    .then(res => {
      dispatch({type: 'SET_CONTACT', values: res.data.data});
      console.log(res.data.data);
    })
    .catch(err => {
      console.log('Failed fetch contact', err.message);
    });
};
