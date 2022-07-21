import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcAddContact, IcSearch} from '../../assets';
import {Button, Gap, MyProfile, ProfileItem, Search} from '../../components';
import {getContactData, searchContactById} from '../../redux/action';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  const {contact} = useSelector(state => state.contactReducer);
  const [searchForm, setSearchForm] = useState('');
  const dispatch = useDispatch();

  const handleAddContact = () => {
    navigation.navigate('AddContact');
  };

  const handleSearch = () => {
    dispatch(searchContactById(searchForm));
  };

  useEffect(() => {
    dispatch(getContactData());
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.searchWrapper}>
        <Gap width={20} />
        <Search onChangeText={setSearchForm} />
        <Gap width={8} />
        <Button type="search" img={IcSearch} onPress={handleSearch} />
        <Gap width={20} />
      </View>
      <View style={styles.myProfileWrapper}>
        <MyProfile />
      </View>
      <View style={styles.contactWrapper}>
        {contact
          .sort((a, b) => {
            if (a.firstName < b.firstName) {
              return -1;
            }
            if (a.firstName > b.firstName) {
              return 1;
            }
            return 0;
          })
          .map(val => {
            return (
              <ProfileItem
                key={val.id}
                image={val.photo}
                firstName={val.firstName}
                lastName={val.lastName}
                onPress={() => navigation.navigate('ContactDetail', val)}
              />
            );
          })}
      </View>
      <TouchableOpacity
        style={styles.addContactWrapper}
        onPress={handleAddContact}>
        <Image source={IcAddContact} />
      </TouchableOpacity>
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
    paddingTop: 10,
    paddingBottom: 10,
  },
  myProfileWrapper: {
    backgroundColor: colors.bggray,
    paddingLeft: 20,
    paddingRight: 40,
  },
  contactWrapper: {
    paddingHorizontal: 20,
  },
  addContactWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
