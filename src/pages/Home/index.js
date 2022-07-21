import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../utils';
import {Button, Gap, MyProfile, ProfileItem, Search} from '../../components';
import Axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {getContactData} from '../../redux/action';

const Home = () => {
  const {contact} = useSelector(state => state.contactReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactData());
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.searchWrapper}>
        <Gap width={20} />
        <Search />
        <Gap width={8} />
        <Button />
        <Gap width={20} />
      </View>
      <View style={styles.myProfileWrapper}>
        <MyProfile />
      </View>
      <View style={styles.contactWrapper}>
        {contact.map(val => {
          return (
            <ProfileItem
              key={val.id}
              image={val.photo}
              firstName={val.firstName}
              lastName={val.lastName}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.bggray,
    marginTop: -20,
    paddingTop: 20,
  },
  myProfileWrapper: {
    backgroundColor: colors.bggray,
    paddingLeft: 20,
    paddingRight: 40,
  },
  contactWrapper: {
    paddingHorizontal: 20,
  },
});
