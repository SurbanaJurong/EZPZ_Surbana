import React, { Component, PropTypes }  from 'react';

import { StackNavigator, TabNavigator } from 'react-navigation';
import {BrowsePage, ManyItemsPage, SingleItemPage} from 'SuburnaHackathon/app/containers/global/BrowsePage'
import {ActivityPage, AppointmentDetailPage} from 'SuburnaHackathon/app/containers/global/ActivityPage'
// import AppointmentDetailPage from 'SuburnaHackathon/app/containers/global/ActivityPage/AppointmentDetailPage'
import {ProfilePage} from 'SuburnaHackathon/app/containers/global/ProfilePage'
import {SellPage} from 'SuburnaHackathon/app/containers/global/SellPage'
import {RequestsPage} from 'SuburnaHackathon/app/containers/global/RequestsPage'

export const BrowseStack = StackNavigator({
  Browse: {
    screen: BrowsePage,
    path: '/',
    navigationOptions: {
      title: 'Browse',
    },
  },
  ManyItemsPage: {
    screen: ManyItemsPage,
    navigationOptions: {
      title: 'Many items',
    },
  },
  SingleItemPage: {
    screen: SingleItemPage,
    navigationOptions: {
      title: 'Single item',
    },
  },

});


export const ActivityStack = StackNavigator({
  ActivityPage: {
    screen: ActivityPage,
    path: '/',
    navigationOptions: {
      title: 'My Activities',
    },
  },
  AppointmentDetailPage: {
    screen: AppointmentDetailPage,
    // path: '/details',
    navigationOptions: {
      title: 'Browse',
    },
  },
});

export const SellStack = StackNavigator({
  SellPage: {
    screen: SellPage,
    path: '/',
    navigationOptions: {
      title: 'Sell Goods and Services',
    },
  },
  ManyItemsPage: {
    screen: ManyItemsPage,
    navigationOptions: {
      title: 'Many items',
    },
  },
  SingleItemPage: {
    screen: SingleItemPage,
    navigationOptions: {
      title: 'Single item',
    },
  },

});

export const RequestsStack = StackNavigator({
  RequestsPage: {
    screen: RequestsPage,
    path: '/',
    navigationOptions: {
      title: 'My Requests',
    },
  },
  ManyItemsPage: {
    screen: ManyItemsPage,
    navigationOptions: {
      title: 'Many items',
    },
  },
  SingleItemPage: {
    screen: SingleItemPage,
    navigationOptions: {
      title: 'Single item',
    },
  },

});

export const ProfileStack = StackNavigator({
  ProfilePage: {
    screen: ProfilePage,
    path: '/',
    navigationOptions: {
      title: 'My Profile',
    },
  },
  ManyItemsPage: {
    screen: ManyItemsPage,
    navigationOptions: {
      title: 'Many items',
    },
  },
  SingleItemPage: {
    screen: SingleItemPage,
    navigationOptions: {
      title: 'Single item',
    },
  },

});