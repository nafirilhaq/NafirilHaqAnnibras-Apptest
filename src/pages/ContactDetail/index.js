import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../../utils';
import {ImgDefault} from '../../assets';
import {Header} from '../../components';

const ContactDetail = ({route}) => {
  const val = route.params;

  const SetImage = () => {
    if (val.photo === '' || val.photo === 'N/A') {
      return <Image source={ImgDefault} style={styles.avatar} />;
    } else {
      return <Image source={{uri: val.photo}} style={styles.avatar} />;
    }
  };

  useEffect(() => {
    console.log('data', val);
  }, []);

  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.content}>
        <SetImage />
        <Text style={styles.name}>
          {val.firstName} {val.lastName}
        </Text>
        <View style={styles.information}>
          <Text style={styles.item}>Age</Text>
          <Text style={styles.value}>20</Text>
        </View>
      </View>
    </View>
  );
};

export default ContactDetail;

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
    padding: 16,
  },
  item: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 8,
  },
  value: {
    fontSize: 20,
    color: colors.white,
  },
});
