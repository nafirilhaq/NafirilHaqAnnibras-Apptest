import {StyleSheet, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {IcSearch} from '../../../assets';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.gray}></TextInput>
      <Image source={IcSearch} style={styles.image} />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 40,
    height: 40,
  },
  image: {
    width: 16,
    height: 16,
    position: 'absolute',
    left: 16,
    top: 13,
    tintColor: colors.gray,
  },
  textInput: {
    backgroundColor: colors.darkgray,
    color: colors.gray,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 40,
    borderRadius: 10,
  },
});
