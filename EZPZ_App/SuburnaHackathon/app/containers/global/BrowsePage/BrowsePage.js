import React, { Component, ViewPropTypes } from 'react';
import { ScrollView, View, Button, Text, Platform, StyleSheet } from 'react-native';
import { List, ListItem, Left, Body} from 'native-base'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import SearchBar from 'SuburnaHackathon/app/components/widgets/SearchBar/SearchBar'
import CardImage from 'SuburnaHackathon/app/components/widgets/Cards/CardImage'
import CardDetailsBar from 'SuburnaHackathon/app/components/widgets/Cards/CardDetailsBar'
import {itemCategories, itemCategoryCards, serviceCategories} from './content'

import s from './styles';
import layout from 'SuburnaHackathon/app/styles/layout'

export default class BrowsePage extends Component {
  
  state = {
    open: "none",
  }


  render() {
    // const src1 = "SuburnaHackathon/app/img/Cards/johnPassportPhoto.png"
    const src1 = "./johnPassportPhoto.png"
    const cards = itemCategories;
    const servicecards = serviceCategories;

    return (
      <PageContainer>
        <SearchBar/>
        <ScrollContainer>   
          <ListItem itemDivider>
            <Text>Goods for Sale/Rent</Text>
          </ListItem>
          <View style={layout.inlineView}>
            {cards.map((card, index) => (
              <CardImage
                key={index} 
                width="50%"
                src={card.src}
                top={<Text>{card.name}</Text>}
                onPress={() => this.props.navigation.navigate('ManyItemsPage', { type:'goods', categoryIndex: index })}
                />
            ))}
          </View>
          <ListItem itemDivider>
            <Text>Services for Sale</Text>
          </ListItem>
          <View style={layout.inlineView}>
            {servicecards.map((card, index) => (
              <CardImage
                key={index} 
                width="50%"
                src={card.src}
                top={<Text>{card.name}</Text>}
                onPress={() => this.props.navigation.navigate('ManyItemsPage', { type:'services', categoryIndex: index })}
                />
            ))}
          </View>
        </ScrollContainer>
      </PageContainer>
    );
  }
}
