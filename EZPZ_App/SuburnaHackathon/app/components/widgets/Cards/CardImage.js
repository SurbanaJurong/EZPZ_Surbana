import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, Image, View, ScrollView } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';


export default class CardImage extends Component {

  static propTypes = {  
    top: PropTypes.object,
    src: PropTypes.string,
    bottom: PropTypes.object,
    onPress: PropTypes.func,
    width: PropTypes.string,
    containerStyle: PropTypes.object,
    imageStyle: PropTypes.object,
    touchEnabled: PropTypes.bool,
  };

  static defaultProps = {
    width: "100%",
    body: "Header",
    onPress: () => {},
    touchEnabled: true,
  };

    render() {
      const {
        top, src, bottom, 
        onPress, width, 
        containerStyle, imageStyle} = this.props;

      // const _src = {src:require({src})}
      // console.log("onpress", this.props.navigation.params.name)

      return (
        <TouchableOpacity onPress={onPress} style={{width: width, height: "auto"}}>
          <Card >
            <CardItem>
              {top}
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{uri: src}}
                style={{width: "100%", height: 50}}
                />
                
            </CardItem>
            <CardItem>
              {bottom}
            </CardItem>
          </Card>
        </TouchableOpacity>
      );
    }
}