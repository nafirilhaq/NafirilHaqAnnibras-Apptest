import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Button, Gap, MyProfile, Search} from '../../components';

const Home = () => {
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
      <Text>Home</Text>
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
});
