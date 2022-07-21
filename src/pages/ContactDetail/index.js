import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ImgDefault} from '../../assets';
import {Header, ItemValue} from '../../components';
import {colors} from '../../utils';

const ContactDetail = ({route}) => {
  const val = route.params;

  const SetImage = () => {
    if (val.photo === '' || val.photo === 'N/A') {
      return <Image source={ImgDefault} style={styles.avatar} />;
    } else {
      return <Image source={{uri: val.photo}} style={styles.avatar} />;
    }
  };

  return (
    <View style={styles.page}>
      <Header isDetail title="Contact Detail" dataContact={val} />
      <View style={styles.content}>
        <SetImage />
        <Text style={styles.name}>
          {val.firstName} {val.lastName}
        </Text>
        <View style={styles.information}>
          <ItemValue item="Age" value={val.age} />
        </View>
      </View>
    </View>
  );
};

export default ContactDetail;

const styles = StyleSheet.create({
  page: {
    flex: 1,
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
});
