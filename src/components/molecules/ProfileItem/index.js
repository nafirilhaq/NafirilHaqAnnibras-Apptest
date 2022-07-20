import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImgBeckham} from '../../../assets';
import {colors} from '../../../utils';

const ProfileItem = ({image, firstName, lastName}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.avatar} />
      <Text style={styles.name}>
        {firstName} {lastName}
      </Text>
    </View>
  );
};

export default ProfileItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 65,
    alignItems: 'center',
    borderBottomWidth: 1.3,
    borderColor: colors.white,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    resizeMode: 'cover',
    marginRight: 18,
  },
  name: {
    fontSize: 18,
    color: colors.white,
  },
});
