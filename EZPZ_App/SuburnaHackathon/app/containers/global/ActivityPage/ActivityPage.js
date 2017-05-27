import React, { Component, PropTypes } from 'react';
import { Button, Text, Platform, StyleSheet } from 'react-native';
import { Card, CardItem, List, ListItem, Left, Body, Icon, Right} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import s from './styles';
import {items, activities} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
// import AppointmentDetailPage from './AppointmentDetailPage'
import {ParentWrapper} from 'SuburnaHackathon/app/components/widgets/Parent'

export default class ActivityPage extends Component {

  render() {
    
    return (
      <PageContainer>     
        <ListItem itemDivider>
          <Text>Upcoming Appointments</Text>
        </ListItem>
        <List>
          {items.map((item, index) => (
            <ListItem onPress={() => this.props.navigation.navigate('AppointmentDetailPage', {details: item})} key={index} >
                <Left><Text>{item.date} | {item.event} with {item.person}</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          ))}
        </List>

        <ListItem itemDivider>
          <Text>Item Tracking</Text>
        </ListItem>

        <ListItem itemDivider>
          <Text>Activity Feed</Text>
        </ListItem>

        <List>
          {activities.map((activity, index) => (
            <ListItem key={index}>
                <Left><Text><MaterialIcons name={activity.icon} />  {activity.person} {activity.action}</Text></Left>
                <Right><Icon name="arrow-forward" /></Right>
            </ListItem>
          ))}
        </List>

      </PageContainer>
    );
  }
}


export class AppointmentDetailPage extends Component {

  render() {
    const details = getRoutingParams(this.props).details;

    return (
      <PageContainer>
        <ScrollContainer>  
          <CardItem>
            <ParentWrapper >
              <Text>Event: {details.event}</Text>
              <Text>With: {details.person}</Text>
              <Text>Date: {details.date}</Text>
              <Text>Address: {details.address}</Text>
              <Text>Details: {details.details}</Text>
              <Text><MaterialIcons name="phone"/> Tel: {details.phone}</Text>
            </ParentWrapper>
          </CardItem>
        </ScrollContainer>
      </PageContainer>
    );
  }
}
