import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const ItemValue = ({item, value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>{item}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ItemValue;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    paddingVertical: 10,
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
