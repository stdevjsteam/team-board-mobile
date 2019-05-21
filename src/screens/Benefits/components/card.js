import React from 'react';
import { StyleSheet, Image, Text, TouchableWithoutFeedback, View } from 'react-native';

const CustomCard = ({ data, ...props }) => {
  return (
    <TouchableWithoutFeedback onPress={() => data.goTo()}>
      <View style={styles.container}>
        <Image source={data.path()} style={{marginVertical: 'auto'}} />
        <Text>
          {data.text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 129,
    flexDirection: 'row',
    marginHorizontal: 16,
    borderRightWidth: 5,
    backgroundColor: '#FFFFFF',
    borderRightColor: '#0C77F2',
  },
});

export default CustomCard;