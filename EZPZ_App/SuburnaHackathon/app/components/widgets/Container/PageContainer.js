import React, { Component, PropTypes } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import layout from 'SuburnaHackathon/app/styles/layout'
export default class PageContainer extends Component {

  render() {
    return (
		<View>
			{this.props.children}
		</View>
    );
  }
}
