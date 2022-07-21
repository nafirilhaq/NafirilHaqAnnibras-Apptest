import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Form, Header} from '../../components';
import {colors} from '../../utils';
import {ImgDefault} from '../../assets';
import useForm from '../../utils/useForm';
import {useDispatch} from 'react-redux';
import {saveContact} from '../../redux/action';

const AddContact = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    firstName: '',
    lastName: '',
    age: 0,
  });

  const handleSaveContact = () => {
    dispatch(saveContact(form));
  };

  return (
    <View style={styles.page}>
      <Header title="Add a contact" />
      <View style={styles.content}>
        <Image source={ImgDefault} style={styles.avatar} />
        <View style={styles.formWrapper}>
          <Form
            placeholder="First Name"
            value={form.firstName}
            onChangeText={e => setForm('firstName', e)}
          />
          <Form
            placeholder="Last Name"
            value={form.lastName}
            onChangeText={e => setForm('lastName', e)}
          />
          <Form
            placeholder="Age"
            value={form.age}
            onChangeText={e => setForm('age', e)}
          />
        </View>
        <View>
          <Button onPress={handleSaveContact} />
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
});
