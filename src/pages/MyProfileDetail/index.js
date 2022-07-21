import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils';
import {ImgDefault} from '../../assets';
import {Header, ItemValue} from '../../components';

const MyProfileDetail = ({route}) => {
  const val = route.params;

  useEffect(() => {
    console.log('data', val);
  }, []);

  return (
    <View style={styles.page}>
      <Header title="My Profile" />
      <View style={styles.content}>
        <Image source={val.photo} style={styles.avatar} />
        <Text style={styles.name}>{val.name}</Text>
        <View style={styles.information}>
          <ItemValue item="Phone" value={val.phone} />
          <ItemValue item="Email" value={val.email} />
          <ItemValue item="Age" value={val.age} />
          <ItemValue item="Job" value={val.job} />
        </View>
      </View>
    </View>
  );
};

export default MyProfileDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    backgroundColor: colors.black,
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    marginBottom: 16,
    alignSelf: 'center',
  },
  name: {
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
  },
  information: {
    backgroundColor: colors.darkgray,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
});
