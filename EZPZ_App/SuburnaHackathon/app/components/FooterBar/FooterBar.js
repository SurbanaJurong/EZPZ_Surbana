
import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

class FooterBar extends Component {
  constructor(props) {
    super(props);

    this.state = {  
    };
  }

  // static propTypes = {  
  //   left: PropTypes.object,
  //   body: PropTypes.object,
  //   right: PropTypes.object,
  // };
  // static defaultProps = {

  // };

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button full>
              <Text onClick = {this.openDrawer.bind(this)}>Footer</Text>
          </Button>
        </FooterTab>
      </Footer>
    )
  }
}

export default FooterBar;