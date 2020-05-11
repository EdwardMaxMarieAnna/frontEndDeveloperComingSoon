import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
    apiKey: "AIzaSyAyCFFZDCmoIWU5jyljUXyxyj1EOIJRsIQ",
    authDomain: "project6-two.firebaseapp.com",
    databaseURL: "https://project6-two.firebaseio.com",
    projectId: "project6-two",
    storageBucket: "project6-two.appspot.com",
    messagingSenderId: "459481245957",
    appId: "1:459481245957:web:ae9894b25101f7e2c9af6c"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;