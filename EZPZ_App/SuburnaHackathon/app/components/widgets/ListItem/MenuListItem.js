import React, { Component, PropTypes } from 'react';
import { Button, Platform, ScrollView, StyleSheet } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class MenuListItem extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons
        name="move-to-inbox"
        size={24}
        style={{ color: tintColor }}
      />
    ),
  };

  render() {
    

    return (
      <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="dryftugyihuoji"
      />
    );
  }
}
