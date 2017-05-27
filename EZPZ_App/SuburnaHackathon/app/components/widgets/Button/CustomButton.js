
import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';

export default class CustomButton extends Component {
  constructor(props) {
    super(props);

    this.state = {  
    };
  }

  static propTypes = {  

  };

  static defaultProps = {

  };

  render() {

    return (
      <Button onPress={() => this.props.navigation.navigate('LoginPage')}>
          <Text > muoih</Text>
      </Button>
    )
  }
}