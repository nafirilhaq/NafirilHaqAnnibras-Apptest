import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ImgDefault} from '../../../assets';
import {colors} from '../../../utils';

const ProfileItem = ({image, firstName, lastName, onPress}) => {
  const SetImage = () => {
    if (image === '' || image === 'N/A') {
      return <Image source={ImgDefault} style={styles.avatar} />;
    } else {
      return <Image source={{uri: image}} style={styles.avatar} />;
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={styles.container}>
        <SetImage />
        <Text style={styles.name}>
          {firstName} {lastName}
        </Text>
      </View>
    </TouchableOpacity>
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
