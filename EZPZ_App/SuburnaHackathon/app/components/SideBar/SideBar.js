
import React, { Component, PropTypes } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Thumbnail, Container, Footer, FooterTab, Left, Right, Body, Icon } from 'native-base';
import { List, ListItem, Switch } from 'native-base';
import sidebarStyle from './styles';
import MenuListItem from '../widgets/ListItem/MenuListItem'

class SideBar extends Component {
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
      <View style={sidebarStyle.mainContainer}>
        <Container >
          <Thumbnail size={150} style={{backgroundColor:"black"}} source={require('./johnPassportPhoto.png')}/>
          <Text style={{backgroundColor:"green"}}>This is a side bar</Text>
          
          <MenuListItem>Link 1</MenuListItem>
          <MenuListItem>Link 2</MenuListItem>
          <MenuListItem>Link 3</MenuListItem>
          <MenuListItem>Link 4</MenuListItem>
        </Container>
      </View>
      
    )
  }
}

export default SideBar;