import React, { Component, ViewPropTypes } from 'react';
import { ScrollView, View, Button, Text, Platform, StyleSheet } from 'react-native';
import {PageContainer, ScrollContainer} from 'SuburnaHackathon/app/components/widgets/Container'
import SearchBar from 'SuburnaHackathon/app/components/widgets/SearchBar/SearchBar'
import CardImage from 'SuburnaHackathon/app/components/widgets/Cards/CardImage'
import CardDetailsBar from 'SuburnaHackathon/app/components/widgets/Cards/CardDetailsBar'
import {allGoods, allServices, serviceCategories} from './content'
import {getRoutingParams} from 'SuburnaHackathon/app/utils/routing'
import s from './styles';
import layout from 'SuburnaHackathon/app/styles/layout'

export default class ManyItemsPage extends Component {

  static propTypes = {  

  };

  static defaultProps = {

  };

  render() {
    const src1 = "SuburnaHackathon/app/img/Cards/johnPassportPhoto.png"
    
    let categoryIndex = getRoutingParams(this.props).categoryIndex;
    const type = getRoutingParams(this.props).type;


    const allItems = ({
      "goods": allGoods,
      "services": allServices,
    })[type];

    const cards = allItems[categoryIndex].items;

    return (
      <PageContainer>
        <SearchBar/>
        <ScrollContainer>  
        <View style={layout.inlineView}>
          {cards.map((card, index) => (
            <CardImage
              key={index} src={src1}
              width="50%"
              bottom={<CardDetailsBar name={card.name} price={card.price} likes={card.likes} userRating={card.rating} />}
              onPress={() => this.props.navigation.navigate('SingleItemPage', { item: card })}
              />
          ))}
        </View>

        </ScrollContainer>
      </PageContainer>
    );
  }
}
