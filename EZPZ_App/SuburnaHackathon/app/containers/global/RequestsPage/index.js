import React, { Component, PropTypes } from 'react';
import { TextInput, Text, Button, Platform, StyleSheet } from 'react-native';
import { Form, Item, Input, Picker } from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import MyPicker from 'SuburnaHackathon/app/components/widgets/MyPicker'
import s from './styles';

export class RequestsPage extends Component {

  render() {


  	const requests = [{
  		name: "Goods",
  	}, {
  		name: "Services"
  	}]

  	

    return (
      <PageContainer>
        <Text> This is a page </Text>
        

        <Picker
            supportedOrientations={['portrait','landscape']}
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={"Goods"}
            onValueChange={this.onValueChange}>
            {requests.map((item, index)=>(
                <Item key={index} label={item.name} value={"Goods"} />
            ))}
        </Picker>

        <TextInput
          {...this.props} 
          // ref={(x) => {this.price = x}}
          // value={this.state.price}
          onChangeText={(price) => this.setState({price})}
          style={{height: 40, padding: 10, fontSize: 15, width:150,  borderWidth:1}}
          placeholder="Price"
          editable = {true}
          maxLength = {40}
        />
        <TextInput
          {...this.props} 
          // ref={(x) => {this.price = x}}
          // value={this.state.price}
          onChangeText={(price) => this.setState({price})}
          style={{height: 40, fontSize: 15, width:150, textAlign: 'right'}}
          placeholder="Price"
          editable = {true}
          maxLength = {40}
        />

        <Form>
            <Item>
                <Input placeholder="Username" />
            </Item>
            <Item last>
                <Input placeholder="Password" />
            </Item>
        </Form>
      </PageContainer>
    );
  }

  	state = {
	    selected: 'Goods',
	}

	onValueChange = (value) => {
	    this.setState({selected : value});
	}
}
