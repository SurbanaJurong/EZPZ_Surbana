import React, { Component, PropTypes }  from 'react';
import { Text, View, Image, Button, Platform, ScrollView, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class CustomDrawer extends Component {
  render() {
    const {...rest} = this.props;
    return (
      <View>
        <Text>This is the custom drawer component</Text>
        <Text>Feel free to customize here</Text>
        <DrawerItems {...rest} />
      </View>
    )
  }
}
