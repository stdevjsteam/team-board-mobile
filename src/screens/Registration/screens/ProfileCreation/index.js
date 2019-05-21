import React, { Component } from 'react'
import { StyleSheet, Animated, TouchableWithoutFeedback, View, Keyboard } from 'react-native'
import { Form } from 'native-base';
import { Navigation } from 'react-native-navigation';
import { object } from 'yup';
import { Formik } from 'formik';

import Images from './components/Images';
import CustomButton from '../../components/Button';
import CustomInput from '../../components/Input';
import { ErrorMessage } from 'components';
import { name, email, password } from 'helpers/validation';
import { goToNEB } from 'helpers';

const schema = object().shape({
  name,
  email,
  password
});

export default class ProfileCreationScreen extends Component {

  state = { error: null };

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
    Navigation.events().bindComponent(this);
    this.keyboardHeight = new Animated.Value(0);
    this.marginFromKeyboard = new Animated.Value(34);
    // goToNEB();
  }

  componentDidDisappear() {
    this.setState({ error: null });
  }

  handleSubmit = async values => {
    try {
      //await checkValue(values);
      console.log('values', values);
      goToNEB();
    } catch (e) {
      console.log(e, typeof e);
      this.setState({ error: e });
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.screen}>
          <Images />
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={schema}
            onSubmit={this.handleSubmit}
          >
            {props => {
              return (
                <Animated.View style={[styles.bottomView,{ marginBottom: this.marginFromKeyboard, paddingBottom: this.keyboardHeight }]}>
                  <Form>
                    <View style={{ marginBottom: 14, marginTop: 54, alignItems: 'center' }}>
                      <CustomInput
                        placeholder="Name"
                        keyboardType="default"
                        onChangeText={props.handleChange('name')}
                        onBlur={props.handleBlur('name')}
                        value={props.values.name}
                      />
                    </View>
                    <View style={{height: 20}}>
                      <ErrorMessage name="name" />
                    </View>
                    <View style={{ marginBottom: 14, alignItems: 'center' }}>
                      <CustomInput
                        placeholder="Email"
                        keyboardType="email-address"
                        onChangeText={props.handleChange('email')}
                        onBlur={props.handleBlur('email')}
                        value={props.values.email}
                      />
                    </View>
                    <View style={{height: 20}}>
                      <ErrorMessage name="email" />
                    </View>
                    <View style={{ marginBottom: 14, alignItems: 'center' }}>
                      <CustomInput
                        placeholder="Password"
                        keyboardType="default"
                        onChangeText={props.handleChange('password')}
                        onBlur={props.handleBlur('password')}
                        value={props.values.password}
                        secureTextEntry
                      />
                    </View>
                    <View style={{height: 20}}>
                      <ErrorMessage name="password" />
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
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FAFAFA',
  },
  bottomView: {
    borderRadius: 14,
    marginBottom: 34,
    marginHorizontal: 7,
    backgroundColor: '#FFFFFF',
  }
});