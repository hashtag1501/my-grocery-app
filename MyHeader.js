import React, { Component } from 'react';
import { Header, Badge, Icon } from 'react-native-elements';
import { View, Text, StyeSheet, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
export default class MyHeader extends Component {
  render() {
    return (
<Header
        leftComponent={
          <Icon
            name="bars"
            type="font-awesome"
            color="#696969"
            onPress={() => this.props.navigation.toggleDrawer()}
          />
        }
      />
    );
  }
}
