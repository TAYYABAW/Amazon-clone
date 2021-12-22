import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcV4ZH8KOaMczHbb4DYme67YPcmMRD_hA",
  authDomain: "challenge-9bd86.firebaseapp.com",
  projectId: "challenge-9bd86",
  storageBucket: "challenge-9bd86.appspot.com",
  messagingSenderId: "832179493578",
  appId: "1:832179493578:web:9e9a54b595b412798fb233",
  measurementId: "${config.measurementId}",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
