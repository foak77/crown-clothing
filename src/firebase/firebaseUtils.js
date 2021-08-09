import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAuS6v-11R3BLtjoQO9OKTz4EeACt7a_6E",
    authDomain: "crowndb-27173.firebaseapp.com",
    projectId: "crowndb-27173",
    storageBucket: "crowndb-27173.appspot.com",
    messagingSenderId: "102525478695",
    appId: "1:102525478695:web:0aa1bed23b6e7e020d6b02",
    measurementId: "G-143MR0J5YE"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});

export const signInWithGoogle = () => auth.signInWithPopup(provider);