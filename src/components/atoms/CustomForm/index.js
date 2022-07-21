import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';
import {Controller} from 'react-hook-form';

const CustomForm = ({control, name, ...rest}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {value, onChange, onBlur}}) => (
        <View style={styles.container}>
          <TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={styles.form}
            placeholderTextColor={colors.gray}
            {...rest}
          />
        </View>
      )}
    />
  );
};

export default CustomForm;

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
