import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Container, Header, Left, Body, Button, Icon, Title, Right } from 'native-base';
import { Navigation } from 'react-native-navigation'

import CustomCard from './components/card';
import * as constants from 'screens/constants';
import { showFullBenefits, showEmployeeDirectory } from 'helpers';


export default class Benefits extends Component {

  state = {
    error: null,
  };

  DATA = [
    {
      path: () => require('images/MedicalInsurance.png'),
      text: 'Medical Insurance',
      goTo: () => showFullBenefits(constants.MedicalInsurance,this.props.componentId),
    },
    {
      path: () => require('images/Sport.png'),
      text: 'Sport',
      goTo: () => showFullBenefits(constants.Sport,this.props.componentId),
    },
    {
      path: () => require('images/PartnerCompanies.png'),
      text: 'Partner Companies',
      goTo: () => showFullBenefits(constants.PartnerCompanies,this.props.componentId),
    }
  ];

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
      <Container >
        <Header style={{ backgroundColor: '#FFFFFF' }}>
          <Left>
            <Button icon transparent onPress={() => showEmployeeDirectory(this.props.componentId)}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>
              Benefits
            </Title>
          </Body>
          <Right>

          </Right>
        </Header>
        <View style={styles.cards}>
          {this.DATA.map(cardInfo => (
            <CustomCard data={cardInfo} key={cardInfo.text} />
          ))}
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  cards: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    justifyContent: 'space-around',
  }
})
