import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const Images = () => (
  <View style={styles.content}>
    <Image source={require('images/WELCOME.png')} style={styles.welcome} />
    <Image source={require('images/MaskGroup1.png')} style={styles.group} />
  </View>
)

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  welcome: {
    // marginTop: 82.8,
  },
  group: {
    // marginTop: 40.2,
  },
})

export default Images;