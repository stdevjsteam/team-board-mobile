import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { Icon, Button, Card } from 'native-base';


export default class MedicalInsurance extends Component {
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
    Navigation.pop(this.props.componentId)
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.topBackground}>
          <Button icon transparent style={styles.backButton} onPress={this.goBack} >
            <Icon name='arrow-back' style={{ color: '#FFFFFF' }} />
          </Button>
          <Image source={require('images/MedicalInsurance.png')}  style={styles.image}/>
        </View>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text>
                Medical Coverage
              </Text>
            </View>
            <View style={styles.cardBody}>

            </View>
            <View style={styles.cardFooter}>

            </View>
          </View>
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
    flex: 0.3,
    backgroundColor: '#0C77F2',
  },
  content: {
    flex: 0.7,
    backgroundColor: '#FAFAFA',
  },
  backButton: {
    marginTop: 40,
    marginLeft: 16,
  },
  image: {
    alignSelf: 'center'
  },
  card: {
    flex: 1,
    margin: 15,
    // marginBottom: 40,
    backgroundColor: '#FFFFFF',
  },
  cardHeader: {
    flex: 0.2,
  },
  cardBody: {
    flex: 0.3,
    backgroundColor: '#F6F6F6',
  },
  cardFooter: {
    flex: 0.5,
  }
})
