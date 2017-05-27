import React, { Component, PropTypes } from 'react';
import { 
  ScrollView, 
  View, Button, 
  Text, Platform, 
  StyleSheet, 
  Image } from 'react-native';
import { Card, CardItem } from 'native-base'

import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import SearchBar from 'SuburnaHackathon/app/components/widgets/SearchBar/SearchBar'
import CardImage from 'SuburnaHackathon/app/components/widgets/Cards/CardImage'
import CardDetailsBar from 'SuburnaHackathon/app/components/widgets/Cards/CardDetailsBar'
import {allGoods, allServices, serviceCategories} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
import s from './styles';
import layout from 'SuburnaHackathon/app/styles/layout'

export default class SingleItemPage extends Component {
  
  state = {
    open: "none",
  }


  render() {
    const src1 = "SuburnaHackathon/app/img/Cards/johnPassportPhoto.png"
    const params = getRoutingParams(this.props)
    let item = params.item;

    return (
      <PageContainer>
        
        <ScrollContainer>   
          
          <CardImage
            src={src1}            
            bottom={
              <View>
                <CardDetailsBar name={item.name} price={item.price} likes={item.likes}/>
                <Text> this is the full deescription for the item</Text>
              </View>}
            
            />

        </ScrollContainer>
      </PageContainer>
    );
  }
}


class ItemInformation extends Component {

  static propTypes = {  
    params: PropTypes.object,
  };

  static defaultProps = {

  };

  render() {

    const {params} = this.props

    let categoryIndex = params.categoryIndex;
    let itemIndex = params.itemIndex;
    const card = allItems[categoryIndex].items[itemIndex];

    return (
      <View>
        <CardDetailsBar touchEnabled={false} name={"card.name"} price={"card.price"} likes={"card.likes"}/>
        <Text> this is the deescription for the item</Text>
      </View>
    );
  }
}
