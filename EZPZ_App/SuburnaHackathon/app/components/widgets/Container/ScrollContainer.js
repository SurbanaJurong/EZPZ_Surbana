import React, { Component, PropTypes } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import layout from 'SuburnaHackathon/app/styles/layout'
export default class PageContainer extends Component {



  static propTypes = {  
    containerStyle: PropTypes.object,
  };

  static defaultProps = {
  	containerStyle: {},
  };


  render() {
  	const {containerStyle} = this.props

    return (
      <ScrollView style={[layout.screenHeightCropView, containerStyle]}>
        {this.props.children}
      </ScrollView>
    );
  }
}
