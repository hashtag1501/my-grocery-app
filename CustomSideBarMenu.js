import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImagePicker,
} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { Avatar } from 'react-native-elements';

import firebase from 'firebase';

export default class CustomSideBarMenu extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props} />
        </View>
        <View style={styles.logOutContainer}>
          <TouchableOpacity
            style={styles.logOutButton}
            onPress={() => {
              this.props.navigation.navigate('AddItemScreen');
              firebase.auth().signOut();
            }}>
            <Text>Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
selectPicture = async () => {
  const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
    MediaType: ImagePicker.MediaTypeOption.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });
  if (!cancelled) {
    this.uploadImage(uri, this.state.userId);
  }
};
uploadImage = async () => {
  var response = await fetch(uri);
  var blob = await response.blob();
  var ref = firebase
    .storage()
    .ref()
    .child('user_profile/' + imageName);
  return ref.put(blob).then((response) => {
    this.fetchImage(imageName);
  });
};

fetchImage = (imageName) => {
  varstorageRef = firebase.storage.child('user_profile/' + imageName);
  storageRef.getDownloadUrl.then((url) => {
    this.setState({
      image: url,
    }).catch((error) => {
      this.setState({
        image: '#',
      });
    });
  });
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItemsContainer: {
    flex: 0.8,
  },
  logOutContainer: {
    flex: 0.2,
    justifyContent: 'flex-end',
    paddingBottom: 30,
  },
  logOutButton: {
    height: 30,
    width: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  logOutText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
