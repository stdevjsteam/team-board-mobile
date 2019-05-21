import React from 'react';
import { Text } from 'react-native';

const ErrorMessageText = ({ children, style }) => (
  <Text
    style={[
      {
        marginLeft: 20,
        color: "red",
        height: 20,
      },
      style
    ]}
  >
    {children}
  </Text>
);

export default ErrorMessageText;