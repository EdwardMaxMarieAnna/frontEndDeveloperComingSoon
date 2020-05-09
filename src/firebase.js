import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const API_KEY_TWO = process.env.REACT_APP_FIREBASE_API_KEY_TWO;

// Firebase Auth provides different methods of signing in, such as signInWithRedirect, which redirects the user to a new page, and signInWithPopup, which makes use of a pop-up.
const provider = new firebase.auth.GoogleAuthProvider();

// Your web app's Firebase configuration
//  export const firebaseConfig = {
//     apiKey: API_KEY,
//     authDomain: "project6-84919.firebaseapp.com",
//     databaseURL: "https://project6-84919.firebaseio.com",
//     projectId: "project6-84919",
//     storageBucket: "project6-84919.appspot.com",
//     messagingSenderId: "644542789621",
//     appId: "1:644542789621:web:bb1b3509cfa9d95f86d2bc"
// };

//For part Deux testing

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

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//export our Google sign-in function
//allows us to use SignInWithGoogle function in the onClick handler functions for the Sign In with Google button in our SignIn and SignUp components.
export const signInWithGoogle = () => {
    auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};


export default firebase;