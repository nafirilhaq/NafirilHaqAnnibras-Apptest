import {View, Text, StyleSheet, Image} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils';
import {ImgLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000);
  }, []);

  return (
    <View style={styles.page}>
      <Image source={ImgLogo} style={styles.image} />
      <Text style={styles.text}>Nafiril's ContactApp</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 120,
    height: 120,
  },
  text: {
    marginTop: 30,
    fontSize: 32,
    color: colors.blue,
  },
});
