import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const Form = ({...rest}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        placeholderTextColor={colors.gray}
        {...rest}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  form: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 8,
  },
});
