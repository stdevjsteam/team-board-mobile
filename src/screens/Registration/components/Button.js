import React from 'react';
import { Button } from 'native-base';
import { StyleSheet, Text } from 'react-native';

const CustomButton = ({ touched, children, ...props }) => {
  return (
    <Button block style={styles.button} {...props}>
      <Text style={styles.text}>{children}</Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

export default CustomButton;