import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {IcBack, IcEdit, IcDelete} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, isDetail}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.goBack()}>
        <Image source={IcBack} style={styles.back} />
      </TouchableOpacity>
      {!isDetail ? (
        <Text style={styles.titleMy}>{title}</Text>
      ) : (
        <>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.buttonWrapper}>
            <Image source={IcDelete} style={styles.buttonDelete} />
            <Image source={IcEdit} style={styles.buttonEdit} />
          </View>
        </>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bggray,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  back: {
    width: 20,
    height: 20,
    tintColor: colors.white,
  },
  title: {
    fontSize: 16,
    color: colors.white,
    flex: 1,
    marginHorizontal: 10,
  },
  titleMy: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: colors.white,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  buttonDelete: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
  },
  buttonEdit: {
    width: 20,
    height: 20,
    marginHorizontal: 8,
    tintColor: colors.white,
  },
});
