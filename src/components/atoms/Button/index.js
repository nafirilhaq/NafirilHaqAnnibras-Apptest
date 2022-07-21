import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IcSearch} from '../../../assets';
import {colors} from '../../../utils';

const Button = ({onPress, type}) => {
  if (type === 'search') {
    return (
      <TouchableOpacity style={styles.containerSearch} onPress={onPress}>
        <Image source={IcSearch} style={styles.image} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>Save</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  containerSearch: {
    width: 40,
    height: 40,
    paddingVertical: 8,
    backgroundColor: colors.darkgray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#635EF0',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 16,
    height: 16,
    tintColor: colors.white,
  },
  text: {
    fontSize: 16,
    color: colors.white,
  },
});
