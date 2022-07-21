import React, {useEffect} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IcAddContact} from '../../assets';
import {Button, Gap, MyProfile, ProfileItem, Search} from '../../components';
import {getContactData} from '../../redux/action';
import {colors} from '../../utils';

const Home = ({navigation}) => {
  const {contact} = useSelector(state => state.contactReducer);

  const dispatch = useDispatch();

  const handleAddContact = () => {
    navigation.navigate('AddContact');
  };

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
  addContactWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
