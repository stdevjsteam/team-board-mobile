import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, ScrollView } from 'react-native'
import { Card, CardItem, Body, Icon, Button } from 'native-base'
import { Navigation } from 'react-native-navigation'


export default class SingleNews extends Component {
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
    const { item } = this.props
    return (
      <View style={styles.screen}>
        <View style={styles.topBackground}>
          <Button icon transparent style={styles.backButton} onPress={this.goBack} >
            <Icon name='arrow-back' style={{ color: '#FFFFFF' }} />
          </Button>
        </View>
        <View style={styles.content}>
          <CardItem>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              stickyHeaderIndices={[1]}
            >
              <CardItem>
                <Body>
                  <Image source={{ uri: item.picture.thumbnail }} style={{ width: 200, height: 200 }} />
                </Body>
              </CardItem>
              <View style={{ marginBottom: 15, backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: "Roboto" }}>
                  {item.name.first} {item.name.last}
                </Text>
              </View>
              <Text note>
                Lorem Ipsum is simply dummy text of the pri
                nting and typesetting industry.
                Lorem Ipsum has been the industry
                 standard dumm
                y text ever since the 1500s, wh
                en an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the l
                eap into electr
                onic typesett
                ing, remaining essentially un
                changed.
                It was popularised in t
                he 1960s with the
                 release of Letraset
                 sheets containing
                  Lorem
                 Ipsum passages, and
                  more recently with desktop publishing software like
                  Aldus PageMaker including versions of Lorem Ipsum.
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                </Text>
            </ScrollView>
          </CardItem>
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
  },
  backButton: {
    marginTop: 40,
    marginLeft: 16,
  }
})
