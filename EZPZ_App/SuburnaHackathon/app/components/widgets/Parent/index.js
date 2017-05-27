import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Button, Text, Platform, StyleSheet } from 'react-native';
import {Body} from 'native-base'
/* ==== USAGE ====

To override the default themes, the user must write inline styles in the following format: 
<List parentStyle={{}} liStyle={{listStyleType:'disc', color:'#64badd'}} textStyle={{color:'black'}}>

*/

export default class ParentWrapper extends Component {

  static propTypes = {
    childrenStyle: PropTypes.object,
  };

  static defaultProps = {
    childrenStyle: {},
  };

  render() {

    const childrenWithProps = React.Children.map(this.props.children,
      (child) => {
        return React.cloneElement(child, {
          style: this.props.childrenStyle,
        })
      }
    );

    return (
        <View>
          {childrenWithProps}
        </View>
        
    );
  }
}