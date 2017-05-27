
import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { DrawerNavigator } from 'react-navigation';

export default class HeaderBar extends Component {
  constructor(props) {
    super(props);

    this.state = {  
    };
  }

  static ViewPropTypes = {  
    drawerHandler: PropTypes.function,
    left: PropTypes.object,
    body: PropTypes.string,
    right: PropTypes.object,

  };

  static defaultProps = {
    body: "Header",
  };

  render() {
    const {left, body, right} = this.props;

    return (
      <Header>
          {/*<Left>
            <Button transparent>
                <Icon name='menu' onPress={() => this.props.navigation.navigate('DrawerOpen')}/>
            </Button>
          </Left>*/}
        <Body>
          <Title>{body}</Title>
        </Body>          
      </Header>
    )
  }
}