import firebase from 'firebase';
let firebaseConfig = {
  apiKey: 'AIzaSyCkX0PORemPX7R1fvXHv0qOUPfy23q4u_A',
  authDomain: 'khata-25a56.firebaseapp.com',
  databaseURL: 'https://khata-25a56.firebaseio.com',
  projectId: 'khata-25a56',
  storageBucket: 'khata-25a56.appspot.com',
  messagingSenderId: '1088292153842',
  appId: '1:1088292153842:web:b078c42874e02201ef636b',
  measurementId: 'G-DMT91HHJXN',
};
export const fbConf = firebase.initializeApp(firebaseConfig);
