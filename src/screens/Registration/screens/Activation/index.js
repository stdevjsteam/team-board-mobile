import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
import { Formik } from 'formik';
import { object } from 'yup';
import { Form } from 'native-base';
import { Navigation } from 'react-native-navigation';

import Images from './components/Images';
import { ErrorMessage } from 'components';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
import { activationCode } from 'helpers/validation';
import { goToProfileCreation } from 'helpers';

const schema = object().shape({
  activationCode,
});

export default class RegistrationScreen extends Component {

  state = {
    error: null,
  };

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.marginFromKeyboard,{
        duration: event.duration,
        toValue: 3,
      })
    ]).start();
  }

  keyboardWillHide = (event) => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.marginFromKeyboard,{
        duration: event.duration,
        toValue: 34,
      })
    ]).start();
  }

  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.marginFromKeyboard = new Animated.Value(34);
    Navigation.events().bindComponent(this);
  }

  componentDidDisappear() {
    this.setState({ error: null });
  }

  handleSubmit = async values => {
    try {
      //await checkValue(values);
      goToProfileCreation();
    } catch (e) {
      console.log('ERRORRRR',e, typeof e);
      this.setState({ error: e });
    }
  }

  render() {
    const { navigator } = this.props;

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Images />
          <Formik
            initialValues={{ activationCode: '' }}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
          >
            {props => {
              return (
                <Animated.View style={[styles.bottom, { marginBottom: this.marginFromKeyboard , paddingBottom: this.keyboardHeight }]}>
                  <Form>
                    <View style={{ marginTop: 58 }}>
                      <CustomInput
                        style={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: 14 }}
                        placeholder="Enter the activation code"
                        keyboardType="numeric"
                        onChangeText={props.handleChange('activationCode')}
                        onBlur={props.handleBlur('activationCode')}
                        value={props.values.activationCode}
                      />
                    </View>
                    <View style={{height: 20, marginBottom: 14}}>
                      <ErrorMessage name="activationCode" />
                    </View>
                  </Form>
                  <CustomButton onPress={props.handleSubmit} touched={props.touched}>
                    GO
                    </CustomButton>
                </Animated.View>
              );
            }}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  bottom: {
    borderRadius: 14,
    marginHorizontal: 7,
    marginBottom: 34,
    backgroundColor: '#FFFFFF',
  }
});