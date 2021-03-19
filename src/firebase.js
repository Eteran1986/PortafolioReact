import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyCSTlKyp7UppDzcWzQOqlF7gs9jlWRCqg4",
    authDomain: "portafolio-react-1f89b.firebaseapp.com",
    projectId: "portafolio-react-1f89b",
    storageBucket: "portafolio-react-1f89b.appspot.com",
    messagingSenderId: "104289678272",
    appId: "1:104289678272:web:e0105cfaad2fb6696d0e25"
  };
   // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();