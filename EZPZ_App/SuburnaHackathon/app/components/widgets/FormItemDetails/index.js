import React, { Component, PropTypes } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { List, ListItem, Left, Body, Icon, Right} from 'native-base'

export default class FormItemDetails extends Component {

  static propTypes = {  
    icon:PropTypes.string,
    text: PropTypes.string,
    controlDesc: PropTypes.string,
    controls: PropTypes.object,
  };

  static defaultProps = {

  };


  render() {    
    const {icon, text, controlDesc, controls} = this.props

    return (
      <View>     
        <ListItem icon>
          <Left>
              <Icon name={icon} />
          </Left>
          <Body>
            <Text>{text}</Text>
          </Body>
          <Right>
            <Text>{controlDesc}</Text>
            {controls}
          </Right>
        </ListItem>

      </View>
    );
  }

}