import React, { Component, PropTypes } from 'react';
import {DatePickerIOS, TextInput} from 'react-native'
import { Icon, Picker, Item, Text, Form, InputGroup, Input, Label} from 'native-base'
import MyPicker from 'SuburnaHackathon/app/components/widgets/MyPicker'
import {itemCategories} from 'SuburnaHackathon/app/containers/global/BrowsePage/content'

export const tabs = [{
  name:'goods',
  verbose: 'Goods'
}, {
  name:'services',
  verbose: 'Services'
}, {
  name:'food',
  verbose: 'Cooked Food'
}];
