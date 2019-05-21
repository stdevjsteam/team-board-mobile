import * as yup from 'yup';

export const activationCode = yup
  .number()
  .typeError('Activation code must be a number')
  .required('This field is required');

export const name = yup.string().required('This field is required');
export const email = yup.string().email().required('This field is required');
export const password = yup.string().min(8).required('This field is required');