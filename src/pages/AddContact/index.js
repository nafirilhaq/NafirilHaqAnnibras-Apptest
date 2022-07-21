import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, CustomForm, Form, Header} from '../../components';
import {colors} from '../../utils';
import {ImgDefault} from '../../assets';
import {useDispatch} from 'react-redux';
import {saveContact} from '../../redux/action';
import {useForm} from 'react-hook-form';

const AddContact = ({navigation}) => {
  const dispatch = useDispatch();
  const {control, handleSubmit} = useForm();

  const handleSaveContact = data => {
    dispatch(saveContact(data, navigation));
  };

  return (
    <View style={styles.page}>
      <Header title="Add a contact" />
      <View style={styles.content}>
        <Image source={ImgDefault} style={styles.avatar} />
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
          <CustomForm name="age" placeholder="Age" control={control} />
        </View>
        <View style={styles.buttonWrapper}>
          <Button onPress={handleSubmit(handleSaveContact)} />
        </View>
      </View>
    </View>
  );
};

export default AddContact;

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
