import React, { Component, PropTypes } from 'react';
import {TextInput, DatePickerIOS, View, Text, Platform, StyleSheet } from 'react-native';
import { Content, Form, Input, Label, Item, Picker, Switch, Header, Segment, Button, List, ListItem, Left, Body, Icon, Right} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import HeaderBar from '../../../components/HeaderBar/HeaderBar'
import MyPicker from 'SuburnaHackathon/app/components/widgets/MyPicker'
import FormItemDetails from 'SuburnaHackathon/app/components/widgets/FormItemDetails'
import Parent from 'SuburnaHackathon/app/components/widgets/Parent'
import s from './styles';
import layout from 'SuburnaHackathon/app/styles/layout'
import {tabs} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
// should be getting this from the redux store
import {itemCategories,serviceCategories} from 'SuburnaHackathon/app/containers/global/BrowsePage/content'



const inputs = ["item", "price"];


class SellPage extends Component {

  static propTypes = {  

  };

  static defaultProps = {

  };


  state = {
    activeTab: 'goods',
    // this should be obtained from redux but hardcode for now
    item: '',
    price: '',
  };


  render() {
    const {activeTab, item, price} = this.state;

    return (
      <PageContainer>   

        <Segment>
          <Button 
            first 
            active={activeTab == tabs[0].name } 
            onPress={() => this.onTabPress(tabs[0].name)}>
              <Text>{tabs[0].verbose}</Text>
          </Button>
          <Button 
            last 
            active={activeTab == tabs[1].name}
            onPress={() => this.onTabPress(tabs[1].name)}>
            <Text>{tabs[1].verbose}</Text>
          </Button>
        </Segment>
        <Item label={tabs[1].verbose} value={tabs[1].name} />
        <ListItem itemDivider>
          <Text>Details</Text>
        </ListItem>


        <FormItemDetails
          icon="plane" text="Category" controlDesc="Choose One"
          controls={<MyPicker items={ activeTab=='services' ? serviceCategories : itemCategories}/>}
        />

        <FormItemDetails
          icon="md-add-circle" text="Item"
          controls={<TextInput
                      {...this.props} 
                      ref={(x) => {this.item = x}}
                      value={this.state.item}
                      onChangeText={(item) => this.setState({item})}
                      
                      style={{height: 40, fontSize: 15, width:150, textAlign: 'right'}}
                      placeholder="What are you selling"
                      editable = {true}
                      maxLength = {40}
                    />}
        />

        <FormItemDetails
          icon="ios-pricetag" text="Price"
          controls={<TextInput
                      {...this.props} 
                      ref={(x) => {this.price = x}}
                      value={this.state.price}
                      onChangeText={(price) => this.setState({price})}
                      

                      style={{height: 40, fontSize: 15, width:150, textAlign: 'right'}}
                      placeholder="Price"
                      editable = {true}
                      maxLength = {40}
                    />}
        />
        { activeTab=='services' && 
          <View>
            <FormItemDetails
              icon="car" text="Where" controlDesc="Select Location"
              controls={<Icon name="arrow-forward" />}
            />
            <FormItemDetails
              icon="ios-calendar" text="Dates Available" controlDesc="Select Date"
              controls={<Icon name="arrow-forward" />}
            />
            <FormItemDetails
              icon="ios-clipboard" text="Experience" controlDesc="Input your experience"
              controls={<Icon name="arrow-forward" />}
            />
          </View>
        }
        
        <ListItem itemDivider>
          <Text>Sharing</Text>
        </ListItem>

        

        
          <View style={[layout.inlineView, layout.hPadding,  {padding: 10, justifyContent: 'space-between'}]}>
            <Button onPress={this.clearAllInputs}><Text>Clear All</Text></Button>
            <Button onPress={this.submitAllInputs}><Text>Submit</Text></Button>
          </View>
        

        

      </PageContainer>
    );
  }


  onTabPress = (tab) => {
    this.setState({activeTab: tab})
  };

  onFieldChange = (e) => {
  };


  submitAllInputs = (e) => {
    const retVal = this.getAllInputs();
    this.clearAllInputs();
    // to parse the input at the server
  }

  getAllInputs = (e) => {
    const ret = []
    for(var i=0; i<inputs.length; i++){
      ret.push(this.state[inputs[i]])
    }
    return ret;
  }

  clearAllInputs = (e) => {
    this.setState({["item"]:''})
    this.setState({["price"]:''})

  }


}



class ServicesFormDetails extends Component {
  
}

module.exports = { SellPage }
