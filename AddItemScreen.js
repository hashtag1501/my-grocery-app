import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  TouchableHighlight,
  Alert,
  Image,
} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import { RFValue } from 'react-native-responsive-fontsize';
import { SearchBar, ListItem, Input } from 'react-native-elements';

export default class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      itemName: '',
      userId: firebase.auth().currentUser.email,
      dataSource: '',
      showFlatList: false,
      quantity: '',
    };
  }
  addItem = async () => {
    db.collection().add({
      itemName: this.state.itemName,
      quantity: this.state.quantity,
    });
    this.setState = {
      itemName: '',
      quantity: '',
    };
  };
  render() {
    return (
      <View>
        <Text>My Grocery Store</Text>
        <Image
          source={{
            uri:
              'https://www.google.com/url?sa=i&url=http%3A%2F%2Fclipart-library.com%2Fgrocery-shopping-images.html&psig=AOvVaw3uogjpjHEov6ME45dvqegj&ust=1615723637197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPi8teKdre8CFQAAAAAdAAAAABAD',
          }}
          style={{width:50,height:50}}
        />
        <TextInput
          style={styles.formTextInput}
          label={'ItemName'}
          placeholder={'ItemName'}
          containerStyle={{ marginTop: RFValue(60) }}
          onChangeText={(text) => this.getItemName(text)}
          value={this.state.itemName}
        />
        <TextInput
          style={styles.formTextInput}
          label={'Quantity'}
          placeholder={'Quantity'}
          containerStyle={{ marginTop: RFValue(60) }}
          onChangeText={(Number) => this.getQuantity(Number)}
          value={this.state.quantity}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formTextInput: {
    width: '75%',
    height: RFValue(35),
    borderWidth: 1,
    padding: 10,
  },
  imageStyle: {
    height: RFValue(150),
    width: RFValue(150),
    alignSelf: 'center',
    borderWidth: 5,
    borderRadius: RFValue(10),
  },
  bookstatus: {
    flex: 0.4,
    alignItems: 'center',
  },

  status: {
    fontSize: RFValue(20),
    marginTop: RFValue(30),
  },

  buttonView: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    color: '#fff',
  },
  touchableopacity: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '90%',
  },
  requestbuttontxt: {
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    width: '75%',
    height: RFValue(60),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RFValue(50),
    backgroundColor: '#32867d',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
});
