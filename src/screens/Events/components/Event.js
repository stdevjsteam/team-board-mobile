import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native'

import { showFullEvent } from 'helpers'

export default class Event extends Component {

  render() {
    const { item } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => showFullEvent(item,this.props.componentId)}>
        <View style={styles.item}>
          <View style={styles.time}>
            <Text>{item.name}</Text>
          </View>
          <View>
            <Text> {item.name} </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    backgroundColor: 'white',
    flex: 1,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
    marginTop: 17
  },
  time: {
    backgroundColor: '#0C77F2',
    width: '20%',
  }
})
