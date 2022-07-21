import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {IcRectangle, ImgBeckham} from '../../../assets';
import {colors} from '../../../utils';

const MyProfile = () => {
  const navigation = useNavigation();
  const profile = useSelector(state => state.profileReducer);

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('MyProfileDetail', profile)}>
      <View style={styles.imageWrapper}>
        <Image source={profile.photo} style={styles.imgProfile} />
      </View>
      <View style={styles.nameWrapper}>
        <Text style={styles.name}>{profile.name}</Text>
        <Text style={styles.job}>{profile.job}</Text>
      </View>
      <View>
        <Image source={IcRectangle} />
      </View>
    </TouchableOpacity>
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
