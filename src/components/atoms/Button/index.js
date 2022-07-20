import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {IcPlus} from '../../../assets';

const Button = () => {
  return (
    <View style={styles.container}>
      <Image source={IcPlus} style={styles.image} />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    paddingVertical: 8,
    backgroundColor: colors.darkgray,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 16,
    height: 16,
    tintColor: colors.white,
  },
});
