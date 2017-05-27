
import React, { Component, PropTypes } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import Tabs from 'react-native-tabs';
import { Drawer } from 'native-base';
// import { Container, Content, ListItem, Button, Icon, Title, CheckBox, Header, Drawer, Left, Body, Right } from 'native-base';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import HeaderBar from './components/widgets/HeaderBar/HeaderBar';
import FooterBar from './components/widgets/FooterBar/FooterBar';
import SideBar from './components/SideBar/SideBar';


export default class CodeSharing extends Component {
  
  state = {
    
  };

  render() {

    const { page } = this.state;

    return ( 

    <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<SideBar/>}
        open={true}
        onClose={() => this.closeDrawer()} >
      <Container>
        <HeaderBar/>                
        <Content>
          <SideBar/>
          <Text>Your main content goes here</Text>
        </Content>
        <FooterBar/>
      </Container>
    </Drawer>     
      
    )
  }

  closeDrawer = () => {
      this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };
}
