
import React, { Component, PropTypes } from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import Root from './routes/Root/Root';

export default class CodeSharing extends Component {
  
  state = {
    drawerOpen: true
  };

  render() {

    return ( 

      <Root/>
    )
  }
}
