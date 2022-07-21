import {StyleSheet, TextInput, View, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {IcSearch} from '../../../assets';

const Search = ({onChangeText, value}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor={colors.gray}
        onChangeText={onChangeText}
        value={value}
      />
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
  textInput: {
    backgroundColor: colors.darkgray,
    color: colors.gray,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 16,
    borderRadius: 10,
  },
});
