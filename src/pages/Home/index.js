import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Button, Gap, Search} from '../../components';

const Home = () => {
  return (
    <View style={styles.page}>
      <View style={styles.searchWrapper}>
        <Search />
        <Gap width={8} />
        <Button />
      </View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: colors.black,
  },
  searchWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
