import React, { Fragment } from 'react';
import { Item, Label, Input } from 'native-base';

import { ErrorMessage } from 'components';

const CustomInput = props => {
  const {
    errors,
    touched,
    values,
    setFieldValue,
    name,
    label,
    ...inputProps
  } = props;

  return (
    <Fragment>
      <Item error={!!errors[name] && touched[name]}>
        <Label>{label}</Label>
        <Input
          onChangeText={value => {
            const number = Number(value);
            const parsedValue =
              value !== String(number) || !number || Number.isNaN(number)
                ? value
                : number;

            setFieldValue(name, parsedValue);
          }}
          value={values[name] === undefined ? null : String(values[name])}
          autoCapitalize="none"
          autoCorrect={false}
          {...inputProps}
        />
      </Item>

      <ErrorMessage name={name} />
    </Fragment>
  );
};

export default CustomInput;