import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Title, Icon } from 'native-base';
// import { Icon } from 'react-native-vector-icons/MaterialCommunityIcons'
import { Navigation } from 'react-native-navigation'

import { hideEmployeeDirectory } from 'helpers'

export default class EmployeeDirectory extends Component {
  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        visible: 'false',
        height: 0,
      }
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent icon onPress={() => hideEmployeeDirectory(this.props.componentId)}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title style={{width: 200, marginLeft: -20,}}>Employee Directory</Title>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name='search' />
            </Button>
            <Button transparent icon>
              <Icon name='filter' />
            </Button>
          </Right>
        </Header>
        <Text> EsaEsa </Text>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
