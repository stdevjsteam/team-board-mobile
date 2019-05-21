import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Button, Icon, Title } from 'native-base'
import { Navigation } from 'react-native-navigation'

export default class SingleEvent extends Component {
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

  goBack = () => {
    Navigation.pop(this.props.componentId, {
      options: {
        bottomTabs: {
          visible: true,
          drawBehind: true,
        }
      }
    })
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.topBackground}>
          <Button icon transparent style={styles.backButton} onPress={this.goBack} >
            <Icon name='arrow-back' style={{ color: '#FFFFFF' }} />
          </Button>
        </View>
        <View style={styles.content}>
          <Image source={require('images/MaskGroup1.png')} />
          <Title>Trip to Hanqavan</Title>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  topBackground: {
    flex: 0.3,
    backgroundColor: '#0C77F2',
  },
  content: {
    flex: 0.7,
    marginTop: -100,
    marginHorizontal: 15,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  backButton: {
    marginTop: 40,
    marginLeft: 16,
  },
})
