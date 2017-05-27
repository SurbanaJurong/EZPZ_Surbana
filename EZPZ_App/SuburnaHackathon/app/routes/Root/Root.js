import React, { Component, PropTypes }  from 'react';
import { StyleSheet } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { DrawerItems } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import GroupsPage from 'SuburnaHackathon/app/containers/global/GroupsPage/GroupsPage'
import CustomDrawer from 'SuburnaHackathon/app/components/DrawerMenu/CustomDrawer'

import { tabSettings } from './settings';
import {pages} from './pages'

let tabPages = {}
pages.map((page, index) => {
  (page.screen.navigationOptions = {
    tabBarLabel: page.label,
    tabBarIcon: ({ tintColor }) => (
      <MaterialIcons
        name={page.icon}
        size={24}
        style={{ color: tintColor }}
      />
    ),
  }),
  (tabPages[page.name]={
    path: page.path,
    screen: page.screen,
  })
})


const Root = TabNavigator(  
  tabPages, 
  tabSettings
);

export default Root;
