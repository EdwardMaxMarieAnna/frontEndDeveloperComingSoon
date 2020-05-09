import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: "project6-84919.firebaseapp.com",
    databaseURL: "https://project6-84919.firebaseio.com",
    projectId: "project6-84919",
    storageBucket: "project6-84919.appspot.com",
    messagingSenderId: "644542789621",
    appId: "1:644542789621:web:bb1b3509cfa9d95f86d2bc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;