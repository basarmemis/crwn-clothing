import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyBoH1jvrEF-IUSpjGYr5fkAkRt-d7M2xp8",
    authDomain: "crwn-data-58465.firebaseapp.com",
    databaseURL: "https://crwn-data-58465.firebaseio.com",
    projectId: "crwn-data-58465",
    storageBucket: "crwn-data-58465.appspot.com",
    messagingSenderId: "782641520684",
    appId: "1:782641520684:web:3a46dee0b4abe09b92b189",
    measurementId: "G-T662VJ98SW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;