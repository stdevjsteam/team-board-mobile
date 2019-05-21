import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Images = () => (
  <View style={styles.content}>
    <Image source={require('images/Start.png')} style={styles.start} />
    <Image source={require('images/Note.png')} style={styles.note} />
  </View>
)

const styles = StyleSheet.create({
  content: {
    flex: 1,
    // alignContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  start: {
    // marginTop: 58.8,
  },
  note: {
    // marginTop: 31.3,
  }
})

export default Images;