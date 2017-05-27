import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import CodeSharing from './app/index';

export default class SuburnaHackathon extends Component {
  render() {
    return (      
      <CodeSharing/>
    );
  }
}


AppRegistry.registerComponent('SuburnaHackathon', () => SuburnaHackathon);
