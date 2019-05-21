import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Icon,
  Title
} from 'native-base'
import { connect } from 'react-redux';

import { Agenda } from 'react-native-calendars';
import { getEvents } from 'store/actions/events';
import { showEmployeeDirectory } from 'helpers';
import Event from './components/Event';
import { Navigation } from 'react-native-navigation';


class Events extends Component {

  async componentDidMount() {
    try {
      const { getEvents } = this.props;
      await getEvents();
    } catch (e) {
      console.log("Error loading Events", e);
    }
  }

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
    const { events, status } = this.props;
    return (
      status.loading
        ? <View
          style={{
            paddingVertical: 20,
            borderTopWidth: 1,
            borderColor: "#CED0CE",
          }}
        >
          <ActivityIndicator animating size="large" />
        </View>
        : <Container>
          <Header style={{ backgroundColor: '#FFFFFF' }}>
            <Left>
              <Button icon transparent onPress={() => showEmployeeDirectory(this.props.componentId)}>
                <Icon name="menu" />
              </Button>
            </Left>
            <Body>
              <Title>
                Events
              </Title>
            </Body>
            <Right>

            </Right>
          </Header>
          <Agenda
            items={events}
            loadItemsForMonth={this.loadItems}
            renderItem={this.renderItem}
            renderEmptyDate={this.renderEmptyDate}
            rowHasChanged={this.rowHasChanged}
            pastScrollRange={5}
            futureScrollRange={5}
            theme={{}}
            markingType={'simple'}
            isDefaultViewCalendar
            // agenda container style
            style={{}}
          />
        </Container>
    );
  }

  loadItems = (day) => {
    const { events } = this.props;
    console.log(events)
    for (let i = 0; i <= 10; ++i) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = this.timeToString(time);
      if (!events[strTime]) {
        events[strTime] = [];
      }
    }
    console.log(events)
    return events;
  }

  renderItem = (item) => {
    return (
      <Event item={item} componentId={this.props.componentId} />
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}><Text>No events</Text></View>
    );
  }

  rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
}

const styles = StyleSheet.create({
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

const mapStateToProps = state => {
  return {
    events: state.events,
    status: state.status,
  }
}

mapDispatchToProps = {
  getEvents,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Events);