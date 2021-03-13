import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';
import db from '../config';


export default class ListScreen extends Component {
  constructor() {
    super();
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      docId: '',
    };
  }

  getUserDetail = () => {
    var email = firebase.auth().currentUser.email;
    db.collection('users')
      .where('emailId', '==', email)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          var data = doc.data();
          this.setState({
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            docId: doc.id,
          });
        });
      });
  };

  updateUserDetails = () => {
    db.collection('users').doc(this.state.docId)
    .update({
      "first_name": this.state.firstName,
      "last_name" : this.state.lastName,
    })
    Alert.alert("Profile Updated Successfully")
  };

componentDidMount(){
    this.getUserDetails()
  }
render(){
  return(
    <View style={styles.container} >
        <View style={styles.formContainer}>
            <TextInput
              style={styles.formTextInput}
              placeholder ={"First Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  firstName: text
                })
              }}
              value ={this.state.firstName}
            />
            <TextInput
              style={styles.formTextInput}
              placeholder ={"Last Name"}
              maxLength ={8}
              onChangeText={(text)=>{
                this.setState({
                  lastName: text
                })
              }}
                value ={this.state.lastName}
            />
            <TouchableOpacity style={styles.button}
              onPress={()=>{
                this.updateUserDetails()
              }}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}
}
const styles = StyleSheet.create({
  container : {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer:{
    flex:1,
    width:'100%',
    alignItems: 'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
  },
  buttonText:{
    fontSize:25,
    fontWeight:"bold",
    color:"#fff"
  }
})