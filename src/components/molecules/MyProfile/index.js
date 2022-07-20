import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ImgBeckham, IcRectangle, ImgProfile} from '../../../assets';
import {colors} from '../../../utils';

const MyProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image source={ImgBeckham} style={styles.imgProfile} />
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>Nafiril Haq Annibras</Text>
        <Text style={styles.job}>Software Engineer</Text>
      </View>
      <View>
        <Image source={IcRectangle} />
      </View>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    height: 150,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgProfile: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    resizeMode: 'contain',
  },
  nameWrapper: {
    marginLeft: 15,
    flex: 1,
  },
  name: {
    fontSize: 20,
    color: colors.white,
    marginBottom: 4,
  },
  job: {
    fontSize: 13,
    color: colors.gray,
  },
});
