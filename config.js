import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCKPGV9iJwGvvyAd5uDKJaqqAO9cwM9E0g',
  authDomain: 'my-grocery-56054.firebaseapp.com',
  databaseURL: 'https://my-grocery-56054-default-rtdb.firebaseio.com',
  projectId: 'my-grocery-56054',
  storageBucket: 'my-grocery-56054.appspot.com',
  messagingSenderId: '657550222129',
  appId: '1:657550222129:web:cc3d714c249be8cb7c0610',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();
