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

export const saveContact = (form, navigation) => dispatch => {
  Axios.post(`${API_HOST}/contact`, form)
    .then(res => {
      navigation.replace('Home');
    })
    .catch(err => {
      console.log('not save', err);
    });
};

export const deleteContact = (id, navigation) => dispatch => {
  console.log('id', id);
  Axios.delete(`${API_HOST}/contact/${id}`)
    .then(res => {
      console.log('delete berhasil', res);

      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      console.log('delete gagal', err);
    });
};

export const updateContact = (id, form, navigation) => dispatch => {
  Axios.put(`${API_HOST}/contact/${id}`, form)
    .then(res => {
      console.log('Update Sukses', res);
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      console.log('update err', err);
    });
};
