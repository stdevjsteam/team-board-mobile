import React from 'react';
import { ErrorMessage } from 'formik';
import ErrorMessageText from './ErrorMessageText';

const CustomErrorMessage = ({ name, style }) => (
  <ErrorMessage
    name={name}
    render={msg => <ErrorMessageText style={style}>{msg}</ErrorMessageText>}
  />
);

export default CustomErrorMessage;