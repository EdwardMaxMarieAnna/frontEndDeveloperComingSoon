import firebase from firebase;
// import firebase from "firebase/app";
// import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAv0b9u3Bbw38wXpfF3r86qneCcNo9BasE",
    authDomain: "project6-f3485.firebaseapp.com",
    databaseURL: "https://project6-f3485.firebaseio.com",
    projectId: "project6-f3485",
    storageBucket: "project6-f3485.appspot.com",
    messagingSenderId: "422266070626",
    appId: "1:422266070626:web:7fc3b7a6f768f1a5a9933b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
let googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ "prompt": "select_account" });
export const provider = googleProvider;
export const dbRef = firebase.database().ref('/');
export default firebase;

export default firebase;