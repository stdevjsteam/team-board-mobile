import React, { Component } from 'react'
import { Container, Header, Title, Left, Icon, Right, Body, Content, CardItem, Button } from 'native-base'
import { FlatList, Text, StyleSheet, View, ActivityIndicator, Image, TouchableWithoutFeedback } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { connect } from 'react-redux'
import { getNews } from 'store/actions/news'
import { showFullNews, showEmployeeDirectory } from 'helpers'

class NewsScreen extends Component {

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

  state = {
    error: null,
  }

  async componentDidMount() {
    try {
      const { getNews } = this.props;
      await getNews();
    } catch (e) {
      console.log(e, typeof e);
      this.setState({ error: e });
    }

  }

  _renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => showFullNews(item,this.props.componentId)}>
        <View style={{marginHorizontal: 15 , backgroundColor: '#FAFAFA'}}>
          <CardItem>
            <Body>
              <Image source={{ uri: item.picture.thumbnail }} style={{ height: 100, width: '100%' , flex: 1 }} />
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={{ fontWeight: 'bold', fontSize: 15, fontFamily: "Roboto" }}>
                {item.name.first} {item.name.last}
              </Text>
              <Text note>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Text>
            </Body>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    )
  }

  _keyExtractor = (item, index) => {
    return item.email;
  }


  render() {
    const { news, status } = this.props;
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent icon onPress={() => showEmployeeDirectory(this.props.componentId)}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>News</Title>
          </Body>
          <Right>
            <Button transparent icon>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: '#FAFAFA'}}>
          {status.loading
            ? (<View
              style={{
                paddingVertical: 20,
                borderTopWidth: 1,
                borderColor: "#CED0CE",
              }}
            >
              <ActivityIndicator animating size="large" />
            </View>)
            : (<FlatList
              data={news}
              renderItem={this._renderItem}
              keyExtractor={this._keyExtractor}
            />)
          }
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
  return {
    news: state.news,
    status: state.status,
  };
};

const mapDispatchToProps = {
  getNews,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsScreen);