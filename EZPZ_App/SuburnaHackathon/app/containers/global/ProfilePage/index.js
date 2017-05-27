import React, { Component, PropTypes } from 'react';
import { Button, Text, Platform, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import s from './styles';

export class ProfilePage extends Component {

  render() {
    return (
      <PageContainer>
        <Text> This is a page </Text>
      </PageContainer>
    );
  }
}
