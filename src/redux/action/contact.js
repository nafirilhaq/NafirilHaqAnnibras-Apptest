import Axios from 'axios';
import {API_HOST} from '../../config';
import {toast} from '../../utils';

export const getContactData = () => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.get(`${API_HOST}/contact`)
    .then(res => {
      dispatch({type: 'SET_LOADING', value: false});
      dispatch({type: 'SET_CONTACT', values: res.data.data});
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      console.log('Failed fetch contact', err.message);
    });
};

export const saveContact = (form, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.post(`${API_HOST}/contact`, form)
    .then(res => {
      navigation.replace('Home');
      dispatch({type: 'SET_LOADING', value: false});
      toast('Contact saved', 'sukses');
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      toast(err?.response?.data?.message);
    });
};

export const deleteContact = (id, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.delete(`${API_HOST}/contact/${id}`)
    .then(res => {
      toast('Contact deleted', 'sukses');
      dispatch({type: 'SET_LOADING', value: false});
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      toast(err?.response?.data?.message);
    });
};

export const updateContact = (id, form, navigation) => dispatch => {
  dispatch({type: 'SET_LOADING', value: true});
  Axios.put(`${API_HOST}/contact/${id}`, form)
    .then(res => {
      toast('Contact updated', 'sukses');
      dispatch({type: 'SET_LOADING', value: false});
      navigation.reset({index: 0, routes: [{name: 'Home'}]});
    })
    .catch(err => {
      dispatch({type: 'SET_LOADING', value: false});
      console.log('update err', err);
    });
};

export const searchContactById = search => dispatch => {
  Axios.get(`${API_HOST}/contact/${search}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log('gaada', err);
    });
};
