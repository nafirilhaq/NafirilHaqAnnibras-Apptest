import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Button, CustomForm, Form, Header} from '../../components';
import {colors} from '../../utils';
import {ImgDefault} from '../../assets';
import {useDispatch} from 'react-redux';
import {saveContact, updateContact} from '../../redux/action';
import {useForm, Controller} from 'react-hook-form';

const UpdateContact = ({navigation, route}) => {
  const dataContact = route.params;
  const {control, handleSubmit} = useForm({
    defaultValues: {
      firstName: dataContact.firstName,
      lastName: dataContact.lastName,
      age: dataContact.age.toString(),
    },
  });

  const dispatch = useDispatch();

  const handleUpdateContact = data => {
    dispatch(updateContact(dataContact.id, data, navigation));
  };

  const SetImage = () => {
    if (dataContact.photo === '' || dataContact.photo === 'N/A') {
      return <Image source={ImgDefault} style={styles.avatar} />;
    } else {
      return <Image source={{uri: dataContact.photo}} style={styles.avatar} />;
    }
  };

  return (
    <View style={styles.page}>
      <Header title="Edit contact" />
      <View style={styles.content}>
        <SetImage />
        <View style={styles.formWrapper}>
          <CustomForm
            name="firstName"
            placeholder="First Name"
            control={control}
          />
          <CustomForm
            name="lastName"
            placeholder="Last Name"
            control={control}
          />
          <CustomForm
            name="age"
            placeholder="Age"
            keyboardType="numeric"
            control={control}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={handleSubmit(handleUpdateContact)} />
        </View>
      </View>
    </View>
  );
};

export default UpdateContact;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  formWrapper: {
    width: '100%',
    backgroundColor: colors.darkgray,
    marginTop: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  buttonWrapper: {
    marginTop: 16,
    width: '100%',
    paddingHorizontal: 100,
  },
});
