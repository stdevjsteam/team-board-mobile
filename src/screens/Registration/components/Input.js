import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input } from 'native-base';

const CustomInput = ({ ...props }) => {

  return (
    <Item style={styles.item}>
      <Input
        style={styles.input}
        autoCapitalize="none"
        placeholderTextColor='grey'
        {...props}
      />
    </Item>
  );
};

const styles = StyleSheet.create({
  item: {
    height: 27,
    width: 272,
  },
  input: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
});

export default CustomInput;