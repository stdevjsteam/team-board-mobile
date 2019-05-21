import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Navigation } from 'react-native-navigation'


export default class Sport extends Component {
  static get options() {
    return {
      topBar: {
        visible: 'false',
        height: 0,
      }
    }
  }

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.topBackground}>
        </View>
        <View style={styles.content}>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  topBackground: {
    height: '30%',
    backgroundColor: '#0C77F2',
  },
  content: {
    flex: 1,
    marginTop: -100,
    marginHorizontal: 15,
  },
  backButton: {
    marginTop: 40,
    marginLeft: 16,
  }
})
