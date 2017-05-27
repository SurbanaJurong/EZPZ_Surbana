import React, { Component, ViewPropTypes } from 'react';
import { ScrollView, View, Button, Text, Platform, StyleSheet } from 'react-native';
import {Card, CardItem, Body} from 'native-base'
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import SearchBar from 'SuburnaHackathon/app/components/widgets/SearchBar/SearchBar'
import CardImage from 'SuburnaHackathon/app/components/widgets/Cards/CardImage'
import CardDetailsBar from 'SuburnaHackathon/app/components/widgets/Cards/CardDetailsBar'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ParentWrapper} from 'SuburnaHackathon/app/components/widgets/Parent'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
import s from './styles';
import layout from 'SuburnaHackathon/app/styles/layout'
import EStyleSheet from 'react-native-extended-stylesheet';

export default class AppointmentDetailPage extends Component {

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
